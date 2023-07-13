import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
const baseUrl = import.meta.env.VITE_BUILD_ADDRESS;
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: `${baseUrl}/`,
      name: 'home',
      component: HomeView
    },
    {
      path: `${baseUrl}/profile`,
      component: () => import('../layouts/Default.vue'),
      children: [
        { path: '', name: 'Profile', component: () => import('../views/Profile.vue') }
      ]
    },
    {
      path: `${baseUrl}/course`,
      component: () => import('../layouts/Default.vue'),
      children: [
        { path: '', name: 'Course', component: () => import('../views/Course.vue') }
      ]
    },
    {
      path: `${baseUrl}/contact`,
      component: () => import('../layouts/Default.vue'),
      children: [
        { path: '', name: 'Contact', component: () => import('../views/Contact.vue') }
      ]
    },
    {
      path: `${baseUrl}/about`,
      component: () => import('../layouts/Default.vue'),
      children: [
        { path: '', name: 'About', component: () => import('../views/About.vue') }
      ]
    }
  ]
})

export default router
