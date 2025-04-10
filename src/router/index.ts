import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "Dashbord",
      path: "/",
      component: () => import('@/views/DashboardPage.vue')
    }
  ],
})

export default router
