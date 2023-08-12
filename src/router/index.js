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
      path: `${baseUrl}/user/login`,
      component: () => import('../layouts/Auth.vue'),
      children: [
        {path: '', name: 'login', component: () => import('../components/Login.vue')}
      ]
    },
    {
      path: `${baseUrl}/user/signup`,
      component: () => import('../layouts/Auth.vue'),
      children: [
        {path: '', name: 'signup', component: () => import('../components/Signup.vue')}
      ]
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
        { path: '', name: 'blog', component: () => import('../views/Blogs.vue') }
      ]
    },
    {
      path: `${baseUrl}/blog`,
      component: () => import('../layouts/Default.vue'),
      children: [
        { path: 'post-1', name: 'Quick example build on the card title', component: () => import('../views/SingleBlog.vue') }
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
