<script setup>
import { TNav, TNavLink, TNavRouterLink, TIconGithub,
  TNavMenu, TNavMenuLink, TNavMenuRouterLink } from '@t4u/ui'
</script>

<template>
  <div class="flex justify-between items-center px-3">
    <router-link class="p-3 font-bold" to="/">Tau</router-link>
    <t-nav>
      <t-nav-router-link to="/components">Components</t-nav-router-link>
      <t-nav-router-link to="/utils">Utils</t-nav-router-link>
      <t-nav-link href="https://github.com" target="_blank">
        <t-icon-github class="w-5 h-5 fill-current" />
      </t-nav-link>
      <template #menu>
        <t-nav-menu>
          <t-nav-menu-router-link to="/components">Components</t-nav-menu-router-link>
          <t-nav-menu-router-link to="/utils">Utils</t-nav-menu-router-link>
        </t-nav-menu>
      </template>
    </t-nav>
  </div>
</template>

<style scoped>
</style>
