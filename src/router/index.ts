import { createRouter, createWebHistory } from 'vue-router'
import {matchesRoutes} from "@features/matches";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      ...matchesRoutes
  ],
})

export default router
