import { createRouter, createWebHistory } from 'vue-router'

import DashboardHome from '../components/DashboardHome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
     {
      path: "/",
      component: DashboardHome
    }

  ],
})

export default router
