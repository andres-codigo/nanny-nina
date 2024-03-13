<template>
	<div class="flex flex-wrap grow gap-y-6 gap-x-4">
		<Home class="max-w-450-for-dev-not-prod" />
		<MediaUploadPhoto class="max-w-450-for-dev-not-prod" />
		<TravelDocument class="max-w-450-for-dev-not-prod" />
		<ParentProfile class="max-w-450-for-dev-not-prod" />
	</div>
</template>

<script>
import Home from './pages/02-job-onboarding/Home.vue'
import MediaUploadPhoto from './pages/02-job-onboarding/MediaUploadPhoto.vue'
import TravelDocument from './pages/02-job-onboarding/TravelDocument.vue'
import ParentProfile from './pages/02-job-onboarding/ParentProfile.vue'

export default {
	components: {
		Home,
		MediaUploadPhoto,
		TravelDocument,
		ParentProfile,
	},
}
</script>
