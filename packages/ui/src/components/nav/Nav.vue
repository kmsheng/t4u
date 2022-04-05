<script setup>
import { computed, ref } from 'vue'
import TIconBurger from '@/icons/burger/Burger.vue'

const open = ref(false)
</script>

<template>
  <div>
    <nav class="hidden sm:block sm:flex sm:justify-between">
      <slot />
    </nav>
    <t-icon-burger class="block sm:hidden"
                   tag="button"
                   :active="open"
                   @click="open = (! open)" />
    <teleport to="body">
      <div>ok</div>
    </teleport>
  </div>
</template>
