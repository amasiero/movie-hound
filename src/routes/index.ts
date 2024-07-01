import { createMemoryHistory, createRouter } from 'vue-router';

const routes = [
  { name: 'home', path: '/', component: () => import('../views/HomeView.vue') },
  { name: 'movie', path: '/movie/:imdbId', component: () => import('../views/MovieView.vue') },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
