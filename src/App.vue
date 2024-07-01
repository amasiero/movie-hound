<script setup lang="ts">
  import NavBar from '@/components/NavBar.vue';
  import { RouterView } from 'vue-router';
</script>

<template>
  <nav-bar />
  <main class="pt-20 bg-gray-50 dark:bg-gray-700 h-screen">
    <router-view />
  </main>
</template>
