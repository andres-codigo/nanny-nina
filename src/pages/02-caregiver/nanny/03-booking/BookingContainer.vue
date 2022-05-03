<template>
	<div class="flex flex-wrap grow gap-y-6 gap-x-4">
		<MatchesNoContent class="max-w-450-for-dev-not-prod" />
		<MatchesWithContent class="max-w-450-for-dev-not-prod" />
	</div>
</template>

<script>
import MatchesNoContent from './pages/MatchesNoContent.vue'
import MatchesWithContent from './pages/MatchesWithContent.vue'

export default {
	components: {
		MatchesNoContent,
		MatchesWithContent,
	}
}
</script>