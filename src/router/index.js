import { createRouter, createWebHistory } from 'vue-router'

import Launch from '../pages/01-caregiver-and-host/Launch.vue'
import Dashboard from '../pages/_dashboard/Dashboard.vue'

/* START: Caregiver & Host */

	/* Caregiver and Host - Registration/ForgotPassword */
	import RegistrationContainer from '../pages/01-caregiver-and-host/registration/RegistrationContainer.vue'
	import ForgotPasswordContainer from '../pages/01-caregiver-and-host/forgot-password/ForgotPasswordContainer.vue'
	import NotificationsContainer from '../pages/01-caregiver-and-host/notifications/NotificationsContainer.vue'
	import ChatConversation from '../pages/01-caregiver-and-host/notifications/pages/InboxChatConversation.vue'

	/* Caregiver */
	import CaregiverOnboardingContainer from '../pages/01-caregiver-and-host/onboarding/caregiver/OnboardingCaregiverContainer.vue'
	import CaregiverHomeWithMenuTemplate from '../pages/02-caregiver/all/HomeWithMenuTemplate.vue'
	import CaregiverHomeWithoutMenuTemplate from '../pages/00-duplicate-pages/home/HomeWithoutMenuTemplate.vue'
	import CaregiverHomeWithBottomMenuAndProfile from '../pages/02-caregiver/all/CaregiverHomeWithBottomMenuAndProfile.vue'
	import CaregiverPaymentContainer from '../pages/02-caregiver/all/payment/PaymentContainer.vue'
	import CaregiverProfileContainer from '../pages/01-caregiver-and-host/caregiver-profile/CaregiverProfileContainer.vue'

	/* Host */
	import HostOnboardingContainer from '../pages/01-caregiver-and-host/onboarding/host/OnboardingHostContainer.vue'
	import HostNannyHome from '../pages/03-host/Home.vue'
	import HostHomeWithBottomMenuAndProfile from '../pages/03-host/all/HostHomeWithBottomMenuAndProfile.vue'
	import HostPaymentContainer from '../pages/03-host/all/payment/PaymentContainer.vue'

/* END: Caregiver & Host */

/* START: Caregiver - Childminder Nanny Au Pair */

	/* Caregiver - All */
	import Reference from '../pages/00-duplicate-pages/Reference.vue'
	import CaregiverParentProfile from '../pages/00-duplicate-pages/CaregiverParentProfile.vue'

	/* Caregiver - Nanny */
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

/* END: Caregiver - Childminder Nanny Au Pair */

/* START: Host - Childminder Nanny Au Pair */

	/* Host - All */
	import HostBookingProfile from '../pages/03-host/nanny/03-booking/pages/NannyProfile.vue'

	/* Host - Nanny */
	import HostNannyContainer from '../pages/03-host/nanny/01-onboarding/HostNannyContainer.vue'
	import HostNannyEvent from '../pages/03-host/nanny/02-event/EventContainer.vue'
	import HostNannyAvailabilityWithFixedContentBottom from '../pages/03-host/nanny/01-onboarding/pages/onboarding/AvailabilityWithFixedContentBottom.vue'
	import HostRequestOverviewWithFixedContentBottom from '../pages/03-host/nanny/01-onboarding/pages/request-overview/RequestOverviewWithFixedContentBottom.vue'
	import HostNannyBookingContainer from '../pages/03-host/nanny/03-booking/BookingContainer.vue'
	import HostNannyBookingResponsesTabWithPopUp from '../pages/03-host/nanny/03-booking/pages/pop-ups/ResponsesTabWithPopUp.vue'

	/* Host - Childminder */
	import HostChildminderContainer from '../pages/03-host/childminder/01-onboarding/HostChildminderContainer.vue'
	import HostChildminderBookingContainer from '../pages/03-host/childminder/02-booking/BookingContainer.vue'

	/* Host - Au Pair */
	import HostAuPairContainer from '../pages/03-host/au-pair/01-onboarding/HostAuPairContainer.vue'

/* END: Host - Childminder Nanny Au Pair */

