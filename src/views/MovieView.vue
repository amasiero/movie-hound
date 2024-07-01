<script setup lang="ts">
  import Badge from '@/components/Badge.vue';
  import Tooltip from '@/components/Tooltip.vue';
  import { movies } from '@/models/movie';
  import { ArrowLeftCircleIcon } from '@heroicons/vue/24/outline';
  import { useRouteParams } from '@vueuse/router';
  import { computed, unref } from 'vue';

  const imdbId = useRouteParams('imdbId');

  const movie = computed(() => movies.find((movie) => movie.imdbId === unref(imdbId)));
</script>

<template>
  <section class="flex flex-col p-4 max-w-7xl mx-auto font-open-sans">
    <div class="flex items-center gap-4 text-gray-700 dark:text-gray-300">
      <tooltip content="Go back" placement="bottom">
        <button @click.prevent="$router.go(-1)">
          <ArrowLeftCircleIcon class="w-8 h-8" />
        </button>
      </tooltip>
      <div class="flex items-baseline">
        <h1 class="my-4 text-2xl font-medium justify-start">{{ movie?.title }}</h1>
        <h2 class="text-lg font-medium>">{{ `&nbsp;-&nbsp;${movie?.released}` }}</h2>
      </div>
    </div>
    <section v-if="!!movie" class="flex gap-4 text-gray-700 dark:text-gray-300">
      <img
        :src="movie.poster"
        :alt="movie.title"
        :title="movie.title"
        class="flex-0 object-fill rounded-md border-[1px] border-gray-700 dark:border-gray-300 max-w-[300px] max-h-[495px]"
      />
      <div class="flex-1">
        <div class="flex-col">
          <h2 class="text-xl font-medium mb-2.5">Genre</h2>
          <div class="flex gap-2">
            <Badge v-for="genre in movie?.genre?.split(',')" :content="genre" />
          </div>
          <h2 class="text-xl font-medium mt-6 mb-2">IMDB Rating:</h2>
          <div class="inline-flex gap-1 items-baseline">
            <span class="text-6xl font-bold">{{ movie?.imdbRating }}</span>
            <span class="text-4xl font-bold pb-1">/ 10</span>
          </div>
          <h2 class="text-xl font-medium mt-6 mb-2">Synopsis:</h2>
          <p class="text-md">{{ movie?.plot }}</p>
          <span class="flex flex-col text-md font-medium mt-6 mb-2">
            Director: <b class="font-normal">{{ movie?.director }}</b>
          </span>
          <span class="flex flex-col text-md font-medium mt-6 mb-2">
            Cast: <b class="font-normal">{{ movie?.actors }}</b>
          </span>
        </div>
      </div>
    </section>
  </section>
</template>
