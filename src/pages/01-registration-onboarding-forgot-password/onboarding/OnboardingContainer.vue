<script setup>
import OnboardingSlideOne from './slides/OnboardingSlideOne.vue'
import OnboardingSlideTwo from './slides/OnboardingSlideTwo.vue'
</script>

<template>
	<div class="flex flex-wrap gap-y-6 sm:gap-x-4 w-screen h-screen">
		<OnboardingSlideOne class="max-w-450-for-dev-not-prod" />
		<OnboardingSlideTwo class="max-w-450-for-dev-not-prod" />
	</div>
</template>
