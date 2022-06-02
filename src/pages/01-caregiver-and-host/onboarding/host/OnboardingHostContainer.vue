<template>
	<div class="flex flex-wrap gap-y-6 sm:gap-x-4 w-screen h-screen">
		<OnboardingSlide01 class="max-w-450-for-dev-not-prod" />
		<OnboardingSlide02 class="max-w-450-for-dev-not-prod" />
		<OnboardingSlide03 class="max-w-450-for-dev-not-prod" />
		<OnboardingSlide04 class="max-w-450-for-dev-not-prod" />
	</div>
</template>

<script>
import OnboardingSlide01 from './slides/OnboardingSlide01.vue'
import OnboardingSlide02 from './slides/OnboardingSlide02.vue'
import OnboardingSlide03 from './slides/OnboardingSlide03.vue'
import OnboardingSlide04 from './slides/OnboardingSlide04.vue'

export default {
	components: {
		OnboardingSlide01,
		OnboardingSlide02,
		OnboardingSlide03,
		OnboardingSlide04
	}
}
</script>