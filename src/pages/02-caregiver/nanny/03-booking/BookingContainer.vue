<template>
	<div class="flex flex-wrap grow gap-y-6 gap-x-4">
		<InvitesNoContent class="max-w-450-for-dev-not-prod" />
		<InvitesWithContent class="max-w-450-for-dev-not-prod" />
		<BookingMatch class="max-w-450-for-dev-not-prod" />
	</div>
</template>

<script>
import InvitesNoContent from './pages/InvitesNoContent.vue'
import InvitesWithContent from './pages/InvitesWithContent.vue'
import BookingMatch from './pages/BookingMatch.vue'

export default {
	components: {
		InvitesNoContent,
		InvitesWithContent,
		BookingMatch
	}
}
</script>