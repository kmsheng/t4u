<script setup>
import { computed, ref } from 'vue'
import TIconBurger from '@/icons/burger/Burger.vue'

const opened = ref(false)
const navClass = computed(() => opened.value ? 'fixed block top-12 left-0 right-0 dark:bg-haiti' : 'hidden')
</script>

<template>
  <div>
    <nav class="sm:static sm:flex sm:justify-between" :class="navClass">
      <slot />
    </nav>
    <t-icon-burger class="block sm:hidden"
                   tag="button"
                   :opened="opened"
                   @click="opened = (! opened)" />
  </div>
</template>

<style scoped>
</style>
