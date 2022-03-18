<script setup>
/* Start */
import ServiceLaunchStartScreen01 from './pages/ServiceLaunchStartScreen01.vue'

/* Checklist Landing Page */
import ChecklistLandingPage02 from './pages/ChecklistLandingPage02.vue'

/* 01 Media Upload Checklist */
import MediaUploadPhoto03 from './pages/01-media-upload/MediaUploadPhoto03.vue'
import MediaUploadVideo04 from './pages/01-media-upload/MediaUploadVideo04.vue'

/* 02 Residence Card/Id Checklist */
import ResidenceCardOrID05 from './pages/02-residence-card-id/ResidenceCardOrID05.vue'

/* 03 Onboarding Form Checklist */
import AddressForm06 from './pages/03-onboarding-form/AddressForm06.vue'
import EducationForm07 from './pages/03-onboarding-form/EducationForm07.vue'
import HealthAndSafetyForm08 from './pages/03-onboarding-form/HealthAndSafetyForm08.vue'
import ReferenceForm09 from './pages/03-onboarding-form/ReferenceForm09.vue'

/* 04 Preferences Checklist */
import PreferencesLaunchScreen10 from './pages/04-preferences/PreferencesLaunchScreen10.vue'
import ChecklistLandingPage11 from './pages/04-preferences/ChecklistLandingPage11.vue'
import AvailabilityWeeklyHours12 from './pages/04-preferences/AvailabilityWeeklyHours12.vue'
import AvailabilityCalendar13 from './pages/04-preferences/AvailabilityCalendar13.vue'
import MatchingPreferences14 from './pages/04-preferences/MatchingPreferences14.vue'

/* End */
import ServiceLaunchEndScreen15 from './pages/ServiceLaunchEndScreen15.vue'
</script>

<template>
	<div class="flex flex-wrap grow gap-y-6 gap-x-4">
		<!-- Start -->
		<ServiceLaunchStartScreen01 class="max-w-450-for-dev-not-prod" />

		<!-- Checklist Landing Page -->
		<ChecklistLandingPage02 class="max-w-450-for-dev-not-prod" />

		<!-- 01 Media Upload Checklist -->
		<MediaUploadPhoto03 class="max-w-450-for-dev-not-prod" />
		<MediaUploadVideo04 class="max-w-450-for-dev-not-prod" />

		<!-- 02 Residence Card/Id Checklist -->
		<ResidenceCardOrID05 class="max-w-450-for-dev-not-prod" />

		<!-- 03 Onboarding Form Checklist -->
		<AddressForm06 class="max-w-450-for-dev-not-prod" />
		<EducationForm07 class="max-w-450-for-dev-not-prod" />
		<HealthAndSafetyForm08 class="max-w-450-for-dev-not-prod" />
		<ReferenceForm09 class="max-w-450-for-dev-not-prod" />

		<!-- 04 Preferences Checklist -->
		<PreferencesLaunchScreen10 class="max-w-450-for-dev-not-prod" />
		<ChecklistLandingPage11 class="max-w-450-for-dev-not-prod" />
		<AvailabilityWeeklyHours12 class="max-w-450-for-dev-not-prod" />
		<AvailabilityCalendar13 class="max-w-450-for-dev-not-prod" />
		<MatchingPreferences14 class="max-w-450-for-dev-not-prod" />

		<!-- End -->
		<ServiceLaunchEndScreen15 class="max-w-450-for-dev-not-prod" />
	</div>
</template>