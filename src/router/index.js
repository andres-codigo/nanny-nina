import { createRouter, createWebHistory } from 'vue-router'

import Launch from '../pages/01-registration-onboarding-forgot-password/Launch.vue'
import Dashboard from '../pages/_dashboard/Dashboard.vue'

/* Registration/ForgotPassword - Caregiver and Host*/
import RegistrationContainer from '../pages/01-registration-onboarding-forgot-password/registration/RegistrationContainer.vue'
import ForgotPasswordContainer from '../pages/01-registration-onboarding-forgot-password/forgot-password/ForgotPasswordContainer.vue'

	/* Onboarding - Caregiver */
	import OnboardingHostContainer from '../pages/01-registration-onboarding-forgot-password/onboarding/host/OnboardingHostContainer.vue'

	/* Onboarding - Host */
	import OnboardingCaregiverContainer from '../pages/01-registration-onboarding-forgot-password/onboarding/caregiver/OnboardingCaregiverContainer.vue'

/* Caregiver - Childminder and Nanny */
import ChildminderAndNannyContainer from '../pages/02-caregiver/childminder-and-nanny/ChildminderAndNannyContainer.vue'

	/* Caregiver - Nanny */
	import ServiceLaunchChecklistOnboardingContainer from '../pages/02-caregiver/nanny/01-service-launch-and-checklist/ServiceLaunchChecklistOnboardingContainer.vue'
	import ParentProfileContainer from '../pages/02-caregiver/nanny/02-parent-profile/ParentProfileContainer.vue'

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
		path: '/forgot-password',
		component: ForgotPasswordContainer,
		meta: { transition: 'slide-right-to-left' }
	},
	{
		path: '/onboarding-host',
		component: OnboardingHostContainer,
		meta: { transition: 'slide-right-to-left' }
	},
	{
		path: '/onboarding-caregiver',
		component: OnboardingCaregiverContainer,
		meta: { transition: 'slide-right-to-left' }
	},
	{
		path: '/childminder-and-nanny',
		component: ChildminderAndNannyContainer,
		meta: { transition: 'slide-right-to-left' }
	},
	{
		path: '/nanny-service-launch-checklist-onboarding',
		component: ServiceLaunchChecklistOnboardingContainer,
		meta: { transition: 'slide-right-to-left' }
	},
	{
		path: '/nanny-parent-profile',
		component: ParentProfileContainer,
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