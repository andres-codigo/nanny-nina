<template>
	<div class="flex flex-wrap grow gap-y-6 gap-x-4">
		<ResponsesWithContent class="max-w-450-for-dev-not-prod" />
		<Availability class="max-w-450-for-dev-not-prod" />
		<ReviewProfileBadges class="max-w-450-for-dev-not-prod" />
		<Matches class="max-w-450-for-dev-not-prod" />
		<SelectProfileBadges class="max-w-450-for-dev-not-prod" />
		<Review class="max-w-450-for-dev-not-prod" />
	</div>
</template>

<script>
import ResponsesWithContent from './pages/ResponsesWithContent.vue'
import Availability from './pages/Availability.vue'
import ReviewProfileBadges from './pages/ReviewProfileBadges.vue'
import Matches from './pages/Matches.vue'
import SelectProfileBadges from './pages/SelectProfileBadges.vue'
import Review from './pages/Review.vue'

export default {
	components: {
		ResponsesWithContent,
		Availability,
		ReviewProfileBadges,
		Matches,
		SelectProfileBadges,
		Review,
	},
}
</script>
