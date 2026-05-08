import { createRouter, createWebHistory } from 'vue-router'

import AppWelcome from "../components/AppWelcome.vue"
import AppDashboard from "../components/AppDashboard.vue"
import AppAbout from "../components/AppAbout.vue"
import AppContact from "../components/AppContact.vue"
import AppFAQ from "../components/AppFAQ.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
     {
      path: "/",
      component: AppWelcome
    },
     {
      path: "/dashboard",
      component: AppDashboard
    },
     {
      path: "/about",
      component: AppAbout
    },
     {
      path: "/faq",
      component: AppFAQ
    },
     {
      path: "/contact",
      component: AppContact
    }
  ],
})

export default router
