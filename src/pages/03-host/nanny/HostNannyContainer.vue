<template>
	<div class="flex flex-wrap grow gap-y-6 gap-x-4">
		<LocationPageTemplate title="What's your address?" class="max-w-450-for-dev-not-prod" />
		<PreApplicationMediaUploadPhotoPageTemplate class="max-w-450-for-dev-not-prod" />
		<HomeWithoutMenu class="max-w-450-for-dev-not-prod" />
		<NewRequest class="max-w-450-for-dev-not-prod" />
		<JobListings class="max-w-450-for-dev-not-prod" />
		<NannyProfile class="max-w-450-for-dev-not-prod" />
	</div>
</template>

<script>
import LocationPageTemplate from '../../00-duplicate-pages/LocationPageTemplate.vue' /* Template */
import PreApplicationMediaUploadPhotoPageTemplate from '../../00-duplicate-pages/PreApplicationMediaUploadPhotoPageTemplate.vue' /* Template */
import HomeWithoutMenu from './pages/HomeWithoutMenu.vue'
import NewRequest from './pages/NewRequest.vue'
import JobListings from './pages/JobListings.vue'
import NannyProfile from './pages/NannyProfile.vue'

export default {
	components: {
		LocationPageTemplate,
		PreApplicationMediaUploadPhotoPageTemplate,
		HomeWithoutMenu,
		NewRequest,
		JobListings,
		NannyProfile
	}
}
</script>