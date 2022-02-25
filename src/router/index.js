import { createRouter, createWebHistory } from 'vue-router'

import Launch from '../pages/Launch.vue'
import Home from '../pages/Home.vue'
import OnBoarding from '../pages/Onboarding.vue'
import SignUp from '../pages/SignUp.vue'
import AccountVerification from '../pages/AccountVerification.vue'

const routes = [
	{
		path: '/',
		name: 'Launch',
		component: Launch
	},
	{
		path: '/home',
		name: 'Home',
		component: Home,
		meta: { transition: 'fade' },
		beforeEnter: (to, from, next) => {
			if (from.path !== '/') {
				to.meta.transition = 'slide-left-to-right'
				next()
			} else {
				next()
			}
		}
	},
	{
		path: '/onboarding',
		name: 'OnBoarding',
		component: OnBoarding,
		meta: { transition: 'slide-right-to-left' }
	},
	{
		path: '/sign-up',
		name: 'SignUp',
		component: SignUp,
		meta: { transition: 'slide-right-to-left' },
		beforeEnter: (to, from, next) => {
			if (from.path === '/account-verification') {
				to.meta.transition = 'slide-left-to-right'
				next()
			} else {
				next()
			}
		}
	},
	{
		path: '/account-verification',
		name: 'AccountVerification',
		component: AccountVerification,
		meta: { transition: 'slide-right-to-left' }
	}
]
const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		} else {
			return { top: 0 };
		}
	  }
})
export default router