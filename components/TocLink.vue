<script setup>
const route = useRoute();

defineProps({
  links: {
    type: Array,
    required: true,
  },
  level: {
    type: Number,
    default: 0,
  },
  activeId: {
    type: String,
    default: null,
  },
});
</script>
<template>
  <ul>
    <li class="pb-1" v-for="link in links" :key="link">
      <NuxtLink
        :to="{ path: route.path, hash: '#' + link.id }"
        :class="{
          'pl-4': level > 0,
          'text-green-600 dark:text-green-400': activeId === link.id,
        }"
      >
        <span class="ml-2">{{ link.text }}</span>
      </NuxtLink>
      <TocLink
        v-if="link.children"
        :links="link.children"
        :level="level + 1"
        :active-id="activeId"
      />
    </li>
  </ul>
</template>