/* START: Email Templates */

	import EmailVerificationTemplate from '../pages/04-email-templates/email-verification/Uncompressed.vue'
	import EmailPasswordResetTemplate from '../pages/04-email-templates/password-reset/Uncompressed.vue'
	import EmailPaymentReceivedTemplate from '../pages/04-email-templates/payment-received/Uncompressed.vue'
	import EmailPaymentSuccessfulTemplate from '../pages/04-email-templates/payment-successful/Uncompressed.vue'
	import EmailSuggestedProfileTemplate from '../pages/04-email-templates/suggested-profile/Uncompressed.vue'

/* END: Email Templates */

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
		Caregiver and Host
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
		path: '/caregiver-and-host-notifications',
		component: NotificationsContainer,
		meta: { transition: 'slide-right-to-left' }
	},
	{
		path: '/caregiver-and-host-chat-conversation',
		component: ChatConversation,
		meta: { transition: 'slide-right-to-left' }
	},

	/*
		Caregiver - Childminder, Nanny & Au Pair
	*/
	{
		path: '/onboarding-caregiver',
		component: CaregiverOnboardingContainer,
		meta: { transition: 'slide-right-to-left' }
	},
	{
		path: '/caregiver-childminder-and-nanny-home-with-bottom-menu',
		component: CaregiverHomeWithMenuTemplate,
		meta: { transition: 'slide-right-to-left' }
	},
	{
		path: '/caregiver-nanny-home-without-bottom-menu',
		component: CaregiverHomeWithoutMenuTemplate,
		meta: { transition: 'slide-right-to-left' }
	},
	{
		path: '/caregiver-home-with-bottom-menu-and-profile',
		component: CaregiverHomeWithBottomMenuAndProfile,
		meta: { transition: 'slide-right-to-left' }
	},
	{
		path: '/caregiver-payment-account',
		component: CaregiverPaymentContainer,
		meta: { transition: 'slide-right-to-left' }
	},
	{
		path: '/caregiver-profile',
		component: CaregiverProfileContainer,
		meta: { transition: 'slide-right-to-left' }
	},

	/*
		Host - Childminder, Nanny & Au Pair
	*/
	{
		path: '/onboarding-host',
		component: HostOnboardingContainer,
		meta: { transition: 'slide-right-to-left' }
	},
	{
		path: '/host-nanny-home',
		component: HostNannyHome,
		meta: { transition: 'slide-right-to-left' }
	},
	{
		path: '/host-home-with-bottom-menu-and-profile',
		component: HostHomeWithBottomMenuAndProfile,
		meta: { transition: 'slide-right-to-left' }
	},
	{
		path: '/host-payment-account',
		component: HostPaymentContainer,
		meta: { transition: 'slide-right-to-left' }
	},

	/*
		Caregiver - Childminder, Nanny & Au Pair
	*/
	{
		path: '/caregiver-reference',
		component: Reference,
		meta: { transition: 'slide-right-to-left' }
	},
	{
		path: '/caregiver-parent-profile',
		component: CaregiverParentProfile,
		meta: { transition: 'slide-right-to-left' }
	},

	/*
		Caregiver - Nanny
	*/
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
		Host - Childminder, Nanny & Au Pair
	*/
	{
		path: '/host-nanny-booking-profile',
		component: HostBookingProfile,
		meta: { transition: 'slide-right-to-left' }
	},

	/*
		Host - Nanny
	*/
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
		path: '/host-nanny-booking-response-tab-with-pop-up',
		component: HostNannyBookingResponsesTabWithPopUp,
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
	{
		path: '/host-childminder-booking',
		component: HostChildminderBookingContainer,
		meta: { transition: 'slide-right-to-left' }
	},

	/*
		Host - Au Pair
	*/
	{
		path: '/host-au-pair',
		component: HostAuPairContainer,
		meta: { transition: 'slide-right-to-left' }
	},

	/*
		Email Templates
	*/
	{
		path: '/email-verification',
		component: EmailVerificationTemplate,
		meta: { transition: 'slide-right-to-left' }
	},
	{
		path: '/email-password-reset',
		component: EmailPasswordResetTemplate,
		meta: { transition: 'slide-right-to-left' }
	},
	{
		path: '/email-payment-received',
		component: EmailPaymentReceivedTemplate,
		meta: { transition: 'slide-right-to-left' }
	},
	{
		path: '/email-payment-successful',
		component: EmailPaymentSuccessfulTemplate,
		meta: { transition: 'slide-right-to-left' }
	},
	{
		path: '/email-suggested-profile',
		component: EmailSuggestedProfileTemplate,
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