<script setup>
import { computed, ref } from 'vue'
import TIconBurger from '@/icons/burger/Burger.vue'

const navRef = ref(null)
const open = ref(false)
const menuStyle = computed(() => {
  return {
  }
})
</script>

<template>
  <div>
    <nav ref="navRef" class="hidden sm:block sm:flex sm:justify-between">
      <slot />
    </nav>
    <t-icon-burger class="block sm:hidden"
                   tag="button"
                   :active="open"
                   @click="open = (! open)" />
    <teleport to="body">
      <div v-if="open" class="fixed left-0 right-0" :style="menuStyle">
        <slot name="menu" />
      </div>
    </teleport>
  </div>
</template>
