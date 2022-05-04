<template>
	<div class="flex flex-wrap grow gap-y-6 gap-x-4">
		<MatchesNoContent class="max-w-450-for-dev-not-prod" />
		<InvitesWithContent class="max-w-450-for-dev-not-prod" />
	</div>
</template>

<script>
import MatchesNoContent from './pages/MatchesNoContent.vue'
import InvitesWithContent from './pages/InvitesWithContent.vue'

export default {
	components: {
		MatchesNoContent,
		InvitesWithContent,
	}
}
</script>