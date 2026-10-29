import { createRouter, createWebHistory } from 'vue-router'

import SweetDemo from "@/components/SweetDemo.vue"
import AppAccordionTopTipsContainer from '@/components/AppAccordionTopTipsContainer.vue'
import AppAccordionFAQsContainer from '@/components/AppAccordionFAQsContainer.vue'
import AppReminderContainer from '@/components/AppReminderContainer.vue'


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
      component: AppAccordionTopTipsContainer
    },
    {
      path: "/faqs",
      component: AppAccordionFAQsContainer
    },
    {
      path: "/reminders",
      component: AppReminderContainer
    },
    {
      path: "/",
      component: SweetDemo
    },
  ],
})

export default router
