<script setup>
useHead({
  title: "Project",
});

const { data } = await useAsyncData("project-list", () => {
  return queryContent("project")
    .where({ _path: { $ne: "/project" } })
    .only(["_path", "title", "description", "stars", "publishedAt"])
    .sort({ publishedAt: -1 })
    .find();
});

const projects = computed(() => {
  if (!data.value) return [];

  const result = [];
  let lastYear = null;

  for (const project of data.value) {
    const year = new Date(project.publishedAt).getFullYear();
    project.year = year;
    project.isSameYear = year === lastYear;
    result.push(project);
    lastYear = year;
  }

  return result;
});
</script>
<template>
  <section class="max-w-3xl mx-auto m-10 not-prose">
    <div class="flex items-center space-x-4 p-4">
      <div>date</div>
      <div>Projects</div>
    </div>
    <div v-for="project in projects" :key="project._path">
      <NuxtLink :to="project._path">
        <div
          class="flex items-center space-x-4 mt-2 bg-zinc-200 dark:bg-zinc-800 p-4 rounded-sm"
        >
          <h1
            :class="{
              'text-base text-zinc-200 dark:text-zinc-800': project.isSameYear,
              'text-base text-zinc-800 dark:text-zinc-300': !project.isSameYear,
            }"
          >
            {{ project.year }}
          </h1>
          <div class="flex items-center justify-between w-full">
            <h1 class="text-base tracking-tight font-normal">
              {{ project.title }}
            </h1>
            <p class="text-sm text-zinc-500">{{ project.stars }} ⭐️</p>
          </div>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>
