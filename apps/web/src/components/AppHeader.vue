<script setup>
import { TNav, TNavLink, TIconGithub } from '@t4u/ui'
</script>

<template>
  <div class="flex justify-between items-center px-3">
    <router-link class="p-3 font-bold" to="/">Tau</router-link>
    <t-nav>
      <t-nav-link href="/components">Components</t-nav-link>
      <t-nav-link href="/utils">Utils</t-nav-link>
      <t-nav-link href="https://github.com" target="_blank">
        <t-icon-github class="w-5 h-5 fill-current" />
      </t-nav-link>
      <template #menu>
        <div>
          <a class="p-3" href="/link1">link1</a>
          <a class="p-3" href="/link2">link2</a>
          <a class="p-3" href="/link3">link3</a>
        </div>
      </template>
    </t-nav>
  </div>
</template>

<style scoped>
</style>
