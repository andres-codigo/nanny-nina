import { createRouter, createWebHistory } from 'vue-router'

import Launch from '../pages/01-registration-onboarding-forgot-password/Launch.vue'
import Dashboard from '../pages/_dashboard/Dashboard.vue'

/* Registration/Onboarding */
import RegistrationContainer from '../pages/01-registration-onboarding-forgot-password/registration/RegistrationContainer.vue'
import OnboardingContainer from '../pages/01-registration-onboarding-forgot-password/onboarding/OnboardingContainer.vue'
import ForgotPasswordContainer from '../pages/01-registration-onboarding-forgot-password/forgot-password/ForgotPasswordContainer.vue'

/* Worker - Childminder and Nanny */
import ChildminderAndNannyContainer from '../pages/02-worker/childminder-and-nanny/ChildminderAndNannyContainer.vue'

/* Worker - Nanny */
import ServiceLaunchChecklistContainer from '../pages/02-worker/nanny/service-launch-and-checklist/ServiceLaunchChecklistContainer.vue'

/* Host - Nanny */
import HostNannyHome from '../pages/03-host/Home.vue'
import HostNannyContainer from '../pages/03-host/nanny/HostNannyContainer.vue'

const routes = [
	{
		path: '/',
		name: 'Launch',
		component: Launch
	},
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: Dashboard,
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
		path: '/registration',
		component: RegistrationContainer,
		meta: { transition: 'slide-right-to-left' }
	},
	{
		path: '/onboarding',
		component: OnboardingContainer,
		meta: { transition: 'slide-right-to-left' }
	},
	{
		path: '/forgot-password',
		component: ForgotPasswordContainer,
		meta: { transition: 'slide-right-to-left' }
	},
	{
		path: '/childminder-and-nanny',
		component: ChildminderAndNannyContainer,
		meta: { transition: 'slide-right-to-left' }
	},
	{
		path: '/nanny-service-launch-and-checklist',
		component: ServiceLaunchChecklistContainer,
		meta: { transition: 'slide-right-to-left' }
	},
	{
		path: '/host-nanny-home',
		component: HostNannyHome,
		meta: { transition: 'slide-right-to-left' }
	},
	{
		path: '/host-nanny',
		component: HostNannyContainer,
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