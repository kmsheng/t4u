<script setup>
import { computed, ref } from 'vue'
import { px } from '@t4u/utils'
import TIconBurger from '@/icons/burger/Burger.vue'

const root = ref(null)
const open = ref(false)
const menuStyle = computed(() => ({ top: px(root.value) }))
</script>

<template>
  <div ref="root">
    <nav class="hidden sm:block sm:flex sm:justify-between">
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
