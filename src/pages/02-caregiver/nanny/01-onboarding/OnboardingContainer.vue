<template>
	<div class="flex flex-wrap grow gap-y-6 gap-x-4">
		<!-- 01 Set-up Steps -->
		<LocationPageTemplate title="Where are you currently?" class="max-w-450-for-dev-not-prod" />
		<PreApplicationMediaUploadPhotoPageTemplate class="max-w-450-for-dev-not-prod" />
		<HomeWithoutMenuTemplate class="max-w-450-for-dev-not-prod" />

		<!-- 02 Job Listings -->
		<JobListings class="max-w-450-for-dev-not-prod" />

		<!-- 03 Job Onboarding -->
		<ServiceLaunchStart class="max-w-450-for-dev-not-prod" />
		<OnboardingChecklist class="max-w-450-for-dev-not-prod" />
		<MediaUploadPhoto class="max-w-450-for-dev-not-prod" />
		<MediaUploadVideo class="max-w-450-for-dev-not-prod" />
		<ExperienceForm class="max-w-450-for-dev-not-prod" />
		<EducationForm class="max-w-450-for-dev-not-prod" />
		<HealthAndSafetyForm class="max-w-450-for-dev-not-prod" />
		<ReferenceForm class="max-w-450-for-dev-not-prod" />

		<!-- 04 Preferences Checklist -->
		<PreferencesChecklist class="max-w-450-for-dev-not-prod" />
		<AvailabilityWeeklyHours class="max-w-450-for-dev-not-prod" />
		<AvailabilityCalendar class="max-w-450-for-dev-not-prod" />
		<MatchingPreferences class="max-w-450-for-dev-not-prod" />
		<SuccessFurtherInformation class="max-w-450-for-dev-not-prod" />
	</div>
</template>
<script>
/* Location */
import LocationPageTemplate from '../../../00-duplicate-pages/LocationPageTemplate.vue' /* Template */
import PreApplicationMediaUploadPhotoPageTemplate from '../../../00-duplicate-pages/PreApplicationMediaUploadPhotoPageTemplate.vue' /* Template */
import HomeWithoutMenuTemplate from '../../../00-duplicate-pages/home/HomeWithoutMenuTemplate.vue' /* Template */

/* Job Listings */
import JobListings from './pages/02-job-listings/JobListings.vue'

/* Job Onboarding */
import ServiceLaunchStart from './pages/03-job-onboarding/ServiceLaunchStart.vue'
import OnboardingChecklist from './pages/03-job-onboarding/OnboardingChecklist.vue'
import MediaUploadPhoto from './pages/03-job-onboarding/MediaUploadPhoto.vue'
import MediaUploadVideo from './pages/03-job-onboarding/MediaUploadVideo.vue'
import EducationForm from './pages/03-job-onboarding/EducationForm.vue'
import ExperienceForm from './pages/03-job-onboarding/ExperienceForm.vue'
import HealthAndSafetyForm from './pages/03-job-onboarding/HealthAndSafetyForm.vue'
import ReferenceForm from './pages/03-job-onboarding/ReferenceForm.vue'

/* 04 Preferences Checklist */
import PreferencesChecklist from './pages/04-preferences/PreferencesChecklist.vue'
import AvailabilityWeeklyHours from './pages/04-preferences/AvailabilityWeeklyHours.vue'
import AvailabilityCalendar from './pages/04-preferences/AvailabilityCalendar.vue'
import MatchingPreferences from './pages/04-preferences/MatchingPreferences.vue'
import SuccessFurtherInformation from './pages/04-preferences/SuccessFurtherInformation.vue'

export default {
	components: {
		LocationPageTemplate,
		PreApplicationMediaUploadPhotoPageTemplate,
		HomeWithoutMenuTemplate,
		JobListings,
		ServiceLaunchStart,
		OnboardingChecklist,
		MediaUploadPhoto,
		MediaUploadVideo,
		EducationForm,
		ExperienceForm,
		HealthAndSafetyForm,
		ReferenceForm,
		PreferencesChecklist,
		AvailabilityWeeklyHours,
		AvailabilityCalendar,
		MatchingPreferences,
		SuccessFurtherInformation
	}
}
</script>