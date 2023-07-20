import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Auth from '../views/auth.vue'
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
      path: `${baseUrl}/user/login`,
      name: 'auth',
      component: Auth
    },
    {
      path: `${baseUrl}/our-team`,
      component: () => import('../layouts/Default.vue'),
      children: [
        { path: '', name: 'Our Team', component: () => import('../views/OurTeam.vue') }
      ]
    },
    {
      path: `${baseUrl}/blog`,
      component: () => import('../layouts/Default.vue'),
      children: [
        { path: '', name: 'blog', component: () => import('../views/SingleBlog.vue') }
      ]
    },
    {
      path: `${baseUrl}/services`,
      component: () => import('../layouts/Default.vue'),
      children: [
        { path: 'course', name: 'Course', component: () => import('../views/Course.vue') }
      ]
    },
    {
      path: `${baseUrl}/services`,
      component: () => import('../layouts/Default.vue'),
      children: [
        { path: 'tutorial', name: 'Tutorial', component: () => import('../views/Tutorials.vue') }
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
