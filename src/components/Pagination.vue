<script setup lang="ts">
  import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline';
  import { useOffsetPagination } from '@vueuse/core';
  import { computed, ref, unref } from 'vue';

  interface PaginationProps {
    totalItems: number;
  }

  const props = defineProps<PaginationProps>();
  const emit = defineEmits(['update:page']);

  const total = computed(() => unref(props.totalItems));
  const maxNumberOfPagination = ref(10);

  const { next, prev, isFirstPage, isLastPage, currentPage, pageCount } = useOffsetPagination({
    total,
    page: 1,
    pageSize: 10,
    onPageChange: ({ currentPage }) => {
      emit('update:page', currentPage);
    },
  });

  const limitedPages = computed(() => {
    const limit = Math.min(pageCount.value, maxNumberOfPagination.value);
    let start = Math.max(currentPage.value - Math.floor(limit / 2), 1);
    let end = start + limit - 1;
    if (end > pageCount.value) {
      end = pageCount.value;
      start = Math.max(end - limit + 1, 1);
    }
    const pagesNumber = [];
    for (let i = start; i <= end; i++) pagesNumber.push(i);
    return pagesNumber;
  });

  const firtButtonStyle = computed(() => ({
    'flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400':
      true,
    'hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-white': !isFirstPage.value,
    'cursor-not-allowed': isFirstPage.value,
  }));

  const buttonStyle = (page: number) => ({
    'flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400 min-w-[42px]':
      true,
    'hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-white': currentPage.value !== page,
    'text-blue-500 bg-blue-100 dark:border-gray-700 dark:bg-gray-600 dark:text-white': currentPage.value === page,
  });

  const lastButtonStyle = computed(() => ({
    'flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400':
      true,
    'hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-white': !isLastPage.value,
    'cursor-not-allowed': isLastPage.value,
  }));
</script>

<template>
  <nav aria-label="Page navigation example">
    <ul class="flex items-center -space-x-px h-8 text-sm">
      <li>
        <button :class="firtButtonStyle" @click="prev" :disabled="isFirstPage">
          <ChevronLeftIcon class="w-4 h-4 stroke-2" />
        </button>
      </li>
      <li v-for="page in limitedPages">
        <button
          :key="page"
          :class="buttonStyle(page)"
          :disabled="currentPage === page"
          @click="() => (currentPage = page)"
        >
          {{ page }}
        </button>
      </li>
      <li>
        <button :class="lastButtonStyle" :disabled="isLastPage" @click="next">
          <ChevronRightIcon class="w-4 h-4 stroke-2" />
        </button>
      </li>
    </ul>
  </nav>
</template>
