<template>
	<div class="flex flex-wrap grow gap-y-6 gap-x-4">
		<InvitesNoContent class="max-w-450-for-dev-not-prod" />
		<InvitesWithContent class="max-w-450-for-dev-not-prod" />
		<BookingMatch class="max-w-450-for-dev-not-prod" />
		<MatchesNoContent class="max-w-450-for-dev-not-prod" />
		<MatchesWithContent class="max-w-450-for-dev-not-prod" />
	</div>
</template>

<script>
import InvitesNoContent from './pages/InvitesNoContent.vue'
import InvitesWithContent from './pages/InvitesWithContent.vue'
import BookingMatch from './pages/BookingMatch.vue'
import MatchesNoContent from './pages/MatchesNoContent.vue'
import MatchesWithContent from './pages/MatchesWithContent.vue'

export default {
	components: {
		InvitesNoContent,
		InvitesWithContent,
		BookingMatch,
		MatchesNoContent,
		MatchesWithContent,
	}
}
</script>