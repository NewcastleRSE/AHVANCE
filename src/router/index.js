import { createRouter, createWebHistory } from 'vue-router'

import SweetDemo from "../components/SweetDemo.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
     {
      path: "/",
      component: SweetDemo
    }
  ],
})

export default router
