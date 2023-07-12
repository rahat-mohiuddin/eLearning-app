import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      component: () => import('../layouts/Default.vue'),
      children: [
        { path: '', name: 'About', component: () => import('../views/About.vue') }
      ]
    }
  ]
})

export default router
