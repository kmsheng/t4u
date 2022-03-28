<script setup>
</script>

<template>
  <nav class="px-3 py-2 text-black dark:text-white flex place-content-between">
    <div class="">
      <slot name="logo" />
    </div>
    <div class="space-x-4">
      <slot />
    </div>
  </nav>
</template>

<style scoped>
</style>
