<script setup>
import ProjectList from "~/components/ProjectList.vue";

definePageMeta({
  layout: "default",
});

useHead({
  title: "Project",
});
</script>
<template>
  <div class="max-w-3xl mx-auto m-10">
    <ProjectList />
  </div>
</template>
