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
		<FamilyInformationForm class="max-w-450-for-dev-not-prod" />
		<OneTimeBooking class="max-w-450-for-dev-not-prod" />
		<RecurringBooking class="max-w-450-for-dev-not-prod" />
		<RequestNote class="max-w-450-for-dev-not-prod" />
		<OTBPriceBooking class="max-w-450-for-dev-not-prod" />
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
import FamilyInformationForm from './pages/FamilyInformationForm.vue'
import OneTimeBooking from './pages/OneTimeBooking.vue'
import RecurringBooking from './pages/RecurringBooking.vue'
import RequestNote from './pages/RequestNote.vue'
import OTBPriceBooking from './pages/OTBPriceBooking.vue'

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
		FamilyInformationForm,
		OneTimeBooking,
		RecurringBooking,
		RequestNote,
		OTBPriceBooking
	}
}
</script>