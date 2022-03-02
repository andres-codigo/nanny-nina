import { createRouter, createWebHistory } from 'vue-router'

import Launch from '../pages/Launch.vue'
import Home from '../pages/Home.vue'
import Onboarding from '../pages/onboarding/Onboarding.vue'
import OnboardingTwo from '../pages/onboarding/OnboardingTwo.vue'
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
		name: 'Onboarding',
		component: Onboarding,
		meta: { transition: 'slide-right-to-left' }
	},
	{
		path: '/onboarding/2',
		name: 'OnboardingTwo',
		component: OnboardingTwo,
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