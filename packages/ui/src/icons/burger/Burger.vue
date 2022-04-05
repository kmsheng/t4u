<script setup>
import { computed, defineProps } from 'vue'

const props = defineProps({
  tag: {
    type: String,
    default: 'span'
  },
  active: Boolean
})

const classname = computed(() => props.active ? 'icon-burger--active': '')
</script>

<template>
  <component :is="tag" class="icon-burger" :class="classname">
    <span class="icon-burger__line" />
  </component>
</template>
