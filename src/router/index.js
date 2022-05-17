import { createRouter, createWebHistory } from 'vue-router'

import Launch from '../pages/01-registration-onboarding-forgot-password/Launch.vue'
import Dashboard from '../pages/_dashboard/Dashboard.vue'

/* Registration/ForgotPassword - Caregiver and Host */
import RegistrationContainer from '../pages/01-registration-onboarding-forgot-password/registration/RegistrationContainer.vue'
import ForgotPasswordContainer from '../pages/01-registration-onboarding-forgot-password/forgot-password/ForgotPasswordContainer.vue'

	/* Onboarding - Host */
	import OnboardingHostContainer from '../pages/01-registration-onboarding-forgot-password/onboarding/host/OnboardingHostContainer.vue'

	/* Onboarding - Caregiver */
	import OnboardingCaregiverContainer from '../pages/01-registration-onboarding-forgot-password/onboarding/caregiver/OnboardingCaregiverContainer.vue'

/* Caregiver - Childminder Nanny */
import HomeWithMenuTemplate from '../pages/02-caregiver/childminder-and-nanny/HomeWithMenuTemplate.vue'
import Reference from '../pages/00-duplicate-pages/Reference.vue'

	/* Caregiver - Nanny */
	import HomeWithoutMenuTemplate from '../pages/00-duplicate-pages/home/HomeWithoutMenuTemplate.vue'
	import CaregiverNannyJobListings from '../pages/02-caregiver/nanny/01-onboarding/pages/01-job-listings/JobListings.vue'
	import CaregiverNannyOnboardingContainer from '../pages/02-caregiver/nanny/01-onboarding/OnboardingContainer.vue'
	import CaregiverNannyParentProfileContainer from '../pages/02-caregiver/nanny/02-parent-profile/ParentProfileContainer.vue'
	import CaregiverNannyBookingInvitesListingWithContent from '../pages/02-caregiver/nanny/03-booking/pages/InvitesWithContent.vue'
	import CaregiverNannyBookingInvitesListingWithNoContent from '../pages/02-caregiver/nanny/03-booking/pages/InvitesNoContent.vue'
	import CaregiverNannyBookingContainer from '../pages/02-caregiver/nanny/03-booking/BookingContainer.vue'
	import CaregiverNannyCancelContainer from '../pages/02-caregiver/nanny/04-cancel/CancelContainer.vue'

	/* Caregiver - Childminder */
	import CaregiverChildminderOnboardingContainer from '../pages/02-caregiver/childminder/01-onboarding/OnboardingContainer.vue'
	import CaregiverChildminderChildminderBookingContainer from '../pages/02-caregiver/childminder/02-booking/BookingContainer.vue'

	/* Caregiver - Au Pair */
	import CaregiverChildminderBookingContainer from '../pages/02-caregiver/au-pair/01-onboarding/pages/01-country-listings/CountryListings.vue'
	import CaregiverAuPairOnboardingContainer from '../pages/02-caregiver/au-pair/01-onboarding/OnboardingContainer.vue'
	import CaregiverAuPairPersonalityTest from '../pages/02-caregiver/au-pair/01-onboarding/pages/02-job-onboarding/PersonalityTest.vue'

/* Host - Nanny */
import HostNannyHome from '../pages/03-host/Home.vue'
import HostNannyContainer from '../pages/03-host/nanny/01-onboarding/HostNannyContainer.vue'
import HostNannyEvent from '../pages/03-host/nanny/02-event/EventContainer.vue'
import HostNannyAvailabilityWithFixedContentBottom from '../pages/03-host/nanny/01-onboarding/pages/onboarding/AvailabilityWithFixedContentBottom.vue'
import HostRequestOverviewWithFixedContentBottom from '../pages/03-host/nanny/01-onboarding/pages/request-overview/RequestOverviewWithFixedContentBottom.vue'
import HostNannyBookingContainer from '../pages/03-host/nanny/03-booking/BookingContainer.vue'
import HostNannyBookingProfile from '../pages/03-host/nanny/03-booking/pages/NannyProfile.vue'

/* Host - Childminder */
import HostChildminderContainer from '../pages/03-host/childminder/HostChildminderContainer.vue'

