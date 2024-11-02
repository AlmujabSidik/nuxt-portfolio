<script setup>
import AppHeader from "../components/AppHeader.vue";

useHead({
  titleTemplate: "%s - Nuxt",
});
</script>
<template>
  <div class="min-h-screen">
    <AppHeader />
    <div class="max-w-3xl m-10 mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-blog gap-4">
        <!-- Main content area -->
        <main class="min-h-screen">
          <slot name="default" />
        </main>
        <!-- Sidebar -->
        <aside class="bg-gray-100 dark:bg-zinc-700 p-4 rounded-lg">
          sidebar
        </aside>
      </div>
    </div>
  </div>
</template>

<style>
body {
  @apply bg-white text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100;
}
</style>
