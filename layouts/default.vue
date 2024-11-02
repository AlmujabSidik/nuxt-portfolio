<script setup>
import AppHeader from "../components/AppHeader.vue";

useHead({
  titleTemplate: "%s - Nuxt",
});
</script>

<template>
  <AppHeader />
  <main class="w-full">
    <slot />
  </main>
</template>

<style>
body {
  @apply bg-white text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100;
}
</style>
