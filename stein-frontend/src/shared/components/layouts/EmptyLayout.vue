<script setup lang="ts">
import { useTheme } from '@/shared/composables/useTheme'

const { isDark, toggleDark } = useTheme()
</script>

<template>
  <div class="layout-wrapper">
    <header class="header">
      <div class="header-brand">
        <span class="logo">Stein</span>
        <nav class="nav">
          <RouterLink to="/" class="nav-link">Home</RouterLink>
          <RouterLink to="/hello-world" class="nav-link">Hello World</RouterLink>
        </nav>
      </div>
      <div>
        <Button
          :icon="isDark ? 'pi pi-sun' : 'pi pi-moon'"
          severity="secondary"
          text
          rounded
          aria-label="Alternar tema"
          @click="toggleDark()"
        />
      </div>
    </header>

    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.layout-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  border-bottom: 1px solid var(--p-content-border-color, #e2e8f0);
  background-color: var(--p-surface-0, #ffffff);
  transition: background-color 0.2s ease, border-color 0.2s ease;
}

html.p-dark .header {
  background-color: var(--p-surface-900, #18181b);
  border-bottom-color: var(--p-surface-800, #27272a);
}

.header-brand {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.logo {
  font-weight: 700;
  font-size: 1.25rem;
  letter-spacing: -0.025em;
}

.nav {
  display: flex;
  gap: 1rem;
}

.nav-link {
  text-decoration: none;
  color: var(--p-text-muted-color, #64748b);
  font-weight: 500;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  transition: color 0.2s ease, background-color 0.2s ease;
}

.nav-link:hover {
  color: var(--p-primary-color, #10b981);
}

.nav-link.router-link-active {
  color: var(--p-primary-color, #10b981);
  background-color: var(--p-primary-50, rgba(16, 185, 129, 0.1));
}

.main-content {
  flex: 1;
  padding: 2rem;
}
</style>