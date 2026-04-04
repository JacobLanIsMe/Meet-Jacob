// Post-build prerender script.
// Uses puppeteer-core (already installed) + a minimal static HTTP server to
// render the built app with a real Chromium instance and replace dist/index.html
// with the server-rendered HTML so search-engine crawlers see content immediately.
//
// Non-fatal: if Chrome is unavailable (e.g. CI without a display or missing
// Chromium), the script exits 0 so the overall build still succeeds and all
// other files (robots.txt, sitemap.xml, verification files) are still deployed.

const http = require('http')
const fs = require('fs')
const path = require('path')

// Resolve Chrome executable — try full `puppeteer` first, fall back to
// system Chrome on Linux CI environments.
function resolveChromePath() {
  try {
    return require('puppeteer').executablePath()
  } catch (_) {}
  // Common CI paths
  const candidates = [
    '/usr/bin/google-chrome',
    '/usr/bin/google-chrome-stable',
    '/usr/bin/chromium-browser',
    '/usr/bin/chromium',
  ]
  for (const p of candidates) {
    if (fs.existsSync(p)) return p
  }
  return null
}

const DIST = path.join(__dirname, 'dist')
const PORT = 18765

// ── 1. Minimal static file server ────────────────────────────────────────────
function createServer() {
  return new Promise((resolve, reject) => {
    const MIME = {
      '.html': 'text/html; charset=utf-8',
      '.js':   'application/javascript',
      '.css':  'text/css',
      '.png':  'image/png',
      '.jpg':  'image/jpeg',
      '.svg':  'image/svg+xml',
      '.ico':  'image/x-icon',
      '.woff': 'font/woff',
      '.woff2':'font/woff2',
      '.json': 'application/json',
      '.xml':  'application/xml',
      '.txt':  'text/plain',
    }

    const server = http.createServer((req, res) => {
      let filePath = path.join(DIST, req.url === '/' ? '/index.html' : req.url)
      // Strip query strings
      filePath = filePath.split('?')[0].split('#')[0]

      if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
        filePath = path.join(DIST, 'index.html')
      }

      const ext = path.extname(filePath)
      const contentType = MIME[ext] || 'application/octet-stream'

      fs.readFile(filePath, (err, data) => {
        if (err) { res.writeHead(404); res.end('Not found'); return }
        res.writeHead(200, { 'Content-Type': contentType })
        res.end(data)
      })
    })

    server.listen(PORT, '127.0.0.1', () => resolve(server))
    server.on('error', reject)
  })
}

// ── 2. Prerender ─────────────────────────────────────────────────────────────
async function main() {
  const chromePath = resolveChromePath()
  if (!chromePath) {
    console.warn('[prerender] Chrome not found — skipping prerender. Build continues.')
    process.exit(0)
  }

  let server, browser

  try {
    server = await createServer()
    console.log(`[prerender] Static server started on http://127.0.0.1:${PORT}`)

    // Inline-require puppeteer-core to launch real Chrome
    const puppeteer = require('puppeteer-core')
    browser = await puppeteer.launch({
      executablePath: chromePath,
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    })

    const page = await browser.newPage()
    await page.goto(`http://127.0.0.1:${PORT}/`, { waitUntil: 'networkidle0', timeout: 30000 })

    // Wait for Vue to finish mounting: hero section h1 must be present
    await page.waitForSelector('#home h1', { timeout: 10000 })

    const html = await page.content()

    const outputPath = path.join(DIST, 'index.html')
    fs.writeFileSync(outputPath, html, 'utf-8')
    console.log(`[prerender] Saved ${outputPath} (${(html.length / 1024).toFixed(1)} kB)`)
    console.log('[prerender] Done.')
  } catch (err) {
    console.warn('[prerender] Warning:', err.message)
    console.warn('[prerender] Prerender failed — build continues without prerendering.')
    // Exit 0: prerender is enhancement-only; core files (verification, sitemap, etc.)
    // are already in dist/ from the Vite build step.
    process.exit(0)
  } finally {
    if (browser) await browser.close()
    if (server) server.close()
  }
}

main()
