<script setup>
definePageMeta({
  layout: "default",
});

useHead({
  title: "Portfolio",
});
</script>
<template>
  <div
    class="bg-gray-100 w-full flex items-center justify-center flex-col border-b h-[40rem]"
  >
    <h1 class="text-3xl font-normal text-center dark:text-zinc-800">
      Portfolio Starter Template<br />
      <span class="text-gray-400/90">Powered by Nuxt JS and TailwindCss</span>
    </h1>
    <button
      class="bg-white border border-zinc-200 text-zinc-600 tracking-tight text-sm px-4 py-1.5 rounded mt-4 shadow-sm"
    >
      Get started here
    </button>
  </div>
</template>
