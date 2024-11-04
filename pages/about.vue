<script setup>
definePageMeta({
  layout: "default",
});

useHead({
  title: "About",
});
</script>
<template>
  <div class="max-w-none w-full mt-10 prose dark:prose-invert">
    <ContentDoc path="/about" />
  </div>
</template>