/* Host - Au Pair */
import HostAuPairContainer from '../pages/03-host/au-pair/HostAuPairContainer.vue'

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
	/*
		Registration/ForgotPassword - Caregiver and Host
	*/
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
		path: '/onboarding-caregiver',
		component: OnboardingCaregiverContainer,
		meta: { transition: 'slide-right-to-left' }
	},
	{
		path: '/onboarding-host',
		component: OnboardingHostContainer,
		meta: { transition: 'slide-right-to-left' }
	},

	/*
		Caregiver - Childminder, Nanny & Au Pair
	*/
	{
		path: '/caregiver-childminder-and-nanny-home-with-bottom-menu',
		component: HomeWithMenuTemplate,
		meta: { transition: 'slide-right-to-left' }
	},
	{
		path: '/caregiver-reference',
		component: Reference,
		meta: { transition: 'slide-right-to-left' }
	},

	/*
		Caregiver - Nanny
	*/
	{
		path: '/caregiver-nanny-home-without-bottom-menu',
		component: HomeWithoutMenuTemplate,
		meta: { transition: 'slide-right-to-left' }
	},
	{
		path: '/caregiver-nanny-job-listings',
		component: CaregiverNannyJobListings,
		meta: { transition: 'slide-right-to-left' }
	},
	{
		path: '/caregiver-nanny-service-onboarding',
		component: CaregiverNannyOnboardingContainer,
		meta: { transition: 'slide-right-to-left' }
	},
	{
		path: '/caregiver-nanny-parent-profile',
		component: CaregiverNannyParentProfileContainer,
		meta: { transition: 'slide-right-to-left' }
	},
	{
		path: '/caregiver-nanny-booking-invites-list-with-content',
		component: CaregiverNannyBookingInvitesListingWithContent,
		meta: { transition: 'slide-right-to-left' }
	},
	{
		path: '/caregiver-nanny-booking-invites-list-with-no-content',
		component: CaregiverNannyBookingInvitesListingWithNoContent,
		meta: { transition: 'slide-right-to-left' }
	},
	{
		path: '/caregiver-nanny-booking',
		component: CaregiverNannyBookingContainer,
		meta: { transition: 'slide-right-to-left' }
	},
	{
		path: '/caregiver-nanny-cancel-booking',
		component: CaregiverNannyCancelContainer,
		meta: { transition: 'slide-right-to-left' }
	},

	/*
		Caregiver - Childminder
	*/
	{
		path: '/caregiver-childminder-service-onboarding',
		component: CaregiverChildminderOnboardingContainer,
		meta: { transition: 'slide-right-to-left' }
	},
	{
		path: '/caregiver-childminder-booking',
		component: CaregiverChildminderChildminderBookingContainer,
		meta: { transition: 'slide-right-to-left' }
	},

	/*
		Caregiver - Au Pair
	*/
	{
		path: '/caregiver-au-pair-country-listings',
		component: CaregiverChildminderBookingContainer,
		meta: { transition: 'slide-right-to-left' }
	},
	{
		path: '/caregiver-au-pair-service-onboarding',
		component: CaregiverAuPairOnboardingContainer,
		meta: { transition: 'slide-right-to-left' }
	},
	{
		path: '/caregiver-au-pair-personality-test',
		component: CaregiverAuPairPersonalityTest,
		meta: { transition: 'slide-right-to-left' }
	},

	/*
		Host - Nanny
	*/
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
		component: HostRequestOverviewWithFixedContentBottom,
		meta: { transition: 'slide-right-to-left' }
	},
	{
		path: '/host-nanny-booking',
		component: HostNannyBookingContainer,
		meta: { transition: 'slide-right-to-left' }
	},
	{
		path: '/host-nanny-booking-profile',
		component: HostNannyBookingProfile,
		meta: { transition: 'slide-right-to-left' }
	},

	/*
		Host - Childminder
	*/
	{
		path: '/host-childminder',
		component: HostChildminderContainer,
		meta: { transition: 'slide-right-to-left' }
	},

	/*
		Host - Au Pair
	*/
	{
		path: '/host-au-pair',
		component: HostAuPairContainer,
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