<script setup>
import IconBurger from '@/icons/IconBurger.vue'
</script>

<template>
  <div>
    <nav class="flex justify-between">
      <icon-burger />
      <slot />
    </nav>
  </div>
</template>

<style scoped>
</style>
