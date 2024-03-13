<template>
	<div class="flex flex-wrap grow gap-y-6 gap-x-4">
		<ServicesOptions class="max-w-450-for-dev-not-prod" />
		<BookingMatch class="max-w-450-for-dev-not-prod" />
		<MatchesWithContentVersionOne class="max-w-450-for-dev-not-prod" />
		<MatchesWithContentVersionTwo class="max-w-450-for-dev-not-prod" />
		<WorkingHours class="max-w-450-for-dev-not-prod" />
		<Review class="max-w-450-for-dev-not-prod" />
		<ApplicationsPendingWithContent class="max-w-450-for-dev-not-prod" />
		<ApplicationsUnmatchedWithContent class="max-w-450-for-dev-not-prod" />
	</div>
</template>

<script>
import ServicesOptions from './pages/ServicesOptions.vue'
import BookingMatch from './pages/BookingMatch.vue'
import MatchesWithContentVersionOne from './pages/MatchesWithContentVersionOne.vue'
import MatchesWithContentVersionTwo from './pages/MatchesWithContentVersionTwo.vue'
import WorkingHours from './pages/WorkingHours.vue'
import Review from './pages/Review.vue'
import ApplicationsPendingWithContent from './pages/ApplicationsPendingWithContent.vue'
import ApplicationsUnmatchedWithContent from './pages/ApplicationsUnmatchedWithContent.vue'

export default {
	components: {
		ServicesOptions,
		BookingMatch,
		MatchesWithContentVersionOne,
		MatchesWithContentVersionTwo,
		WorkingHours,
		Review,
		ApplicationsPendingWithContent,
		ApplicationsUnmatchedWithContent,
	},
}
</script>
