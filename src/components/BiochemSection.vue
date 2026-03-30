<template>
  <section id="biochemistry" class="section bio-section">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header fade-b-el">
        <div class="section-label" style="color: var(--bio-secondary)">
          <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>
          學術研究背景
        </div>
        <h2 class="section-title">
          生物化學<span class="gradient-bio"> 背景</span>
        </h2>
        <p class="section-desc">
          {{ profile.biochemistry.description }}
        </p>
      </div>

      <div class="bio-layout">
        <!-- Left Column: Education + Experience timeline -->
        <div class="bio-left">

          <!-- ── Education ── -->
          <div class="bio-block fade-b-el">
            <div class="bio-block-title">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14z"/></svg>
              教育背景
            </div>
            <div class="edu-list">
              <div v-for="edu in profile.biochemistry.education" :key="edu.degree" class="edu-item">
                <div class="edu-degree gradient-bio">{{ edu.degree }}</div>
                <div class="edu-field">{{ edu.field }}</div>
                <div class="edu-inst">{{ edu.institution }}</div>
                <div class="edu-row">
                  <span class="edu-period">{{ edu.period }}</span>
                  <span class="edu-note">{{ edu.note }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- ── Work Experience ── -->
          <div class="bio-block fade-b-el">
            <div class="bio-block-title">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2"/></svg>
              研究工作經歷
            </div>
            <div class="bio-timeline">
              <div
                v-for="(exp, idx) in profile.biochemistry.experience"
                :key="idx"
                class="bio-tl-item"
              >
                <div class="bio-tl-dot"></div>
                <div v-if="idx < profile.biochemistry.experience.length - 1" class="bio-tl-line"></div>
                <div class="bio-tl-content">
                  <div class="bio-tl-header" @click="toggleExp(idx)">
                    <div>
                      <div class="bio-tl-role">{{ exp.role }}</div>
                      <div class="bio-tl-inst">{{ exp.institution }}</div>
                    </div>
                    <div class="bio-tl-right">
                      <span class="bio-tl-period">{{ exp.period }}</span>
                      <svg
                        class="bio-arrow"
                        :class="{ rotated: openExps.includes(idx) }"
                        width="14" height="14" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2.5"
                      >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
                      </svg>
                    </div>
                  </div>
                  <transition name="expand">
                    <ul v-if="openExps.includes(idx)" class="bio-items">
                      <li v-for="item in exp.items" :key="item">{{ item }}</li>
                    </ul>
                  </transition>
                </div>
              </div>
            </div>
          </div>

          <!-- ── Awards ── -->
          <div class="bio-block fade-b-el">
            <div class="bio-block-title">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>
              獎項 & 執照
            </div>
            <div class="awards-list">
              <div v-for="award in profile.biochemistry.awards" :key="award" class="award-item">
                <span class="award-dot"></span>
                <span>{{ award }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column: Publications + Lab Skills -->
        <div class="bio-right">

          <!-- ── Publications ── -->
          <div class="bio-block fade-b-el">
            <div class="bio-block-title">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
              學術論文發表
            </div>
            <div class="pub-list">
              <div
                v-for="(pub, idx) in profile.biochemistry.publications"
                :key="idx"
                class="pub-item"
              >
                <span class="pub-badge" :class="pub.type === 'First Author' ? 'first' : 'co'">
                  {{ pub.type }}
                </span>
                <p class="pub-title">{{ pub.title }}</p>
                <p class="pub-journal">
                  <em>{{ pub.journal }}</em>&nbsp;{{ pub.citation }}
                </p>
              </div>
            </div>
          </div>

          <!-- ── Lab Skills ── -->
          <div class="bio-block fade-b-el">
            <div class="bio-block-title">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
              實驗室技術技能
            </div>
            <div class="lab-skills">
              <div
                v-for="group in profile.biochemistry.labSkills"
                :key="group.category"
                class="lab-group"
              >
                <div class="lab-category">{{ group.category }}</div>
                <div class="lab-tags">
                  <span v-for="skill in group.skills" :key="skill" class="lab-tag">{{ skill }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- ── Conferences ── -->
          <div class="bio-block fade-b-el">
            <div class="bio-block-title">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
              國際學術研討會
            </div>
            <div class="conf-list">
              <div v-for="conf in profile.biochemistry.conferences" :key="conf" class="conf-item">
                <span class="conf-dot"></span>
                <span>{{ conf }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { profile } from '../data/profile.js'

const openExps = ref([])
let observer = null

function toggleExp(idx) {
  const i = openExps.value.indexOf(idx)
  if (i === -1) openExps.value.push(idx)
  else openExps.value.splice(i, 1)
}

onMounted(() => {
  setTimeout(() => {
    const els = document.querySelectorAll('.fade-b-el')
    observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.08 }
    )
    els.forEach(el => observer.observe(el))
  }, 200)
})

onUnmounted(() => observer?.disconnect())
</script>

<style scoped>
/* ── Section BG ── */
.bio-section {
  position: relative;
  background: linear-gradient(180deg, transparent, rgba(5,150,105,0.03) 50%, transparent);
}
.bio-section::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--bio-border), transparent);
}

.section-header { margin-bottom: 48px; }

/* ── Fade ── */
.fade-b-el {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.fade-b-el.visible {
  opacity: 1;
  transform: none;
}

/* ── Layout ── */
.bio-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  align-items: start;
}

