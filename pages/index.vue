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
    class="bg-zinc-100 dark:bg-zinc-800 absolute w-full left-0 right-0 flex items-center justify-center flex-col border-b h-[40rem]"
  >
    <h1 class="text-3xl font-normal text-center dark:text-zinc-500">
      Portfolio Starter Template<br />
      <span class="text-zinc-400/90 dark:text-zinc-300"
        >Powered by Nuxt JS and TailwindCss</span
      >
    </h1>
    <button
      class="bg-white border border-zinc-200 text-zinc-600 tracking-tight text-sm px-4 py-1.5 rounded mt-4 shadow-sm"
    >
      Get started here
    </button>
  </div>
</template>
