<script setup lang="ts">
import LandingNavbar from './LandingNavbar.vue'
import HeroBanner from './HeroBanner.vue'
import LandingFeatures from './LandingFeatures.vue'
import LandingFooter from './LandingFooter.vue'
</script>

<template>
  <div class="min-h-screen bg-surface-0 dark:bg-surface-950 text-surface-900 dark:text-surface-0 flex flex-col transition-colors">
    <LandingNavbar />
    <HeroBanner />
    <LandingFeatures />
    <LandingFooter />
  </div>
</template>
