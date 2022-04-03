<script setup>
import { computed } from 'vue'

const props = defineProps({
  tag: {
    type: String,
    default: 'span'
  },
  open: {
    type: Boolean,
    default: true
  }
})

const classname = computed(() => props.open ? '' : 'icon-burger--cross')
</script>

<template>
  <component class="icon-burger" :class="classname" :is="tag">
    <span class="icon-burger__line" />
  </component>
</template>
