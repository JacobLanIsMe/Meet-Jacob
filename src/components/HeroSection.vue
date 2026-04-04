<template>
  <section id="home" class="hero">
    <!-- Animated Background Grid -->
    <div class="hero-grid" aria-hidden="true"></div>
    <!-- Glow Orbs -->
    <div class="orb orb-blue" aria-hidden="true"></div>
    <div class="orb orb-green" aria-hidden="true"></div>

    <div class="container hero-inner">
      <!-- Left: Text Content -->
      <div class="hero-content">
        <div class="hero-greeting fade-up visible">
          <span class="mono" style="color: var(--sw-secondary)">// Hello, world!</span>
        </div>

        <h1 class="hero-name fade-up visible" style="animation-delay:0.1s">
          <span>藍紹瑋</span>
          <span class="hero-name-en gradient-sw">Jacob Lan</span>
        </h1>

        <div class="hero-title-row fade-up visible" style="animation-delay:0.2s">
          <span class="hero-title-badge badge badge-sw">軟體工程師</span>
          <span class="hero-title-sep">×</span>
          <span class="hero-title-badge badge badge-bio">生物化學博士</span>
        </div>

        <p class="hero-desc fade-up visible" style="animation-delay:0.3s">
          {{ profile.summary }}
        </p>

        <!-- Stats -->
        <div class="hero-stats fade-up visible" style="animation-delay:0.4s">
          <div v-for="stat in profile.software.stats" :key="stat.label" class="stat-item">
            <span class="stat-value gradient-sw">{{ stat.value }}</span>
            <span class="stat-label">{{ stat.label }}</span>
          </div>
        </div>

        <!-- CTA Buttons -->
        <div class="hero-actions fade-up visible" style="animation-delay:0.5s">
          <a class="btn btn-primary" href="#software" @click.prevent="scrollTo('software')">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
            查看軟體經歷
          </a>
          <a class="btn btn-outline" href="#contact" @click.prevent="scrollTo('contact')">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            合作洽詢
          </a>
        </div>

        <!-- Social Links -->
        <div class="hero-socials fade-up visible" style="animation-delay:0.6s">
          <a :href="profile.github" target="_blank" rel="noopener" class="social-link" title="GitHub">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          </a>
          <a :href="profile.linkedin" target="_blank" rel="noopener" class="social-link" title="LinkedIn">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a :href="`mailto:${profile.email}`" class="social-link" title="Email">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
          </a>
        </div>
      </div>

      <!-- Right: Profile Card -->
      <div class="hero-card fade-up visible" style="animation-delay:0.35s">
        <div class="profile-card">
          <div class="profile-avatar">
            <span class="avatar-initials">JL</span>
            <div class="avatar-ring sw"></div>
          </div>
          <div class="profile-info">
            <div class="profile-name">Jacob Lan</div>
            <div class="profile-sub">藍紹瑋</div>
          </div>

          <div class="card-divider"></div>

          <div class="profile-stack">
            <div class="stack-title">主要技術棧</div>
            <div class="stack-tags">
              <span v-for="t in mainTech" :key="t" class="tag">{{ t }}</span>
            </div>
          </div>

          <div class="card-divider"></div>

          <div class="profile-highlights">
            <div class="highlight-item" v-for="h in highlights" :key="h.text">
              <span class="highlight-dot" :style="{ background: h.color }"></span>
              <span>{{ h.text }}</span>
            </div>
          </div>

          <!-- Available indicator -->
          <div class="availability">
            <span class="avail-dot"></span>
            <span>目前開放軟體工程合作</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="scroll-indicator" aria-hidden="true">
      <span class="mono" style="font-size:0.7rem;color:var(--text-muted)">scroll</span>
      <div class="scroll-line"></div>
    </div>
  </section>
</template>

<script setup>
import { profile } from '../data/profile.js'

const mainTech = ['.NET Core', 'Vue 3', 'Azure', 'Dynamics 365', 'SQL Server', 'RabbitMQ']
const highlights = [
  { text: '3年+ 後端開發經驗', color: 'var(--sw-primary)' },
  { text: 'Azure 雙認證', color: '#0078d4' },
  { text: 'NTU 生化博士', color: 'var(--bio-primary)' }
]

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
/* ── Hero Layout ── */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  padding-top: 80px;
}

/* ── Background Grid ── */
.hero-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(37,99,235,0.07) 1px, transparent 1px),
    linear-gradient(90deg, rgba(37,99,235,0.07) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%);
}

/* ── Orbs ── */
.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
}
.orb-blue {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(37,99,235,0.12), transparent 70%);
  top: -100px;
  left: -100px;
  animation: floatOrb 8s ease-in-out infinite alternate;
}
.orb-green {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(5,150,105,0.10), transparent 70%);
  bottom: -80px;
  right: -80px;
  animation: floatOrb 10s ease-in-out infinite alternate-reverse;
}

