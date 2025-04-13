import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: () => import("../views/Landing.vue"),
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('../views/Form.vue'),
    },
  ],
})

export default router
