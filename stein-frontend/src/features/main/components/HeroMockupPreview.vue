<script setup lang="ts">
</script>

<template>
  <div
    class="w-full max-w-3xl rounded-xl border border-surface-200 dark:border-surface-800 overflow-hidden shadow-2xl bg-surface-0 dark:bg-surface-900 text-surface-900 dark:text-white">
    <div
      class="flex items-center gap-4 px-4 py-3 bg-surface-100 dark:bg-surface-800 border-b border-surface-200 dark:border-surface-700">
      <div class="flex gap-1.5">
        <span class="w-2.5 h-2.5 rounded-full bg-red-500"></span>
        <span class="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
        <span class="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
      </div>
      <div
        class="flex items-center gap-2 text-xs text-surface-500 dark:text-surface-400 bg-surface-0 dark:bg-surface-900 px-3 py-1 rounded-md mx-auto">
        <i class="pi pi-lock"></i>
        <span>stein.local/home</span>
      </div>
    </div>

    <div class="flex min-h-[220px] text-left">
      <div
        class="hidden sm:flex w-40 border-r border-surface-200 dark:border-surface-800 p-3 flex-col gap-1.5 bg-surface-0 dark:bg-surface-900">
        <div class="flex items-center gap-2 font-bold text-xs mb-2 text-inherit">
          <div
            class="w-5 h-5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center text-[10px]">
            <i class="pi pi-bolt"></i></div>
          <span>Stein</span>
        </div>
        <div
          class="flex items-center gap-2 px-2 py-1 text-xs rounded-md bg-surface-100 dark:bg-surface-800 text-surface-900 dark:text-white font-semibold">
          <i class="pi pi-home"></i> Dashboard</div>
        <div class="flex items-center gap-2 px-2 py-1 text-xs rounded-md text-surface-500 dark:text-surface-400"><i
            class="pi pi-bookmark"></i> Bookmarks</div>
        <div class="flex items-center gap-2 px-2 py-1 text-xs rounded-md text-surface-500 dark:text-surface-400"><i
            class="pi pi-users"></i> Team</div>
        <div class="flex items-center gap-2 px-2 py-1 text-xs rounded-md text-surface-500 dark:text-surface-400"><i
            class="pi pi-comments"></i> Messages</div>
      </div>

      <div class="flex-1 p-4 bg-surface-50 dark:bg-surface-950 flex flex-col gap-3">
        <div class="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white p-3 rounded-lg">
          <h3 class="m-0 text-sm font-bold">Workspace Stein Active</h3>
          <p class="m-0 text-xs opacity-90">Dashboard SPA em execução com navegação em tempo real.</p>
        </div>
        <div class="grid grid-cols-3 gap-2">
          <div
            class="bg-surface-0 dark:bg-surface-900 border border-surface-200 dark:border-surface-800 rounded-md p-2 flex flex-col text-surface-900 dark:text-white">
            <span class="text-[10px] text-surface-500 dark:text-surface-400">Projetos</span>
            <span class="text-base font-bold">12</span>
          </div>
          <div
            class="bg-surface-0 dark:bg-surface-900 border border-surface-200 dark:border-surface-800 rounded-md p-2 flex flex-col text-surface-900 dark:text-white">
            <span class="text-[10px] text-surface-500 dark:text-surface-400">Bookmarks</span>
            <span class="text-base font-bold">8</span>
          </div>
          <div
            class="bg-surface-0 dark:bg-surface-900 border border-surface-200 dark:border-surface-800 rounded-md p-2 flex flex-col text-surface-900 dark:text-white">
            <span class="text-[10px] text-surface-500 dark:text-surface-400">Redes</span>
            <span class="text-base font-bold">3</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
