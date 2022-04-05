<script setup>
import TNavLink from '@/components/navLink/NavLink.vue'
</script>

<template>
  <router-link v-slot="{ navigate, href }" custom>
    <t-nav-link :href="href" @click="navigate">
      <slot />
    </t-nav-link>
  </router-link>
</template>
