<script setup>
definePageMeta({
  layout: "default",
});

useHead({
  title: "Projects",
});
</script>
<template>
  <article
    class="max-w-6xl m-10 mx-auto prose dark:prose-invert dark:prose-pre:bg-zinc-800 prose-pre:text-zinc-800 prose-pre:bg-zinc-100 dark:prose-pre:text-white"
  >
    <ContentDoc />
  </article>
</template>
