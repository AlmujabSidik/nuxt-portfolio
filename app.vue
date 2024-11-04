<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s ease-in-out;
}

.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s ease-in-out;
}

.layout-enter-from,
.layout-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
.page-enter-active,
.page-leave-active,
.layout-enter-active,
.layout-leave-active {
  backface-visibility: hidden;
  transform-style: preserve-3d;
  will-change: transform, opacity;
}

@media (max-width: 768px) {
  .page-enter-active,
  .page-leave-active {
    transition-duration: 0.3s;
  }

  .page-enter-from,
  .page-leave-to {
    transform: translateY(10px);
  }
}
</style>
