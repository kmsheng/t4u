<script setup>
import TNavMenuLink from '@/components/navMenuLink/NavMenuLink.vue'
</script>

<template>
  <router-link v-slot="{ navigate, href }" custom>
    <t-nav-menu-link :href="href" @click="navigate">
      <slot />
    </t-nav-menu-link>
  </router-link>
</template>
