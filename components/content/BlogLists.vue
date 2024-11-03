<script setup>
useHead({
  title: "Blog",
});

const { data: posts } = await useAsyncData("blog-list", () => {
  return queryContent("blog")
    .where({ _path: { $ne: "/blog" } })
    .only(["_path", "title", "description", "img"])
    .find();
});
</script>

<template>
  <section class="max-w-3xl mx-auto m-10">
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 not-prose">
      <div
        v-for="post in posts"
        :key="post._path"
        class="border shadow-sm rounded-sm dark:border-zinc-600"
      >
        <img :src="post.img" :alt="post.title" class="w-full object-cover" />

        <div
          class="flex flex-col bg-white dark:bg-zinc-700 justify-between space-y-4 p-4"
        >
          <div class="space-y-2">
            <h2>{{ post.title }}</h2>
            <p>
              {{ post.description }}
            </p>
          </div>

          <NuxtLink :to="post._path">
            <button
              class="px-3 w-full py-1 text-sm bg-zinc-800 dark:bg-zinc-600 hover:bg-zinc-700 dark:hover:bg-zinc-500 text-zinc-100 rounded shadow"
            >
              Read more
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.prose h2 {
  @apply text-xl tracking-tighter font-medium text-zinc-800 dark:text-zinc-300;
}

.prose p {
  @apply text-sm font-normal text-gray-500 tracking-tighter dark:text-zinc-200;
}
</style>
