<script setup lang="ts">
  import NavBar from '@/components/NavBar.vue';
  import { RouterView } from 'vue-router';
</script>

<template>
  <nav-bar />
  <main class="pt-28 md:pt-20 bg-gray-50 dark:bg-gray-700 min-h-screen h-full">
    <router-view />
  </main>
</template>
