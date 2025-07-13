import { createRouter, createWebHistory } from 'vue-router'
import FanclubView from '../views/FanclubView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'fanclub',
      component: FanclubView,
    },
  ],
})

export default router
