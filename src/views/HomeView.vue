<script setup lang="ts">
  import LoadingSpin from '@/components/LoadingSpin.vue';
  import MovieCard from '@/components/MovieCard.vue';
  import Pagination from '@/components/Pagination.vue';
  import { baseUrl } from '@/models/apiBase';
  import Movie from '@/models/movie';
  import { useAxios } from '@vueuse/integrations/useAxios';
  import camelcaseKeys from 'camelcase-keys';
  import { ref } from 'vue';

  const movies = ref<Movie[]>([]);
  const totalMovies = ref(0);

  const { execute, isFinished } = useAxios(
    baseUrl,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      params: {
        s: 'Star Wars',
      },
    },
    {
      immediate: true,
      onSuccess(response) {
        const moviesInCamelCase = camelcaseKeys(response.Search, { deep: true });
        totalMovies.value = parseInt(response.totalResults);
        movies.value = moviesInCamelCase;
      },
    },
  );
  execute();

  const handlePageChange = (page: number) => {
    execute({
      params: {
        s: 'Star Wars',
        page,
      },
    });
  };
</script>

<template>
  <section class="flex flex-col items-center p-4 max-w-7xl mx-auto font-open-sans">
    <h1 class="self-start my-4 text-2xl font-medium text-gray-700 dark:text-gray-300">All Star Wars movies</h1>
    <div v-if="isFinished" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 my-4">
      <movie-card v-for="movie in movies" :key="movie.imdbId" :movie="movie" :is-loading="isFinished" />
    </div>
    <div v-else class="flex justify-center items-center h-[60vh]">
      <loading-spin />
    </div>
    <pagination :total-items="totalMovies" @update:page="handlePageChange" />
  </section>
</template>
