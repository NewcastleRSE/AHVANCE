import { createRouter, createWebHistory } from 'vue-router'

import SweetDemo from "../components/SweetDemo.vue"
import AppAccordionContainer from '@/components/AppAccordionContainer.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: SweetDemo
    },
    {
      path: "/using",
      component: SweetDemo
    },
    {
      path: "/toptips",
      component: AppAccordionContainer
    },
    {
      path: "/faqs",
      component: AppAccordionContainer
    },
    {
      path: "/",
      component: SweetDemo
    },
    {
      path: "/",
      component: SweetDemo
    },
  ],
})

export default router
