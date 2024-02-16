import { createRouter, createWebHistory } from 'vue-router';

import TypingView from '../views/TypingView.vue';
import ResultView from '../views/ResultView.vue';
import StatisticsView from '../views/StatisticsView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: TypingView },
    { path: '/result', component: ResultView },
    { path: '/statistics', component: StatisticsView },
  ]
})

export default router;
