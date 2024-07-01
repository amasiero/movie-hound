<template>
  <div v-bind="$attrs">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <circle
        cx="70"
        cy="70"
        r="50"
        class="stroke-gray-700 fill-gray-100 dark:stroke-gray-300 dark:fill-gray-700"
        stroke-width="8"
      />
      <line x1="70" y1="70" x2="130" y2="130" class="stroke-gray-700 dark:stroke-gray-300" stroke-width="8" />
      <rect x="55" y="55" width="30" height="30" class="fill-gray-700 dark:fill-gray-300" />
    </svg>
  </div>
</template>
