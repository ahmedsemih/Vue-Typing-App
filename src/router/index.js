import { createRouter, createWebHistory } from 'vue-router';
import TypingView from '../views/TypingView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: TypingView }
  ]
})

export default router;
