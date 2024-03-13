import { createRouter, createWebHistory } from 'vue-router'

const Launch = () => import('@/pages/01-caregiver-and-host/Launch.vue')
const Dashboard = () => import('@/pages/_dashboard/Dashboard.vue')

/* START: Caregiver & Host */

/* Caregiver and Host - Registration/ForgotPassword */
const RegistrationContainer = () =>
	import(
		'@/pages/01-caregiver-and-host/registration/RegistrationContainer.vue'
	)
const ForgotPasswordContainer = () =>
	import(
		'@/pages/01-caregiver-and-host/forgot-password/ForgotPasswordContainer.vue'
	)
const NotificationsContainer = () =>
	import(
		'@/pages/01-caregiver-and-host/notifications/NotificationsContainer.vue'
	)
const ChatConversation = () =>
	import(
		'@/pages/01-caregiver-and-host/notifications/pages/InboxChatConversation.vue'
	)
const HelpMeChoose = () =>
	import(
		'@/pages/01-caregiver-and-host/help-me-choose/HelpMeChooseContainer.vue'
	)
const StickyHeaderTabsAndBottomMenu = () =>
	import('@/pages/01-caregiver-and-host/StickyHeaderTabsAndBottomMenu.vue')

/* Caregiver */
const CaregiverOnboardingContainer = () =>
	import(
		'@/pages/01-caregiver-and-host/onboarding/caregiver/OnboardingCaregiverContainer.vue'
	)
const CaregiverHomeWithMenuTemplate = () =>
	import('@/pages/02-caregiver/all/HomeWithMenuTemplate.vue')
const CaregiverHomeWithoutMenuTemplate = () =>
	import('@/pages/00-duplicate-pages/home/HomeWithoutMenuTemplate.vue')
const CaregiverHomeWithBottomMenuAndProfile = () =>
	import('@/pages/02-caregiver/all/CaregiverHomeWithBottomMenuAndProfile.vue')
const CaregiverPaymentContainer = () =>
	import('@/pages/02-caregiver/all/payment/PaymentContainer.vue')
const CaregiverProfileContainer = () =>
	import(
		'@/pages/01-caregiver-and-host/caregiver-profile/CaregiverProfileContainer.vue'
	)

/* Host */
const HostOnboardingContainer = () =>
	import(
		'@/pages/01-caregiver-and-host/onboarding/host/OnboardingHostContainer.vue'
	)
const HostNannyHome = () => import('@/pages/03-host/Home.vue')
const HostHomeWithBottomMenuAndProfile = () =>
	import('@/pages/03-host/all/HostHomeWithBottomMenuAndProfile.vue')
const HostPaymentContainer = () =>
	import('@/pages/03-host/all/payment/PaymentContainer.vue')

/* END: Caregiver & Host */

/* START: Caregiver - Childminder Nanny Au Pair */

/* Caregiver - All */
const Reference = () => import('@/pages/00-duplicate-pages/Reference.vue')
const CaregiverParentProfile = () =>
	import('@/pages/00-duplicate-pages/CaregiverParentProfile.vue')

/* Caregiver - Nanny */
const CaregiverNannyJobListings = () =>
	import(
		'@/pages/02-caregiver/nanny/01-onboarding/pages/01-job-listings/JobListings.vue'
	)
const CaregiverNannyOnboardingContainer = () =>
	import('@/pages/02-caregiver/nanny/01-onboarding/OnboardingContainer.vue')
const CaregiverNannyParentProfileContainer = () =>
	import(
		'@/pages/02-caregiver/nanny/02-parent-profile/ParentProfileContainer.vue'
	)
const CaregiverNannyBookingInvitesListingWithContent = () =>
	import('@/pages/02-caregiver/nanny/03-booking/pages/InvitesWithContent.vue')
const CaregiverNannyBookingInvitesListingWithNoContent = () =>
	import('@/pages/02-caregiver/nanny/03-booking/pages/InvitesNoContent.vue')
const CaregiverNannyBookingContainer = () =>
	import('@/pages/02-caregiver/nanny/03-booking/BookingContainer.vue')
