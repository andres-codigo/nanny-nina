import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import OnBoarding from '../pages/Onboarding.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/onboarding',
    name: 'OnBoarding',
    component: OnBoarding
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router