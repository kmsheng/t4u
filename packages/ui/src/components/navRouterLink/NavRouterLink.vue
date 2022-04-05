<script setup>
import TNavLink from '@/components/navLink/NavLink.vue'
</script>

<template>
  <router-link custom v-slot="{ navigate, href, route }">
    <t-nav-link :href="href" @click="navigate">
      <slot />
    </t-nav-link>
  </router-link>
</template>
