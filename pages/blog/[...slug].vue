<template>
  <article
    class="max-w-none my-10 prose dark:prose-invert dark:prose-pre:bg-zinc-800 prose-pre:text-zinc-800 prose-pre:bg-zinc-100 dark:prose-pre:text-white relative"
  >
    <ContentDoc>
      <template #not-found>
        <h1>404</h1>
      </template>
      <template #default="{ doc }">
        <div class="grid grid-cols-6 gap-8">
          <div :class="{ 'col-span-4': doc.toc, 'col-span-12': !doc.toc }">
            <ContentRenderer :value="doc" />
          </div>
          <div v-if="doc.toc" class="col-span-2 not-prose">
            <aside
              class="bg-gray-100 dark:bg-zinc-700 p-4 rounded-lg sticky top-10"
            >
              <div class="font-bold text-lg mb-4">Table of Contents</div>
              <nav class="text-sm">
                <TocLink :links="doc.body.toc?.links" :activeId="activeId" />
              </nav>
            </aside>
          </div>
        </div>
      </template>
    </ContentDoc>
  </article>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import TocLink from "~/components/TocLink.vue";
const activeId = ref(null);

definePageMeta({
  layout: "default",
});

useHead({
  title: "Blog",
});

onMounted(() => {
  const callback = (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        activeId.value = entry.target.id;
        break;
      }
    }
  };

  const observer = new IntersectionObserver(callback, {
    root: null,
    threshold: 0.5,
  });

  const elements = document.querySelectorAll("h2, h3");

  elements.forEach((el) => {
    observer.observe(el);
  });

  onUnmounted(() => {
    elements.forEach((el) => {
      observer.unobserve(el);
    });
  });
});
</script>
