<template>
	<div class="flex flex-wrap grow gap-y-6 gap-x-4">
		<Reference class="max-w-450-for-dev-not-prod" />
		<NewRequest class="max-w-450-for-dev-not-prod" />
		<PersonalityTest class="max-w-450-for-dev-not-prod" />
		<SearchPreferences class="max-w-450-for-dev-not-prod" />
		<IntakeCall class="max-w-450-for-dev-not-prod" />
	</div>
</template>

<script>
import NewRequest from './pages/onboarding/NewRequest.vue'
import Reference from './pages/onboarding/Reference.vue'
import PersonalityTest from './pages/onboarding/PersonalityTest.vue'
import SearchPreferences from './pages/onboarding/SearchPreferences.vue'
import IntakeCall from './pages/onboarding/IntakeCall.vue'

export default {
	components: {
		NewRequest,
		Reference,
		PersonalityTest,
		SearchPreferences,
		IntakeCall
	}
}
</script>