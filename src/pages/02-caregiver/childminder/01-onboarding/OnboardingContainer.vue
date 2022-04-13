<template>
	<div class="flex flex-wrap grow gap-y-6 gap-x-4">
		<!-- 01 Set-up Steps -->
		<Background title="Where are you currently?" class="max-w-450-for-dev-not-prod" />

		<!-- 02 Preferences Checklist -->
		<Availability class="max-w-450-for-dev-not-prod" />
		<MatchingPreferences class="max-w-450-for-dev-not-prod" />
	</div>
</template>

<script>
/* 01 Onboarding */
import Background from '../01-onboarding/pages/01-onboarding/Background.vue'

/* 02 Preferences Checklist */
import Availability from './pages/02-preferences/Availability.vue'
import MatchingPreferences from './pages/02-preferences/MatchingPreferences.vue'

export default {
	components: {
		Background,
		Availability,
		MatchingPreferences
	}
}
</script>