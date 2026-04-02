<template>
  <section id="contact" class="section contact-section">
    <div class="container">
      <!-- Header -->
      <div class="section-header fade-c-el">
        <div class="section-label" style="color: var(--sw-secondary)">
          <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
          合作洽詢
        </div>
        <h2 class="section-title">
          讓我們<span class="gradient-sw"> 一起合作</span>
        </h2>
      </div>

      <div class="contact-layout">
        <!-- Left: Services -->
        <div class="contact-left fade-c-el">
          <div class="services-card">
            <div class="services-title">可提供服務</div>
            <div class="services-list">
              <div v-for="svc in services" :key="svc" class="service-item">
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
                {{ svc }}
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Contact Info -->
        <div class="contact-info fade-c-el">
          <div class="info-card">
            <div class="info-items">
              <a :href="`mailto:${profile.email}`" class="info-item">
                <div class="info-icon">
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <div class="info-text">
                  <div class="info-label">Email</div>
                  <div class="info-value">{{ profile.email }}</div>
                </div>
                <svg class="info-arrow" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
              </a>

              <a :href="profile.github" target="_blank" rel="noopener" class="info-item">
                <div class="info-icon">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                </div>
                <div class="info-text">
                  <div class="info-label">GitHub</div>
                  <div class="info-value">JacobLanIsMe</div>
                </div>
                <svg class="info-arrow" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
              </a>

              <a :href="profile.linkedin" target="_blank" rel="noopener" class="info-item">
                <div class="info-icon">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </div>
                <div class="info-text">
                  <div class="info-label">LinkedIn</div>
                  <div class="info-value">藍紹瑋 (Jacob Lan)</div>
                </div>
                <svg class="info-arrow" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
              </a>

              <div class="info-item no-link">
                <div class="info-icon">
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <div class="info-text">
                  <div class="info-label">Phone</div>
                  <div class="info-value">{{ profile.phone }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Footer -->
    <div class="site-footer">
      <div class="container footer-inner">
        <span>2026 藍紹瑋 Jacob Lan © 版權所有</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import { profile } from '../data/profile.js'

const services = [
  '忠誠點數系統導入',
  '前後端系統開發',
  '雲端架構設計與部署',
  'Microsoft Dynamics 365 客製化',
  'RAG',
  '資料庫設計與效能優化',
  '高併發系統重構與優化',
  '跨領域專案協作（生醫 × 程式）'
]

let observer = null
onMounted(() => {
  setTimeout(() => {
    const els = document.querySelectorAll('.fade-c-el')
    observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.08 }
    )
    els.forEach(el => observer.observe(el))
  }, 200)
})
onUnmounted(() => observer?.disconnect())
</script>

<style scoped>
.contact-section {
  position: relative;
}
.contact-section::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--sw-border), transparent);
}

.section-header { margin-bottom: 32px; }

/* ── Left col ── */
.contact-left {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.fade-c-el {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.fade-c-el.visible {
  opacity: 1;
  transform: none;
}

/* ── Layout ── */
.contact-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: start;
}

@media (max-width: 768px) {
  .contact-layout {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .contact-left {
    padding-right: 0;
  }
}

/* ── Info Card ── */
.info-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius);
  overflow: hidden;
  margin-bottom: 16px;
}
.info-card-header {
  padding: 16px 20px;
  border-bottom: 1px solid var(--border-color);
  background: rgba(37,99,235,0.05);
}
.avail-indicator {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--bio-secondary);
}
.avail-pulse {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--bio-primary);
  animation: pulse 2s ease-in-out infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.2); }
}

.info-items { }
.info-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px 20px;
  border-bottom: 1px solid var(--border-color);
  text-decoration: none;
  transition: var(--transition-fast);
  cursor: pointer;
}
.info-item:last-child { border-bottom: none; }
.info-item:not(.no-link):hover {
  background: rgba(37,99,235,0.05);
}
.info-item.no-link { cursor: default; }

.info-icon {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--sw-glow);
  border: 1px solid var(--sw-border);
  border-radius: var(--radius-sm);
  color: var(--sw-secondary);
  flex-shrink: 0;
}
.info-text { flex: 1; }
.info-label {
  font-size: 0.72rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 2px;
}
.info-value {
  font-size: 0.88rem;
  font-weight: 500;
  color: var(--text-primary);
}
.info-arrow { color: var(--text-muted); }

/* ── Services ── */
.services-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius);
  padding: 20px;
}
.services-title {
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: var(--sw-secondary);
  margin-bottom: 14px;
}
.services-list { display: flex; flex-direction: column; gap: 8px; }
.service-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.85rem;
  color: var(--text-secondary);
}
.service-item svg { color: var(--sw-primary); flex-shrink: 0; }

/* ── Footer ── */
.site-footer {
  margin-top: 80px;
  border-top: 1px solid var(--border-color);
  padding: 24px 0;
}
.footer-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  font-size: 0.82rem;
  color: var(--text-muted);
}
.footer-sep { color: var(--border-light); }
.footer-email {
  color: var(--text-muted);
  transition: var(--transition-fast);
}
.footer-email:hover { color: var(--sw-secondary); }


</style>
