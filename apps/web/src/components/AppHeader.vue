<script setup>
import { TNav, TNavLink } from '@t4u/ui'
</script>

<template>
  <div class="flex justify-between items-center px-3">
    <a class="p-3 font-bold">Tau</a>
    <t-nav>
      <t-nav-link href="/link1">link1</t-nav-link>
      <t-nav-link href="/link2">link2</t-nav-link>
      <t-nav-link href="/link3">link3</t-nav-link>
    </t-nav>
  </div>
</template>

<style scoped>
</style>
