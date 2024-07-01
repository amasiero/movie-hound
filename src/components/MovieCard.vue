<script setup lang="ts">
  import Movie from '@/models/movie';
  import { RouterLink } from 'vue-router';

  interface MovieCardProps {
    movie: Movie;
  }

  defineProps<MovieCardProps>();
</script>

<template>
  <router-link
    :to="{ name: 'movie', params: { imdbID: movie.imdbID } }"
    class="rounded-lg overflow-hidden shadow-lg hover:transition-transform hover:scale-110 hover:rotate-3 hover:duration-300 hover:ease-in-out"
  >
    <img :src="movie.poster" :alt="movie.title" :title="movie.title" class="w-full h-full object-cover rounded-lg" />
  </router-link>
</template>