.bio-block {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius);
  padding: 24px;
  margin-bottom: 20px;
  transition: var(--transition);
}
.bio-block:hover {
  border-color: var(--bio-border);
}

.bio-block-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.82rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: var(--bio-secondary);
  margin-bottom: 20px;
}
.bio-block-title svg { flex-shrink: 0; }

/* ── Education ── */
.edu-list { display: flex; flex-direction: column; gap: 20px; }
.edu-item {
  padding-bottom: 20px;
  border-bottom: 1px solid var(--border-color);
}
.edu-item:last-child { border-bottom: none; padding-bottom: 0; }

.edu-degree {
  font-size: 1rem;
  font-weight: 800;
  margin-bottom: 4px;
}
.edu-field {
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 3px;
}
.edu-inst {
  font-size: 0.83rem;
  color: var(--text-secondary);
  margin-bottom: 8px;
}
.edu-row {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}
.edu-period {
  font-size: 0.78rem;
  font-family: 'JetBrains Mono', monospace;
  color: var(--text-muted);
}
.edu-note {
  font-size: 0.75rem;
  padding: 2px 8px;
  background: var(--bio-glow);
  color: var(--bio-secondary);
  border: 1px solid var(--bio-border);
  border-radius: 12px;
}

/* ── Timeline ── */
.bio-timeline { display: flex; flex-direction: column; }
.bio-tl-item {
  display: grid;
  grid-template-columns: 18px 1fr;
  gap: 12px;
  position: relative;
}

.bio-tl-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--bio-primary);
  margin-top: 14px;
  flex-shrink: 0;
  box-shadow: 0 0 8px rgba(16,185,129,0.5);
}
.bio-tl-line {
  position: absolute;
  left: 4px;
  top: 24px;
  bottom: 0;
  width: 2px;
  background: var(--border-color);
}

.bio-tl-content {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  margin-bottom: 12px;
  overflow: hidden;
  transition: var(--transition);
}
.bio-tl-content:hover { border-color: var(--bio-border); }

.bio-tl-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 14px 16px;
  cursor: pointer;
  gap: 8px;
}
.bio-tl-role {
  font-size: 0.88rem;
  font-weight: 700;
  margin-bottom: 3px;
}
.bio-tl-inst {
  font-size: 0.78rem;
  color: var(--text-muted);
}
.bio-tl-right {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}
.bio-tl-period {
  font-size: 0.75rem;
  font-family: 'JetBrains Mono', monospace;
  color: var(--text-muted);
  white-space: nowrap;
}
.bio-arrow {
  color: var(--text-muted);
  transition: transform 0.3s ease;
}
.bio-arrow.rotated { transform: rotate(180deg); }

.bio-items {
  list-style: none;
  padding: 0 16px 14px;
  border-top: 1px solid var(--border-color);
  padding-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 7px;
}
.bio-items li {
  font-size: 0.82rem;
  color: var(--text-secondary);
  line-height: 1.6;
  padding-left: 14px;
  position: relative;
}
.bio-items li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: var(--bio-primary);
}

/* ── Awards ── */
.awards-list { display: flex; flex-direction: column; gap: 10px; }
.award-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 0.83rem;
  color: var(--text-secondary);
  line-height: 1.6;
}
.award-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--bio-primary);
  flex-shrink: 0;
  margin-top: 6px;
}

/* ── Publications ── */
.pub-list { display: flex; flex-direction: column; gap: 18px; }
.pub-item {
  padding-bottom: 18px;
  border-bottom: 1px solid var(--border-color);
}
.pub-item:last-child { border-bottom: none; padding-bottom: 0; }

.pub-badge {
  display: inline-block;
  padding: 2px 10px;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 600;
  margin-bottom: 8px;
}
.pub-badge.first {
  background: rgba(16,185,129,0.15);
  color: var(--bio-secondary);
  border: 1px solid var(--bio-border);
}
.pub-badge.co {
  background: var(--bg-primary);
  color: var(--text-muted);
  border: 1px solid var(--border-light);
}

.pub-title {
  font-size: 0.83rem;
  color: var(--text-primary);
  line-height: 1.6;
  margin-bottom: 6px;
}
.pub-journal {
  font-size: 0.78rem;
  color: var(--text-muted);
}

/* ── Lab Skills ── */
.lab-skills { display: flex; flex-direction: column; gap: 16px; }
.lab-group { }
.lab-category {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--bio-secondary);
  margin-bottom: 8px;
  letter-spacing: 0.5px;
}
.lab-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.lab-tag {
  display: inline-block;
  padding: 3px 10px;
  border-radius: 4px;
  font-size: 0.73rem;
  background: var(--bio-glow);
  color: var(--bio-secondary);
  border: 1px solid var(--bio-border);
}

/* ── Conferences ── */
.conf-list { display: flex; flex-direction: column; gap: 10px; }
.conf-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 0.82rem;
  color: var(--text-secondary);
  line-height: 1.6;
}
.conf-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--bio-secondary);
  flex-shrink: 0;
  margin-top: 6px;
  opacity: 0.7;
}

/* ── Expand Transition ── */
.expand-enter-active,
.expand-leave-active {
  transition: max-height 0.3s ease, opacity 0.25s ease;
  overflow: hidden;
  max-height: 600px;
}
.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
}

/* ── Responsive ── */
@media (max-width: 900px) {
  .bio-layout {
    grid-template-columns: 1fr;
  }
}
</style>
