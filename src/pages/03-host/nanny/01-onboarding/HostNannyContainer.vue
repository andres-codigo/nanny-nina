<template>
	<div class="flex flex-wrap grow gap-y-6 gap-x-4">
		<LocationPageTemplate title="What's your address?" class="max-w-450-for-dev-not-prod" />
		<PreApplicationMediaUploadPhotoPageTemplate class="max-w-450-for-dev-not-prod" />
		<HomeWithoutMenu class="max-w-450-for-dev-not-prod" />
		<ServiceOptions class="max-w-450-for-dev-not-prod" />
		<JobListings class="max-w-450-for-dev-not-prod" />
		<NannyProfile class="max-w-450-for-dev-not-prod" />
		<Availability class="max-w-450-for-dev-not-prod" />
		<Ooops class="max-w-450-for-dev-not-prod" />
		<NewRequest class="max-w-450-for-dev-not-prod" />
		<BasicInformationForm class="max-w-450-for-dev-not-prod" />
		<OneTimeBooking class="max-w-450-for-dev-not-prod" />
		<RecurringBooking class="max-w-450-for-dev-not-prod" />
		<RequestNote class="max-w-450-for-dev-not-prod" />
		<PriceBooking class="max-w-450-for-dev-not-prod" />
		<Preferences class="max-w-450-for-dev-not-prod" />
		<TitleBooking class="max-w-450-for-dev-not-prod" />
		<VerifyAccount title="Update address?" buttonText="Save &amp; Continue" class="max-w-450-for-dev-not-prod" />
		<RequestOverview class="max-w-450-for-dev-not-prod" />
		<BookingConfirmation class="max-w-450-for-dev-not-prod" />
	</div>
</template>

<script>
import LocationPageTemplate from '../../../00-duplicate-pages/LocationPageTemplate.vue' /* Template */
import PreApplicationMediaUploadPhotoPageTemplate from '../../../00-duplicate-pages/PreApplicationMediaUploadPhotoPageTemplate.vue' /* Template */
import HomeWithoutMenu from './pages/onboarding/HomeWithoutMenu.vue'
import ServiceOptions from './pages/onboarding/ServiceOptions.vue'
import JobListings from './pages/onboarding/JobListings.vue'
import NannyProfile from './pages/onboarding/NannyProfile.vue'
import Availability from './pages/onboarding/Availability.vue'
import Ooops from './pages/onboarding/Ooops.vue'
import NewRequest from './pages/onboarding/NewRequest.vue'
import BasicInformationForm from './pages/onboarding/BasicInformationForm.vue'
import OneTimeBooking from './pages/onboarding/OneTimeBooking.vue'
import RecurringBooking from './pages/onboarding/RecurringBooking.vue'
import RequestNote from './pages/onboarding/RequestNote.vue'
import PriceBooking from './pages/onboarding/PriceBooking.vue'
import Preferences from './pages/onboarding/Preferences.vue'
import TitleBooking from './pages/onboarding/TitleBooking.vue'
import VerifyAccount from './pages/onboarding/VerifyAccount.vue'
import RequestOverview from './pages/request-overview/RequestOverview.vue'
import BookingConfirmation from './pages/onboarding/BookingConfirmation.vue'

export default {
	components: {
		LocationPageTemplate,
		PreApplicationMediaUploadPhotoPageTemplate,
		HomeWithoutMenu,
		ServiceOptions,
		JobListings,
		NannyProfile,
		Availability,
		Ooops,
		NewRequest,
		BasicInformationForm,
		OneTimeBooking,
		RecurringBooking,
		RequestNote,
		PriceBooking,
		Preferences,
		TitleBooking,
		VerifyAccount,
		RequestOverview,
		BookingConfirmation
	}
}
</script>