<script setup lang="ts">
  interface BadgeProps {
    content: string;
  }

  defineProps<BadgeProps>();
</script>

<template>
  <span
    class="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-sm text-gray-700 dark:text-gray-300 font-medium ring-1 ring-inset ring-gray-700 dark:ring-gray-300"
  >
    <svg class="h-1.5 w-1.5 fill-blue-500" viewBox="0 0 6 6" aria-hidden="true">
      <circle cx="3" cy="3" r="3" />
    </svg>
    {{ content }}
  </span>
</template>
