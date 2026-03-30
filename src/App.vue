<template>
  <div class="app">
    <NavBar :active-section="activeSection" @navigate="scrollToSection" />
    <HeroSection />
    <SoftwareSection />
    <BiochemSection />
    <ContactSection />

    <!-- Back to top -->
    <transition name="fade">
      <button v-if="showTop" class="back-to-top" @click="scrollToSection('home')" aria-label="回到頂部">
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7"/>
        </svg>
      </button>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import SoftwareSection from './components/SoftwareSection.vue'
import BiochemSection from './components/BiochemSection.vue'
import ContactSection from './components/ContactSection.vue'

const activeSection = ref('home')
const showTop = ref(false)

const sectionIds = ['home', 'software', 'biochemistry', 'contact']

function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) {
    const offset = 72
    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

function updateActiveSection() {
  const scrollY = window.scrollY
  showTop.value = scrollY > 500

  for (let i = sectionIds.length - 1; i >= 0; i--) {
    const el = document.getElementById(sectionIds[i])
    if (el) {
      const top = el.getBoundingClientRect().top + scrollY
      if (scrollY >= top - 200) {
        activeSection.value = sectionIds[i]
        break
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', updateActiveSection, { passive: true })
  updateActiveSection()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveSection)
})
</script>

<style>
.app {
  min-height: 100vh;
}

.back-to-top {
  position: fixed;
  bottom: 28px;
  right: 28px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--bg-card);
  border: 1px solid var(--border-light);
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--transition);
  z-index: 50;
  box-shadow: var(--shadow-card);
}
.back-to-top:hover {
  background: var(--sw-primary);
  border-color: var(--sw-primary);
  color: #fff;
  transform: translateY(-3px);
}

.fade-enter-active,
.fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from,
.fade-leave-to { opacity: 0; }
</style>
