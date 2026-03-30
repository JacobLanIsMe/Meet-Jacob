<template>
  <section id="software" class="section sw-section">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header fade-in-el">
        <div class="section-label" style="color: var(--sw-secondary)">
          <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
          主要專長
        </div>
        <h2 class="section-title">
          軟體工程師<span class="gradient-sw"> 經歷</span>
        </h2>
        <p class="section-desc">
          3 年以上企業級後端開發經驗，服務香港多間大型集團，擅長 .NET Core、Azure 雲端架構與 Microsoft Dynamics 365 客製化開發。
        </p>
      </div>

      <!-- Tabs -->
      <div class="tabs fade-in-el">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          class="tab-btn"
          :class="{ active: activeTab === tab.id }"
          @click="activeTab = tab.id"
        >
          <span>{{ tab.icon }}</span>
          {{ tab.label }}
        </button>
      </div>

      <!-- ══ Tab: 工作經歷 ══ -->
      <div v-show="activeTab === 'experience'" class="tab-content">
        <div class="timeline">
          <div
            v-for="(job, idx) in profile.software.experience"
            :key="idx"
            class="timeline-item fade-in-el"
          >
            <div class="tl-connector">
              <div class="tl-dot" :class="{ current: job.isCurrent }"></div>
              <div v-if="idx < profile.software.experience.length - 1" class="tl-line"></div>
            </div>
            <div class="tl-card" :class="{ 'tl-current': job.isCurrent }">
              <div class="tl-header" @click="toggleJob(idx)">
                <div class="tl-meta">
                  <div class="tl-company">{{ job.company }}</div>
                  <div class="tl-role">
                    <span class="badge badge-sw">{{ job.role }}</span>
                    <span v-if="job.isCurrent" class="badge-current">現職</span>
                  </div>
                </div>
                <div class="tl-right">
                  <span class="tl-period">{{ job.period }}</span>
                  <svg
                    class="tl-arrow"
                    :class="{ rotated: openJobs.includes(idx) }"
                    width="16" height="16" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2.5"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
                  </svg>
                </div>
              </div>
              <transition name="expand">
                <ul v-if="openJobs.includes(idx)" class="tl-highlights">
                  <li v-for="h in job.highlights" :key="h">{{ h }}</li>
                </ul>
              </transition>
            </div>
          </div>
        </div>
      </div>

      <!-- ══ Tab: 技術技能 ══ -->
      <div v-show="activeTab === 'skills'" class="tab-content">
        <div class="skills-grid">
          <div
            v-for="group in profile.software.skillGroups"
            :key="group.category"
            class="skill-group fade-in-el"
          >
            <div class="sg-header">
              <span class="sg-icon">{{ group.icon }}</span>
              <span class="sg-title">{{ group.category }}</span>
            </div>
            <div class="skill-tags">
              <span v-for="skill in group.skills" :key="skill.name" class="skill-chip" :style="{ borderColor: group.color + '55', color: group.color }">{{ skill.name }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- ══ Tab: 專案作品 ══ -->
      <div v-show="activeTab === 'projects'" class="tab-content">
        <!-- Filter -->
        <div class="project-filters fade-in-el">
          <button
            v-for="f in filters"
            :key="f.id"
            class="filter-btn"
            :class="{ active: activeFilter === f.id }"
            @click="activeFilter = f.id"
          >
            {{ f.label }}
          </button>
        </div>

        <div class="projects-grid">
          <div
            v-for="proj in filteredProjects"
            :key="proj.id"
            class="project-card fade-in-el"
          >
            <div class="pc-header">
              <div>
                <div class="pc-name">{{ proj.name }}</div>
                <div class="pc-client">{{ proj.client }}</div>
              </div>
            </div>

            <p class="pc-desc">{{ proj.description }}</p>

            <!-- Tech Tags -->
            <div class="pc-tech">
              <span v-for="t in proj.tech" :key="t" class="tag">{{ t }}</span>
            </div>

            <!-- Highlights -->
            <div class="pc-highlights">
                <div class="pc-hl-title">主要工作內容</div>
                <ul>
                  <li v-for="h in proj.highlights" :key="h">{{ h }}</li>
                </ul>
                <div class="pc-links">
                <!-- single repo -->
                <a
                  v-if="proj.github && !proj.githubBackend"
                  :href="proj.github"
                  target="_blank" rel="noopener"
                  class="btn btn-outline pc-github"
                >
                  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                  GitHub
                </a>
                <!-- backend + frontend repos -->
                <template v-if="proj.githubBackend">
                  <a :href="proj.githubBackend" target="_blank" rel="noopener" class="btn btn-outline pc-github">
                    <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                    Backend
                  </a>
                  <a v-if="proj.githubFrontend" :href="proj.githubFrontend" target="_blank" rel="noopener" class="btn btn-outline pc-github">
                    <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                    Frontend
                  </a>
                </template>
                <!-- slides -->
                <a
                  v-if="proj.slides"
                  :href="proj.slides"
                  target="_blank" rel="noopener"
                  class="btn btn-outline pc-github pc-slides"
                >
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M7 21h10M12 3v14M3 7h18M3 7a2 2 0 012-2h14a2 2 0 012 2"/></svg>
                  投影片
                </a>
                </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ══ Tab: 證照 ══ -->
      <div v-show="activeTab === 'certs'" class="tab-content">
        <div class="certs-row">
          <a
            v-for="cert in profile.software.certifications"
            :key="cert.subtitle"
            class="cert-card fade-in-el"
            :href="cert.link"
            target="_blank"
            rel="noopener"
          >
            <div class="cert-icon">
              <img :src="cert.badge" :alt="cert.subtitle" width="56" height="56" />
            </div>
            <div class="cert-info">
              <div class="cert-name">{{ cert.name }}</div>
              <div class="cert-subtitle">{{ cert.subtitle }}</div>
              <span class="cert-level" :class="cert.level.toLowerCase()">{{ cert.level }}</span>
            </div>
          </a>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { profile } from '../data/profile.js'

const activeTab = ref('experience')
const openJobs = ref([0]) // first job open by default

const activeFilter = ref('all')
let skillsObserver = null

const tabs = [
  { id: 'experience', label: '工作經歷', icon: '💼' },
  { id: 'skills',     label: '技術技能', icon: '⚡' },
  { id: 'projects',   label: '專案作品', icon: '🚀' },
  { id: 'certs',      label: '證照',     icon: '🏆' }
]

const filters = [
  { id: 'all',        label: '全部' },
  { id: 'enterprise', label: '企業專案' },
  { id: 'personal',   label: '個人作品' }
]

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') return profile.software.projects
  return profile.software.projects.filter(p => p.category === activeFilter.value)
})

