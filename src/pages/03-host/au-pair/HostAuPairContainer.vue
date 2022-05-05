<template>
	<div class="flex flex-wrap grow gap-y-6 gap-x-4">
		<NewRequest class="max-w-450-for-dev-not-prod" />
		<PersonalityTest class="max-w-450-for-dev-not-prod" />
		<SearchPreferencesPartOne class="max-w-450-for-dev-not-prod" />
		<SearchPreferencesPartTwo class="max-w-450-for-dev-not-prod" />
		<IntakeCall class="max-w-450-for-dev-not-prod" />
	</div>
</template>

<script>
import NewRequest from './pages/onboarding/NewRequest.vue'
import PersonalityTest from './pages/onboarding/PersonalityTest.vue'
import SearchPreferencesPartOne from './pages/onboarding/SearchPreferencesPartOne.vue'
import SearchPreferencesPartTwo from './pages/onboarding/SearchPreferencesPartTwo.vue'
import IntakeCall from './pages/onboarding/IntakeCall.vue'

export default {
	components: {
		NewRequest,
		PersonalityTest,
		SearchPreferencesPartOne,
		SearchPreferencesPartTwo,
		IntakeCall
	}
}
</script>