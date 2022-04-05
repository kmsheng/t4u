<script setup>
import { TNav, TNavLink, TIconGithub } from '@t4u/ui'
</script>

<template>
  <div class="flex justify-between items-center px-3">
    <router-link class="p-3 font-bold" to="/">Tau</router-link>
    <t-nav>
      <router-link to="/components" custom v-slot="{ navigate, href, route }">
        <t-nav-link :href="href" @click="navigate">Components</t-nav-link>
      </router-link>
      <router-link to="/utils" custom v-slot="{ navigate, href, route }">
        <t-nav-link :href="href" @click="navigate">Utils</t-nav-link>
      </router-link>
      <t-nav-link href="https://github.com" target="_blank">
        <t-icon-github class="w-5 h-5 fill-current" />
      </t-nav-link>
      <template #menu>
        <div>
          <router-link to="/components" custom v-slot="{ navigate, href, route }">
            <a class="p-3" :href="href" @click="navigate">link1</a>
          </router-link>
          <a class="p-3" href="/link2">link2</a>
          <a class="p-3" href="/link3">link3</a>
        </div>
      </template>
    </t-nav>
  </div>
</template>

<style scoped>
</style>
