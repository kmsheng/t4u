<script setup>
import { ref } from 'vue'
import TIconBurger from '@/icons/burger/Burger.vue'

const opened = ref(true)
</script>

<template>
  <div>
    <nav class="flex justify-between">
      <slot />
      <t-icon-burger tag="button" :open="opened" @click="opened = (! opened)" />
    </nav>
  </div>
</template>

<style scoped>
</style>
