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
	import HomeWithoutBottomMenu from '../pages/00-duplicate-pages/home/HomeWithoutMenuTemplate.vue'
	import JobListings from '../pages/02-caregiver/nanny/01-onboarding/pages/02-job-listings/JobListings.vue'
	import NannyOnboardingContainer from '../pages/02-caregiver/nanny/01-onboarding/OnboardingContainer.vue'
	import ParentProfileContainer from '../pages/02-caregiver/nanny/02-parent-profile/ParentProfileContainer.vue'

	/* Caregiver - Childminder */
	import ChildminderOnboardingContainer from '../pages/02-caregiver/childminder/01-onboarding/OnboardingContainer.vue'

/* Host - Nanny */
import HostNannyHome from '../pages/03-host/Home.vue'
import HostNannyContainer from '../pages/03-host/nanny/HostNannyContainer.vue'
import HostNannyEvent from '../pages/03-host/nanny/pages/event/EventContainer.vue'
import HostNannyAvailabilityWithFixedContentBottom from '../pages/03-host/nanny/pages/onboarding/AvailabilityWithFixedContentBottom.vue'
import RequestOverviewWithFixedContentBottom from '../pages/03-host/nanny/pages/request-overview/RequestOverviewWithFixedContentBottom.vue'

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
		path: '/childminder-and-nanny-home',
		component: ChildminderAndNannyContainer,
		meta: { transition: 'slide-right-to-left' }
	},
	{
		path: '/nanny-home-without-bottom-menu',
		component: HomeWithoutBottomMenu,
		meta: { transition: 'slide-right-to-left' }
	},
	{
		path: '/nanny-job-listings',
		component: JobListings,
		meta: { transition: 'slide-right-to-left' }
	},
	{
		path: '/nanny-service-onboarding',
		component: NannyOnboardingContainer,
		meta: { transition: 'slide-right-to-left' }
	},
	{
		path: '/nanny-parent-profile',
		component: ParentProfileContainer,
		meta: { transition: 'slide-right-to-left' }
	},
	{
		path: '/childminder-service-onboarding',
		component: ChildminderOnboardingContainer,
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
	{
		path: '/host-nanny-event',
		component: HostNannyEvent,
		meta: { transition: 'slide-right-to-left' }
	},
	{
		path: '/host-nanny-availability-w-fixed-button',
		component: HostNannyAvailabilityWithFixedContentBottom,
		meta: { transition: 'slide-right-to-left' }
	},
	{
		path: '/host-nanny-availability-w-fixed-complete-button',
		component: RequestOverviewWithFixedContentBottom,
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