function toggleJob(idx) {
  const i = openJobs.value.indexOf(idx)
  if (i === -1) openJobs.value.push(idx)
  else openJobs.value.splice(i, 1)
}



// Scroll-triggered fade-in animation
let globalObserver = null

function setupObserver() {
  const els = document.querySelectorAll('.fade-in-el')
  globalObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible')
    })
  }, { threshold: 0.1 })
  els.forEach(el => globalObserver.observe(el))
  skillsObserver = globalObserver
}

watch(activeFilter, async () => {
  await nextTick()
  const els = document.querySelectorAll('.fade-in-el:not(.visible)')
  els.forEach(el => {
    el.classList.add('visible')
    globalObserver?.observe(el)
  })
})

onMounted(() => setTimeout(setupObserver, 200))
onUnmounted(() => skillsObserver?.disconnect())
</script>

<style scoped>
/* ── Section BG ── */
.sw-section {
  position: relative;
}
.sw-section::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--sw-border), transparent);
}

.section-header {
  margin-bottom: 40px;
}

/* ── Fade in ── */
.fade-in-el {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.fade-in-el.visible {
  opacity: 1;
  transform: none;
}

/* ── Tabs ── */
.tabs {
  display: flex;
  gap: 4px;
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 40px;
  overflow-x: auto;
  scrollbar-width: none;
}
.tabs::-webkit-scrollbar { display: none; }

.tab-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 20px;
  background: none;
  border: none;
  border-bottom: 2px solid transparent;
  color: var(--text-secondary);
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
  transition: var(--transition-fast);
  margin-bottom: -1px;
}
.tab-btn:hover { color: var(--text-primary); }
.tab-btn.active {
  color: var(--sw-secondary);
  border-bottom-color: var(--sw-primary);
}

.tab-content { min-height: 300px; }

/* ──────────────────────────────
   EXPERIENCE TIMELINE
────────────────────────────── */
.timeline { display: flex; flex-direction: column; gap: 0; }

.timeline-item {
  display: grid;
  grid-template-columns: 32px 1fr;
  gap: 16px;
}

.tl-connector {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
}
.tl-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--border-light);
  border: 2px solid var(--bg-secondary);
  flex-shrink: 0;
  transition: var(--transition);
}
.tl-dot.current {
  background: var(--sw-primary);
  box-shadow: 0 0 10px rgba(37,99,235,0.35);
}
.tl-line {
  width: 2px;
  flex: 1;
  background: var(--border-color);
  margin-top: 6px;
  min-height: 24px;
}

.tl-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius);
  margin-bottom: 16px;
  overflow: hidden;
  transition: var(--transition);
}
.tl-card:hover, .tl-current {
  border-color: var(--sw-border);
}
.tl-current {
  box-shadow: var(--shadow-sw);
}

.tl-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 20px 24px;
  cursor: pointer;
  gap: 12px;
}
.tl-meta { flex: 1; }
.tl-company {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 6px;
}
.tl-role {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}
.badge-current {
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 600;
  background: rgba(5,150,105,0.1);
  color: var(--bio-secondary);
  border: 1px solid var(--bio-border);
}

