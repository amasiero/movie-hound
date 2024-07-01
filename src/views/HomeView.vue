<script setup lang="ts">
  import MovieCard from '@/components/MovieCard.vue';
  import { movies } from '@/models/movie';
</script>

<template>
  <section class="flex flex-col items-center p-4 max-w-7xl mx-auto font-open-sans">
    <h1 class="self-start my-4 text-2xl font-medium text-gray-700 dark:text-gray-300">All Star Wars movies</h1>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 my-4">
      <movie-card v-for="movie in movies" :key="movie.imdbID" :movie="movie" />
    </div>
  </section>
</template>
