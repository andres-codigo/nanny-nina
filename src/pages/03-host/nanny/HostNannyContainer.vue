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
		<UpdateAddress title="Update address?" buttonText="Save &amp; Continue" class="max-w-450-for-dev-not-prod" />
		<RequestOverview class="max-w-450-for-dev-not-prod" />
		<RequestOverviewFoldContent class="max-w-450-for-dev-not-prod" />
		<BookingConfirmation class="max-w-450-for-dev-not-prod" />
	</div>
</template>

<script>
import LocationPageTemplate from '../../00-duplicate-pages/LocationPageTemplate.vue' /* Template */
import PreApplicationMediaUploadPhotoPageTemplate from '../../00-duplicate-pages/PreApplicationMediaUploadPhotoPageTemplate.vue' /* Template */
import HomeWithoutMenu from './pages/HomeWithoutMenu.vue'
import ServiceOptions from './pages/ServiceOptions.vue'
import JobListings from './pages/JobListings.vue'
import NannyProfile from './pages/NannyProfile.vue'
import Availability from './pages/Availability.vue'
import Ooops from './pages/Ooops.vue'
import NewRequest from './pages/NewRequest.vue'
import BasicInformationForm from './pages/BasicInformationForm.vue'
import OneTimeBooking from './pages/OneTimeBooking.vue'
import RecurringBooking from './pages/RecurringBooking.vue'
import RequestNote from './pages/RequestNote.vue'
import PriceBooking from './pages/PriceBooking.vue'
import Preferences from './pages/Preferences.vue'
import TitleBooking from './pages/TitleBooking.vue'
import UpdateAddress from './pages/UpdateAddress.vue'
import RequestOverview from './request-overview/RequestOverview.vue'
import RequestOverviewFoldContent from './request-overview/fold/RequestOverviewFoldContent.vue'
import BookingConfirmation from './pages/BookingConfirmation.vue'

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
		UpdateAddress,
		RequestOverview,
		RequestOverviewFoldContent,
		BookingConfirmation
	}
}
</script>