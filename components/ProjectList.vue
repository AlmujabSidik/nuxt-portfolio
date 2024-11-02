<script setup>
const { error, pending, data } = await useFetch(
  "https://api.github.com/users/lunadiotic/repos",
  {
    lazy: true,
  }
);

const repos = computed(() => {
  return data.value
    .filter((repo) => repo.description)
    .sort((a, b) => b.stargazers_count - a.stargazers_count);
});
</script>
<template>
  <p class="mb-10">This is a list of my projects</p>
  <p v-if="pending">Loading...</p>
  <p v-else-if="error">Something went wrong</p>
  <ul v-else class="grid grid-cols-1 gap-4">
    <li
      v-for="repo in repos"
      :key="repo.id"
      class="bg-white shadow-sm rounded p-4 border-gray-100 border hover:bg-gray-100"
    >
      <NuxtLink :href="repo.html_url" target="_blank">
        <div class="flex items-center justify-between">
          <p class="text-sm font-medium text-gray-800">{{ repo.name }}</p>
          <p class="text-sm text-gray-500 font-normal">
            {{ repo.stargazers_count }} ⭐️
          </p>
        </div>
        <p class="text-sm font-normal text-gray-500">{{ repo.description }}</p>
      </NuxtLink>
    </li>
  </ul>
</template>
