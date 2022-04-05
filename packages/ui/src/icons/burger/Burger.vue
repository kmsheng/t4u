<script setup>
import { computed } from 'vue'

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
  <component class="icon-burger" :class="classname" :is="tag">
    <span class="icon-burger__line" />
  </component>
</template>
