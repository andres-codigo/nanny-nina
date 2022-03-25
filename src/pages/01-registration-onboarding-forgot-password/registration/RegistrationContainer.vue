<template>
	<div class="flex flex-wrap gap-y-6 sm:gap-x-4 w-screen h-screen">
		<Welcome01 class="min-w-360-for-dev-not-prod max-w-450-for-dev-not-prod" />
		<SignUp02 class="min-w-360-for-dev-not-prod max-w-450-for-dev-not-prod" />

		<StepOne01 class="min-w-360-for-dev-not-prod max-w-450-for-dev-not-prod" />
		<StepOne02 class="min-w-360-for-dev-not-prod max-w-450-for-dev-not-prod" />
		<StepOne03 class="min-w-360-for-dev-not-prod max-w-450-for-dev-not-prod" />

		<Login04 class="min-w-360-for-dev-not-prod max-w-450-for-dev-not-prod" />
	</div>
</template>

<script>
import Welcome01 from './pages/Welcome01.vue'
import SignUp02 from './pages/SignUp02.vue'

import StepOne01 from './pages/verification/Step01.vue'
import StepOne02 from './pages/verification/Step02.vue'
import StepOne03 from './pages/verification/Step03.vue'

import Login04 from './pages/Login04.vue'

export default {
	components: {
		Welcome01,
		SignUp02,
		StepOne01,
		StepOne02,
		StepOne03,
		Login04
	}
}
</script>