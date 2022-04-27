<template>
	<div class="flex flex-wrap grow gap-y-6 gap-x-4">
		<Reference class="max-w-450-for-dev-not-prod" />
		<Home class="max-w-450-for-dev-not-prod" />
		<MediaUploadPhoto class="max-w-450-for-dev-not-prod" />
		<TravelDocument class="max-w-450-for-dev-not-prod" />
		<PersonalityTest class="max-w-450-for-dev-not-prod" />
		<ParentProfile class="max-w-450-for-dev-not-prod" />
	</div>
</template>

<script>
import Reference from './pages/02-job-onboarding/Reference.vue'
import Home from './pages/02-job-onboarding/Home.vue'
import MediaUploadPhoto from './pages/02-job-onboarding/MediaUploadPhoto.vue'
import TravelDocument from './pages/02-job-onboarding/TravelDocument.vue'
import PersonalityTest from './pages/02-job-onboarding/PersonalityTest.vue'
import ParentProfile from './pages/02-job-onboarding/ParentProfile.vue'

export default {
	components: {
		Reference,
		Home,
		MediaUploadPhoto,
		TravelDocument,
		PersonalityTest,
		ParentProfile
	}
}
</script>