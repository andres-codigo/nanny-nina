import { createRouter, createWebHistory } from 'vue-router'

import Launch from '../pages/Launch.vue'
import Home from '../pages/_home/Home.vue'
import SignUp from '../pages/registration-and-onboarding/SignUp.vue'
import VerificationMessage from '../pages/registration-and-onboarding/VerificationMessage.vue'
import OnboardingContainer from '../pages/registration-and-onboarding/onboarding/OnboardingContainer.vue'
import Login from '../pages/registration-and-onboarding/Login.vue'
import ForgotPassword from '../pages/forgot-password/ForgotPassword.vue'

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
		path: '/sign-up',
		name: 'SignUp',
		component: SignUp,
		meta: { transition: 'slide-right-to-left' }
	},
	{
		path: '/verification-message',
		name: 'VerificationMessage',
		component: VerificationMessage,
		meta: { transition: 'slide-right-to-left' }
	},
	{
		path: '/login',
		name: 'Login',
		component: Login,
		meta: { transition: 'slide-right-to-left' }
	},
	{
		path: '/onboarding',
		name: 'Onboarding',
		component: OnboardingContainer,
		meta: { transition: 'slide-right-to-left' }
	},
	{
		path: '/forgot-password',
		name: 'ForgotPassword',
		component: ForgotPassword,
		meta: { transition: 'slide-right-to-left' }
	},
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