const CaregiverNannyCancelContainer = () =>
	import('@/pages/02-caregiver/nanny/04-cancel/CancelContainer.vue')

/* Caregiver - Childminder */
const CaregiverChildminderOnboardingContainer = () =>
	import(
		'@/pages/02-caregiver/childminder/01-onboarding/OnboardingContainer.vue'
	)
const CaregiverChildminderChildminderBookingContainer = () =>
	import('@/pages/02-caregiver/childminder/02-booking/BookingContainer.vue')

/* Caregiver - Au Pair */
const CaregiverChildminderBookingContainer = () =>
	import(
		'@/pages/02-caregiver/au-pair/01-onboarding/pages/01-country-listings/CountryListings.vue'
	)
const CaregiverAuPairOnboardingContainer = () =>
	import('@/pages/02-caregiver/au-pair/01-onboarding/OnboardingContainer.vue')
const CaregiverAuPairPersonalityTest = () =>
	import(
		'@/pages/02-caregiver/au-pair/01-onboarding/pages/02-job-onboarding/PersonalityTest.vue'
	)
const CaregiverAuPairBookingContainer = () =>
	import('@/pages/02-caregiver/au-pair/02-booking/BookingContainer.vue')

/* END: Caregiver - Childminder Nanny Au Pair */

/* START: Host - Childminder Nanny Au Pair */

/* Host - All */
const HostBookingProfile = () =>
	import('@/pages/03-host/nanny/03-booking/pages/NannyProfile.vue')

/* Host - Nanny */
const HostNannyContainer = () =>
	import('@/pages/03-host/nanny/01-onboarding/HostNannyContainer.vue')
const HostNannyEvent = () =>
	import('@/pages/03-host/nanny/02-event/EventContainer.vue')
const HostNannyAvailabilityWithFixedContentBottom = () =>
	import(
		'@/pages/03-host/nanny/01-onboarding/pages/onboarding/AvailabilityWithFixedContentBottom.vue'
	)
const HostRequestOverviewWithFixedContentBottom = () =>
	import(
		'@/pages/03-host/nanny/01-onboarding/pages/request-overview/RequestOverviewWithFixedContentBottom.vue'
	)
const HostNannyBookingContainer = () =>
	import('@/pages/03-host/nanny/03-booking/BookingContainer.vue')
const HostNannyBookingResponsesTabWithPopUp = () =>
	import(
		'@/pages/03-host/nanny/03-booking/pages/pop-ups/ResponsesTabWithPopUp.vue'
	)

/* Host - Childminder */
const HostChildminderContainer = () =>
	import(
		'@/pages/03-host/childminder/01-onboarding/HostChildminderContainer.vue'
	)
const HostChildminderBookingContainer = () =>
	import('@/pages/03-host/childminder/02-booking/BookingContainer.vue')

/* Host - Au Pair */
const HostAuPairContainer = () =>
	import('@/pages/03-host/au-pair/01-onboarding/HostAuPairContainer.vue')

/* END: Host - Childminder Nanny Au Pair */

/* START: Email Templates */

const EmailVerificationTemplate = () =>
	import('@/pages/04-email-templates/email-verification/Uncompressed.vue')
const EmailPasswordResetTemplate = () =>
	import('@/pages/04-email-templates/password-reset/Uncompressed.vue')
const EmailPaymentReceivedTemplate = () =>
	import('@/pages/04-email-templates/payment-received/Uncompressed.vue')
const EmailPaymentSuccessfulTemplate = () =>
	import('@/pages/04-email-templates/payment-successful/Uncompressed.vue')
const EmailSuggestedProfileTemplate = () =>
	import('@/pages/04-email-templates/suggested-profile/Uncompressed.vue')

/* END: Email Templates */

