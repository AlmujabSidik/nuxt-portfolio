<script setup>
const colorMode = useColorMode();
const modes = ["dark", "light", "system"];
const nextModeIcons = {
  system: "⚙",
  dark: "🌙",
  light: "☀️",
};

const showNextMode = ref(false);
const nextMode = computed(() => {
  const currentModeIndex = modes.indexOf(colorMode.preference);
  let nextModeIndex = null;
  if (currentModeIndex + 1 === modes.length) {
    nextModeIndex = 0;
  } else {
    nextModeIndex = currentModeIndex + 1;
  }
  return modes[nextModeIndex];
});

const nextModeIcon = computed(() => nextModeIcons[nextMode.value]);

function toggleMode() {
  colorMode.preference = nextMode.value;
}
</script>
<template>
  <div
    @click="toggleMode"
    class="text-gray-600 dark:text-gray-300 px-2 py-1 cursor-pointer"
    @mouseenter="() => (showNextMode = true)"
    @mouseleave="() => (showNextMode = false)"
  >
    <span v-if="showNextMode" class="text-xs ml-2">change {{ nextMode }}</span>
    {{ nextModeIcon }}
  </div>
</template>
