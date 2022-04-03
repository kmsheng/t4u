<script setup>
import { computed } from 'vue'

const props = defineProps({
  tag: {
    type: String,
    default: 'span'
  },
  opened: Boolean
})

const classname = computed(() => props.opened ? 'icon-burger--cross': '')
</script>

<template>
  <component class="icon-burger" :class="classname" :is="tag">
    <span class="icon-burger__line" />
  </component>
</template>
