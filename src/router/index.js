import { createRouter, createWebHistory } from 'vue-router'

import Launch from '../pages/Launch.vue'
import Home from '../pages/Home.vue'
import OnBoarding from '../pages/Onboarding.vue'
import SignUp from '../pages/SignUp.vue'

const routes = [
  {
    path: '/',
    name: 'Launch',
    component: Launch
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/onboarding',
    name: 'OnBoarding',
    component: OnBoarding
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router