<script setup lang="ts">
import HeroMockupPreview from './HeroMockupPreview.vue'
</script>

<template>
  <section class="py-16 px-6 flex justify-center">
    <div class="max-w-4xl w-full flex flex-col items-center text-center">
      <!-- Hero Tag Badge -->
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold mb-6">
        <i class="pi pi-sparkles"></i>
        <span>Plataforma de Gestão & Conhecimento Stein</span>
      </div>

      <!-- Headline & Subtitle -->
      <h1 class="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight mb-5 max-w-3xl text-surface-900 dark:text-white">
        Conecte ideias, pessoas e aprendizados no <span class="bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">Stein</span>.
      </h1>

      <p class="text-base md:text-lg leading-relaxed text-surface-600 dark:text-surface-300 max-w-2xl mb-9">
        Um ambiente unificado e de alta performance no modelo SPA para acompanhar seu progresso de estudos, gerenciar notas, organizar redes de desenvolvedores e impulsionar a colaboração.
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 mb-14 w-full sm:w-auto">
        <RouterLink to="/home" class="inline-flex items-center justify-center gap-3 px-7 py-3 rounded-full bg-emerald-500 text-white font-semibold text-base shadow-lg shadow-emerald-500/30 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-emerald-500/40 transition-all no-underline">
          <span>Iniciar no App</span>
          <i class="pi pi-arrow-right"></i>
        </RouterLink>

        <a href="#features" class="inline-flex items-center justify-center gap-3 px-7 py-3 rounded-full bg-surface-100 dark:bg-surface-800 text-surface-900 dark:text-white font-semibold text-base hover:bg-surface-200 dark:hover:bg-surface-700 transition-all no-underline">
          <i class="pi pi-compass"></i>
          <span>Explorar Recursos</span>
        </a>
      </div>

      <!-- Mockup Component -->
      <HeroMockupPreview />
    </div>
  </section>
</template>