.tl-right {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}
.tl-period {
  font-size: 0.8rem;
  color: var(--text-muted);
  font-family: 'JetBrains Mono', monospace;
  white-space: nowrap;
}
.tl-arrow {
  color: var(--text-muted);
  transition: transform 0.3s ease;
}
.tl-arrow.rotated { transform: rotate(180deg); }

.tl-highlights {
  list-style: none;
  padding: 0 24px 20px;
  border-top: 1px solid var(--border-color);
  margin-top: 0;
  padding-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.tl-highlights li {
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.7;
  padding-left: 16px;
  position: relative;
}
.tl-highlights li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: var(--sw-primary);
}

/* ──────────────────────────────
   SKILLS
────────────────────────────── */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 20px;
}

.skill-group {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius);
  padding: 24px;
  transition: var(--transition);
}
.skill-group:hover {
  border-color: var(--border-light);
}

.sg-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}
.sg-icon { font-size: 1.2rem; }
.sg-title {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--text-primary);
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.skill-chip {
  padding: 4px 12px;
  border-radius: 20px;
  border: 1px solid;
  font-size: 0.82rem;
  font-weight: 500;
  background: transparent;
}

/* ──────────────────────────────
   PROJECTS
────────────────────────────── */
.project-filters {
  display: flex;
  gap: 8px;
  margin-bottom: 28px;
  flex-wrap: wrap;
}
.filter-btn {
  padding: 6px 16px;
  border-radius: 20px;
  border: 1px solid var(--border-light);
  background: none;
  color: var(--text-secondary);
  font-size: 0.82rem;
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition-fast);
}
.filter-btn:hover {
  color: var(--text-primary);
  border-color: var(--sw-border);
}
.filter-btn.active {
  background: var(--sw-glow);
  color: var(--sw-secondary);
  border-color: var(--sw-border);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 16px;
}

.project-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius);
  padding: 20px;
  transition: var(--transition);
  position: relative;
  overflow: hidden;
}
.project-card:hover {
  border-color: var(--sw-border);
  transform: translateY(-2px);
  box-shadow: var(--shadow-card);
}

.pc-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 10px;
  gap: 8px;
}
.pc-name {
  font-size: 0.95rem;
  font-weight: 700;
  line-height: 1.3;
  padding-right: 16px;
}
.pc-client {
  font-size: 0.78rem;
  color: var(--text-muted);
  margin-top: 3px;
}


.pc-desc {
  font-size: 0.85rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 12px;
}

.pc-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 4px;
}

.pc-highlights {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid var(--border-color);
}
.pc-hl-title {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--text-muted);
  margin-bottom: 10px;
}
.pc-highlights ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
}
.pc-links {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.pc-highlights li {
  font-size: 0.83rem;
  color: var(--text-secondary);
  line-height: 1.6;
  padding-left: 14px;
  position: relative;
}
.pc-highlights li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: var(--sw-primary);
}
.pc-github {
  padding: 6px 14px;
  font-size: 0.8rem;
}

/* ──────────────────────────────
   CERTS
────────────────────────────── */
.certs-row {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 24px;
}

.cert-card {
  display: flex;
  align-items: center;
  gap: 20px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius);
  padding: 24px 28px;
  flex: 1;
  min-width: 260px;
  transition: var(--transition);
  text-decoration: none;
  color: inherit;
}
.cert-card:hover {
  border-color: rgba(0,120,212,0.4);
  box-shadow: 0 0 20px rgba(0,120,212,0.12);
  transform: translateY(-2px);
}
.cert-icon {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.cert-icon img {
  width: 56px;
  height: 56px;
  object-fit: contain;
}
.cert-name {
  font-size: 0.78rem;
  color: var(--text-muted);
  margin-bottom: 4px;
}
.cert-subtitle {
  font-size: 0.95rem;
  font-weight: 700;
  margin-bottom: 8px;
}
.cert-level {
  display: inline-block;
  padding: 2px 10px;
  border-radius: 12px;
  font-size: 0.72rem;
  font-weight: 600;
}
.cert-level.associate {
  background: rgba(0,120,212,0.15);
  color: #60a5fa;
  border: 1px solid rgba(0,120,212,0.3);
}
.cert-level.fundamentals {
  background: rgba(0,120,212,0.08);
  color: #93c5fd;
  border: 1px solid rgba(0,120,212,0.2);
}

/* ── Transitions ── */
.expand-enter-active,
.expand-leave-active {
  transition: max-height 0.35s ease, opacity 0.3s ease;
  overflow: hidden;
  max-height: 1000px;
}
.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
}

@media (max-width: 600px) {
  .skills-grid { grid-template-columns: 1fr; }
  .projects-grid { grid-template-columns: 1fr; }
  .tl-header { flex-direction: column; gap: 8px; }
  .tl-right { flex-direction: row; }
}
</style>
