<script setup>
import ColorModeSelector from "./ColorModeSelector.vue";

const route = useRoute();
const navigation = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Project",
    href: "/project",
  },
];
</script>
<template>
  <div class="w-full border-b">
    <nav class="max-w-3xl mx-auto py-4 flex justify-between items-center">
      <NuxtLink to="/">
        <h1
          class="font-medium text-xl tracking-tighter text-zinc-950 dark:text-white"
        >
          Nuxt Portfolio
        </h1>
      </NuxtLink>

      <ul class="flex items-center justify-end gap-4">
        <li
          v-for="(nav, idx) in navigation"
          :key="idx"
          :class="[
            'text-xs leading-5 tracking-tight font-normal',
            route.path === nav.href
              ? 'text-zinc-400 dark:text-zinc-500'
              : 'text-zinc-800 dark:text-zinc-100',
          ]"
        >
          <NuxtLink :to="nav.href">{{ nav.name }}</NuxtLink>
        </li>
      </ul>

      <ClientOnly>
        <ColorModeSelector />
      </ClientOnly>
    </nav>
  </div>
</template>
