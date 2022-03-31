<template>
	<div class="flex flex-wrap grow gap-y-6 gap-x-4">
		<!-- 01 Set-up Steps -->
		<Location class="max-w-450-for-dev-not-prod" />
		<PreApplicationMediaUploadPhoto class="max-w-450-for-dev-not-prod" />
		<HomeWithoutMenu class="max-w-450-for-dev-not-prod" />

		<!-- 02 Job Listings -->
		<JobListings class="max-w-450-for-dev-not-prod" />

		<!-- 03 Job Onboarding -->
		<ServiceLaunchStart class="max-w-450-for-dev-not-prod" />
		<OnboardingChecklist class="max-w-450-for-dev-not-prod" />
		<MediaUploadPhoto class="max-w-450-for-dev-not-prod" />
		<MediaUploadVideo class="max-w-450-for-dev-not-prod" />
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
import Location from './pages/01-set-up-steps/Location.vue'
import PreApplicationMediaUploadPhoto from './pages/01-set-up-steps/PreApplicationMediaUploadPhoto.vue'
import HomeWithoutMenu from '../../childminder-and-nanny/pages/HomeWithoutMenu.vue'

/* Job Listings */
import JobListings from './pages/02-job-listings/JobListings.vue'

/* Job Onboarding */
import ServiceLaunchStart from './pages/03-job-onboarding/ServiceLaunchStart.vue'
import OnboardingChecklist from './pages/03-job-onboarding/OnboardingChecklist.vue'
import MediaUploadPhoto from './pages/03-job-onboarding/MediaUploadPhoto.vue'
import MediaUploadVideo from './pages/03-job-onboarding/MediaUploadVideo.vue'
import EducationForm from './pages/03-job-onboarding/EducationForm.vue'
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
		Location,
		PreApplicationMediaUploadPhoto,
		HomeWithoutMenu,
		JobListings,
		ServiceLaunchStart,
		OnboardingChecklist,
		MediaUploadPhoto,
		MediaUploadVideo,
		EducationForm,
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