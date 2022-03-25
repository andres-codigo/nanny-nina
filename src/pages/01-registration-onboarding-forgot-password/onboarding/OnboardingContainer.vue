<template>
	<div class="flex flex-wrap gap-y-6 sm:gap-x-4 w-screen h-screen">
		<OnboardingSlideOne class="max-w-450-for-dev-not-prod" />
		<OnboardingSlideTwo class="max-w-450-for-dev-not-prod" />
		<OnboardingSlideThree class="max-w-450-for-dev-not-prod" />
		<OnboardingSlideFour class="max-w-450-for-dev-not-prod" />
	</div>
</template>

<script>
import OnboardingSlideOne from './slides/OnboardingSlideOne.vue'
import OnboardingSlideTwo from './slides/OnboardingSlideTwo.vue'
import OnboardingSlideThree from './slides/OnboardingSlideThree.vue'
import OnboardingSlideFour from './slides/OnboardingSlideFour.vue'

export default {
	components: {
		OnboardingSlideOne,
		OnboardingSlideTwo,
		OnboardingSlideThree,
		OnboardingSlideFour
	}
}
</script>