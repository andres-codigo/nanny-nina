<template>
	<div class="flex flex-wrap grow gap-y-6 gap-x-4">
		<!-- <InvitesNoContent class="max-w-450-for-dev-not-prod" />
		<InvitesWithContent class="max-w-450-for-dev-not-prod" />
		<BookingMatch class="max-w-450-for-dev-not-prod" />
		<MatchesWithContentVersionOne class="max-w-450-for-dev-not-prod" />
		<MatchesWithContentVersionTwo class="max-w-450-for-dev-not-prod" />
		<WorkingHours class="max-w-450-for-dev-not-prod"  /> -->
		<Review class="max-w-450-for-dev-not-prod"  />
	</div>
</template>

<script>
import InvitesNoContent from './pages/InvitesNoContent.vue'
import InvitesWithContent from './pages/InvitesWithContent.vue'
import BookingMatch from './pages/BookingMatch.vue'
import MatchesWithContentVersionOne from './pages/MatchesWithContentVersionOne.vue'
import MatchesWithContentVersionTwo from './pages/MatchesWithContentVersionTwo.vue'
import WorkingHours from './pages/WorkingHours.vue'
import Review from './pages/Review.vue'

export default {
	components: {
		InvitesNoContent,
		InvitesWithContent,
		BookingMatch,
		MatchesWithContentVersionOne,
		MatchesWithContentVersionTwo,
		WorkingHours,
		Review
	}
}
</script>