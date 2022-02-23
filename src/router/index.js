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
		meta: { transition: 'slide-fade' }
	},
	{
		path: '/onboarding',
		name: 'OnBoarding',
		component: OnBoarding,
	},
	{
		path: '/sign-up',
		name: 'SignUp',
		component: SignUp
	},
	{
		path: '/account-verification',
		name: 'AccountVerification',
		component: AccountVerification
	}
]
const router = createRouter({
	history: createWebHistory(),
	routes
})
export default router