const routes = [
	{
		path: '/',
		name: 'Launch',
		component: Launch,
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
		},
	},

	/*
		Caregiver and Host
	*/
	{
		path: '/registration',
		component: RegistrationContainer,
		meta: { transition: 'slide-right-to-left' },
	},
	{
		path: '/forgot-password',
		component: ForgotPasswordContainer,
		meta: { transition: 'slide-right-to-left' },
	},
	{
		path: '/caregiver-and-host-notifications',
		component: NotificationsContainer,
		meta: { transition: 'slide-right-to-left' },
	},
	{
		path: '/caregiver-and-host-chat-conversation',
		component: ChatConversation,
		meta: { transition: 'slide-right-to-left' },
	},
	{
		path: '/help-me-choose',
		component: HelpMeChoose,
		meta: { transition: 'slide-right-to-left' },
	},
	{
		path: '/sticky-header-tabs-and-bottom-menu',
		component: StickyHeaderTabsAndBottomMenu,
		meta: { transition: 'slide-right-to-left' },
	},

	/*
		Caregiver - Childminder, Nanny & Au Pair
	*/
	{
		path: '/onboarding-caregiver',
		component: CaregiverOnboardingContainer,
		meta: { transition: 'slide-right-to-left' },
	},
	{
		path: '/caregiver-childminder-and-nanny-home-with-bottom-menu',
		component: CaregiverHomeWithMenuTemplate,
		meta: { transition: 'slide-right-to-left' },
	},
	{
		path: '/caregiver-nanny-home-without-bottom-menu',
		component: CaregiverHomeWithoutMenuTemplate,
		meta: { transition: 'slide-right-to-left' },
	},
	{
		path: '/caregiver-home-with-bottom-menu-and-profile',
		component: CaregiverHomeWithBottomMenuAndProfile,
		meta: { transition: 'slide-right-to-left' },
	},
	{
		path: '/caregiver-payment-account',
		component: CaregiverPaymentContainer,
		meta: { transition: 'slide-right-to-left' },
	},
	{
		path: '/caregiver-profile',
		component: CaregiverProfileContainer,
		meta: { transition: 'slide-right-to-left' },
	},

	/*
		Host - Childminder, Nanny & Au Pair
	*/
	{
		path: '/onboarding-host',
		component: HostOnboardingContainer,
		meta: { transition: 'slide-right-to-left' },
	},
	{
		path: '/host-nanny-home',
		component: HostNannyHome,
		meta: { transition: 'slide-right-to-left' },
	},
	{
		path: '/host-home-with-bottom-menu-and-profile',
		component: HostHomeWithBottomMenuAndProfile,
		meta: { transition: 'slide-right-to-left' },
	},
	{
		path: '/host-payment-account',
		component: HostPaymentContainer,
		meta: { transition: 'slide-right-to-left' },
	},

	/*
		Caregiver - Childminder, Nanny & Au Pair
	*/
	{
		path: '/caregiver-reference',
		component: Reference,
		meta: { transition: 'slide-right-to-left' },
	},
	{
		path: '/caregiver-parent-profile',
		component: CaregiverParentProfile,
		meta: { transition: 'slide-right-to-left' },
	},

	/*
		Caregiver - Nanny
	*/
	{
		path: '/caregiver-nanny-job-listings',
		component: CaregiverNannyJobListings,
		meta: { transition: 'slide-right-to-left' },
	},
	{
		path: '/caregiver-nanny-service-onboarding',
		component: CaregiverNannyOnboardingContainer,
		meta: { transition: 'slide-right-to-left' },
	},
	{
		path: '/caregiver-nanny-parent-profile',
		component: CaregiverNannyParentProfileContainer,
		meta: { transition: 'slide-right-to-left' },
	},
	{
		path: '/caregiver-nanny-booking-invites-list-with-content',
		component: CaregiverNannyBookingInvitesListingWithContent,
		meta: { transition: 'slide-right-to-left' },
	},
	{
		path: '/caregiver-nanny-booking-invites-list-with-no-content',
		component: CaregiverNannyBookingInvitesListingWithNoContent,
		meta: { transition: 'slide-right-to-left' },
	},
	{
		path: '/caregiver-nanny-booking',
		component: CaregiverNannyBookingContainer,
		meta: { transition: 'slide-right-to-left' },
	},
	{
		path: '/caregiver-nanny-cancel-booking',
		component: CaregiverNannyCancelContainer,
		meta: { transition: 'slide-right-to-left' },
	},

	/*
		Caregiver - Childminder
	*/
	{
		path: '/caregiver-childminder-service-onboarding',
		component: CaregiverChildminderOnboardingContainer,
		meta: { transition: 'slide-right-to-left' },
	},
	{
		path: '/caregiver-childminder-booking',
		component: CaregiverChildminderChildminderBookingContainer,
		meta: { transition: 'slide-right-to-left' },
	},

	/*
		Caregiver - Au Pair
	*/
	{
		path: '/caregiver-au-pair-country-listings',
		component: CaregiverChildminderBookingContainer,
		meta: { transition: 'slide-right-to-left' },
	},
	{
		path: '/caregiver-au-pair-service-onboarding',
		component: CaregiverAuPairOnboardingContainer,
		meta: { transition: 'slide-right-to-left' },
	},
	{
		path: '/caregiver-au-pair-personality-test',
		component: CaregiverAuPairPersonalityTest,
		meta: { transition: 'slide-right-to-left' },
	},
	{
		path: '/caregiver-au-pair-booking',
		component: CaregiverAuPairBookingContainer,
		meta: { transition: 'slide-right-to-left' },
	},

	/*
		Host - Childminder, Nanny & Au Pair
	*/
	{
		path: '/host-nanny-booking-profile',
		component: HostBookingProfile,
		meta: { transition: 'slide-right-to-left' },
	},

	/*
		Host - Nanny
	*/
	{
		path: '/host-nanny',
		component: HostNannyContainer,
		meta: { transition: 'slide-right-to-left' },
	},
	{
		path: '/host-nanny-event',
		component: HostNannyEvent,
		meta: { transition: 'slide-right-to-left' },
	},
	{
		path: '/host-nanny-availability-w-fixed-button',
		component: HostNannyAvailabilityWithFixedContentBottom,
		meta: { transition: 'slide-right-to-left' },
	},
	{
		path: '/host-nanny-availability-w-fixed-complete-button',
		component: HostRequestOverviewWithFixedContentBottom,
		meta: { transition: 'slide-right-to-left' },
	},
	{
		path: '/host-nanny-booking',
		component: HostNannyBookingContainer,
		meta: { transition: 'slide-right-to-left' },
	},
	{
		path: '/host-nanny-booking-response-tab-with-pop-up',
		component: HostNannyBookingResponsesTabWithPopUp,
		meta: { transition: 'slide-right-to-left' },
	},

	/*
		Host - Childminder
	*/
	{
		path: '/host-childminder',
		component: HostChildminderContainer,
		meta: { transition: 'slide-right-to-left' },
	},
	{
		path: '/host-childminder-booking',
		component: HostChildminderBookingContainer,
		meta: { transition: 'slide-right-to-left' },
	},

	/*
		Host - Au Pair
	*/
	{
		path: '/host-au-pair',
		component: HostAuPairContainer,
		meta: { transition: 'slide-right-to-left' },
	},

	/*
		Email Templates
	*/
	{
		path: '/email-verification',
		component: EmailVerificationTemplate,
		meta: { transition: 'slide-right-to-left' },
	},
	{
		path: '/email-password-reset',
		component: EmailPasswordResetTemplate,
		meta: { transition: 'slide-right-to-left' },
	},
	{
		path: '/email-payment-received',
		component: EmailPaymentReceivedTemplate,
		meta: { transition: 'slide-right-to-left' },
	},
	{
		path: '/email-payment-successful',
		component: EmailPaymentSuccessfulTemplate,
		meta: { transition: 'slide-right-to-left' },
	},
	{
		path: '/email-suggested-profile',
		component: EmailSuggestedProfileTemplate,
		meta: { transition: 'slide-right-to-left' },
	},
]
const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition
		} else {
			return { top: 0 }
		}
	},
})
export default router