@keyframes floatOrb {
  from { transform: translate(0, 0); }
  to   { transform: translate(30px, 20px); }
}

/* ── Inner ── */
.hero-inner {
  display: grid;
  grid-template-columns: 1fr 380px;
  align-items: center;
  gap: 64px;
  padding-top: 32px;
  padding-bottom: 80px;
}

/* ── Left Side ── */
.hero-greeting {
  font-size: 0.9rem;
  margin-bottom: 16px;
  opacity: 0.8;
}

.hero-name {
  display: flex;
  flex-direction: column;
  font-size: clamp(2.4rem, 5vw, 4rem);
  font-weight: 800;
  letter-spacing: -1.5px;
  line-height: 1.1;
  margin-bottom: 20px;
}
.hero-name-en {
  font-size: clamp(2.8rem, 6vw, 4.8rem);
}

.hero-title-row {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 24px;
}
.hero-title-sep {
  color: var(--text-muted);
  font-weight: 600;
}

.hero-desc {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.8;
  max-width: 560px;
  margin-bottom: 32px;
}

/* ── Stats ── */
.hero-stats {
  display: flex;
  gap: 32px;
  margin-bottom: 32px;
  flex-wrap: wrap;
}
.stat-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.stat-value {
  font-size: 1.8rem;
  font-weight: 800;
  letter-spacing: -1px;
  line-height: 1;
}
.stat-label {
  font-size: 0.75rem;
  color: var(--text-muted);
  white-space: nowrap;
}

/* ── Actions ── */
.hero-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 28px;
}

/* ── Socials ── */
.hero-socials {
  display: flex;
  gap: 12px;
}
.social-link {
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border-light);
  color: var(--text-secondary);
  transition: var(--transition);
}
.social-link:hover {
  border-color: var(--sw-border);
  color: var(--sw-secondary);
  background: var(--sw-glow);
  transform: translateY(-2px);
}

/* ── Profile Card ── */
.profile-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 28px;
  position: relative;
  overflow: hidden;
  box-shadow: var(--shadow-card);
}
.profile-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--sw-primary), var(--bio-primary));
}

.profile-avatar {
  position: relative;
  width: 72px;
  height: 72px;
  margin: 0 auto 16px;
}
.avatar-initials {
  width: 72px;
  height: 72px;
  background: linear-gradient(135deg, var(--sw-primary), #6366f1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  font-weight: 700;
  color: #fff;
  font-family: 'Inter', sans-serif;
}
.avatar-ring {
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  border: 2px solid transparent;
  animation: spin 6s linear infinite;
}
.avatar-ring.sw {
  border-top-color: var(--sw-primary);
  border-right-color: transparent;
  border-bottom-color: var(--sw-primary);
  border-left-color: transparent;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

.profile-info {
  text-align: center;
  margin-bottom: 20px;
}
.profile-name {
  font-size: 1.1rem;
  font-weight: 700;
}
.profile-sub {
  font-size: 0.85rem;
  color: var(--text-secondary);
}

.card-divider {
  height: 1px;
  background: var(--border-color);
  margin: 16px 0;
}

.stack-title {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 10px;
}
.stack-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.profile-highlights { display: flex; flex-direction: column; gap: 10px; }
.highlight-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.85rem;
  color: var(--text-secondary);
}
.highlight-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}

.availability {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 16px;
  padding: 8px 12px;
  background: rgba(5, 150, 105, 0.08);
  border: 1px solid var(--bio-border);
  border-radius: var(--radius-sm);
  font-size: 0.8rem;
  color: var(--bio-secondary);
}
.avail-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--bio-primary);
  flex-shrink: 0;
  animation: pulse 2s ease-in-out infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.15); }
}

/* ── Scroll Indicator ── */
.scroll-indicator {
  position: absolute;
  bottom: 28px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.scroll-line {
  width: 1px;
  height: 40px;
  background: linear-gradient(to bottom, var(--sw-primary), transparent);
  animation: scrollLine 2s ease-in-out infinite;
}
@keyframes scrollLine {
  0% { transform: scaleY(0); transform-origin: top; }
  50% { transform: scaleY(1); transform-origin: top; }
  51% { transform: scaleY(1); transform-origin: bottom; }
  100% { transform: scaleY(0); transform-origin: bottom; }
}

/* ── Responsive ── */
@media (max-width: 900px) {
  .hero-inner {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .hero-card {
    max-width: 380px;
    margin: 0 auto;
    width: 100%;
  }
}
@media (max-width: 480px) {
  .hero-stats { gap: 20px; }
}
</style>
