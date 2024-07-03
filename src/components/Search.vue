<script setup lang="ts">
  import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline';

  const search = defineModel();
</script>

<template>
  <div
    class="bg-gray-200 dark:bg-gray-700 w-64 md:w-72 flex items-center px-3 py-2 border border-gray-600 dark:border-gray-500 rounded-full"
  >
    <MagnifyingGlassIcon class="h-5 w-5 text-gray-800 dark:text-gray-300" />
    <input
      v-model="search"
      class="px-2 border-none bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 outline-none placeholder-gray-400"
      type="text"
      placeholder="Search"
    />
  </div>
</template>
