<template>
	<div class="flex flex-wrap grow gap-y-6 gap-x-4">
		<ProfileVersion01 class="max-w-450-for-dev-not-prod" />
		<ProfileVersion02 class="max-w-450-for-dev-not-prod" />
		<ProfileReviews class="max-w-450-for-dev-not-prod" />
		<AboutYou class="max-w-450-for-dev-not-prod" />
		<Motivation class="max-w-450-for-dev-not-prod" />
		<ApplicationSuccessConfirmation class="max-w-450-for-dev-not-prod" />
	</div>
</template>

<script>
import ProfileVersion01 from './pages/ProfileVersion01.vue'
import ProfileVersion02 from './pages/ProfileVersion02.vue'
import ProfileReviews from './pages/ProfileReviews.vue'
import AboutYou from './pages/AboutYou.vue'
import Motivation from './pages/Motivation.vue'
import ApplicationSuccessConfirmation from './pages/ApplicationSuccessConfirmation.vue'

export default {
	components: {
		ProfileVersion01,
		ProfileVersion02,
		ProfileReviews,
		AboutYou,
		Motivation,
		ApplicationSuccessConfirmation
	}
}
</script>