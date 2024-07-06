<script setup lang="ts">
  import Logo from '@/components/Logo.vue';
  import Search from '@/components/Search.vue';
  import Tooltip from '@/components/Tooltip.vue';
  import useSearch from '@/composables/useSearch';
  import { MoonIcon, SunIcon } from '@heroicons/vue/24/outline';
  import { useDark, useToggle } from '@vueuse/core';
  import { ref, watch } from 'vue';
  import { RouterLink } from 'vue-router';

  const isDark = useDark();
  const toggleDark = useToggle(isDark);

  const searchTerm = ref<string>('');
  const { setSearchTerm } = useSearch();

  watch(
    () => searchTerm.value,
    () => {
      setSearchTerm(searchTerm.value);
    },
  );
</script>

<template>
  <nav class="absolute top-0 left-0 w-full bg-gray-100 border-gray-200 shadow dark:bg-gray-800 font-open-sans">
    <div class="max-w-screen-xl flex md:items-center md:justify-between mx-auto p-4">
      <div class="flex flex-col md:flex-row flex-grow justify-between mr-4">
        <router-link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <logo class="h-12 w-12" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-gray-300">MovieHound</span>
        </router-link>

        <Search v-model="searchTerm" />
      </div>
      <tooltip content="Swipe theme" placement="left">
        <button class="mt-3 md:mt-0 inline-flex items-center cursor-pointer gap-2" @click.prevent="toggleDark()">
          <moon-icon v-if="isDark" class="w-6 h-6 text-gray-300" />
          <sun-icon v-else class="w-6 h-6 text-gray-500" />
        </button>
      </tooltip>
    </div>
  </nav>
</template>
