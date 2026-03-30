<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <div class="container nav-inner">
      <!-- Logo -->
      <a class="nav-logo" href="#home" @click.prevent="emit('navigate', 'home')">
        <span class="mono gradient-sw">Jacob</span>
        <span class="nav-logo-dot">.</span>
      </a>

      <!-- Desktop Links -->
      <ul class="nav-links">
        <li v-for="item in navItems" :key="item.id">
          <a
            class="nav-link"
            :class="{ active: activeSection === item.id, 'sw-active': item.theme === 'sw' && activeSection === item.id, 'bio-active': item.theme === 'bio' && activeSection === item.id }"
            :href="`#${item.id}`"
            @click.prevent="emit('navigate', item.id)"
          >
            <span class="nav-dot" :class="item.theme === 'bio' ? 'dot-bio' : 'dot-sw'"></span>
            {{ item.label }}
          </a>
        </li>
      </ul>

      <!-- CTA -->
      <a class="btn btn-primary nav-cta" href="#contact" @click.prevent="emit('navigate', 'contact')">
        聯絡我
      </a>

      <!-- Mobile toggle -->
      <button class="mobile-toggle" @click="mobileOpen = !mobileOpen" :aria-label="mobileOpen ? '關閉選單' : '開啟選單'">
        <span :class="{ open: mobileOpen }"></span>
        <span :class="{ open: mobileOpen }"></span>
        <span :class="{ open: mobileOpen }"></span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div class="mobile-menu" :class="{ open: mobileOpen }">
      <a
        v-for="item in navItems"
        :key="item.id"
        class="mobile-link"
        :href="`#${item.id}`"
        @click.prevent="navigate(item.id)"
      >
        {{ item.label }}
      </a>
      <a class="mobile-link mobile-cta" href="#contact" @click.prevent="navigate('contact')">聯絡我</a>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  activeSection: { type: String, default: 'home' }
})
const emit = defineEmits(['navigate'])

const isScrolled = ref(false)
const mobileOpen = ref(false)

const navItems = [
  { id: 'home', label: '首頁', theme: 'sw' },
  { id: 'software', label: '軟體工程師', theme: 'sw' },
  { id: 'biochemistry', label: '生物化學背景', theme: 'bio' },
  { id: 'contact', label: '合作洽詢', theme: 'sw' }
]

function handleScroll() {
  isScrolled.value = window.scrollY > 40
}

function navigate(id) {
  mobileOpen.value = false
  emit('navigate', id)
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 16px 0;
  transition: all 0.3s ease;
  background: rgba(245, 247, 250, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border-color);
}

.navbar.scrolled {
  background: rgba(245, 247, 250, 0.92);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border-color);
  padding: 10px 0;
}

.nav-inner {
  display: flex;
  align-items: center;
  gap: 32px;
}

.nav-logo {
  font-size: 1.3rem;
  font-weight: 800;
  letter-spacing: -0.5px;
  display: flex;
  align-items: center;
}
.nav-logo-dot {
  color: var(--sw-primary);
  font-size: 1.6rem;
  line-height: 1;
  margin-left: 1px;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 4px;
  margin-left: auto;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border-radius: var(--radius-sm);
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-secondary);
  transition: var(--transition-fast);
}

.nav-link:hover {
  color: var(--text-primary);
  background: rgba(37, 99, 235, 0.06);
}

.nav-link.active { color: var(--text-primary); }
.nav-link.sw-active { color: var(--sw-secondary); }
.nav-link.bio-active { color: var(--bio-secondary); }

.nav-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  opacity: 0;
  transition: var(--transition-fast);
}
.nav-link.active .nav-dot { opacity: 1; }
.dot-sw { background: var(--sw-primary); }
.dot-bio { background: var(--bio-primary); }

.nav-cta {
  padding: 8px 18px;
  font-size: 0.85rem;
  border-radius: var(--radius-sm);
  white-space: nowrap;
}

/* ── Mobile Toggle ── */
.mobile-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  margin-left: auto;
}
.mobile-toggle span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--text-primary);
  border-radius: 2px;
  transition: var(--transition);
}
.mobile-toggle span:nth-child(1).open {
  transform: translateY(7px) rotate(45deg);
}
.mobile-toggle span:nth-child(2).open {
  opacity: 0;
}
.mobile-toggle span:nth-child(3).open {
  transform: translateY(-7px) rotate(-45deg);
}

/* ── Mobile Menu ── */
.mobile-menu {
  display: none;
  flex-direction: column;
  padding: 12px 16px 16px;
  border-top: 1px solid var(--border-color);
  background: rgba(245, 247, 250, 0.98);
}
.mobile-menu.open { display: flex; }

.mobile-link {
  padding: 12px 16px;
  font-size: 0.95rem;
  color: var(--text-secondary);
  border-radius: var(--radius-sm);
  transition: var(--transition-fast);
}
.mobile-link:hover {
  color: var(--text-primary);
  background: rgba(37, 99, 235, 0.06);
}
.mobile-cta {
  margin-top: 8px;
  text-align: center;
  background: var(--sw-primary);
  color: #fff;
  font-weight: 600;
}
.mobile-cta:hover {
  background: var(--sw-secondary);
}

@media (max-width: 768px) {
  .nav-links,
  .nav-cta { display: none; }
  .mobile-toggle { display: flex; }
}
</style>
