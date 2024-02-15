import { createRouter, createWebHistory } from 'vue-router';
import TypingView from '../views/TypingView.vue';
import ResultView from '../views/ResultView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: TypingView },
    { path: '/result', component: ResultView },
  ]
})

export default router;
