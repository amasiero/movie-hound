<script setup lang="ts">
  import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline';

  const search = defineModel();
</script>

<template>
  <div class="bg-gray-300 w-64 md:w-72 flex items-center px-3 py-2 border border-gray-600 rounded-full">
    <MagnifyingGlassIcon class="h-5 w-5 text-gray-800" />
    <input
      v-model="search"
      class="px-2 border-none bg-gray-300 text-gray-800 outline-none"
      type="text"
      placeholder="Search"
    />
  </div>
</template>
