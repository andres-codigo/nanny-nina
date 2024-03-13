<template>
	<div class="flex flex-wrap grow gap-y-6 gap-x-4">
		<MatchesWithContent class="max-w-450-for-dev-not-prod" />
	</div>
</template>

<script>
import MatchesWithContent from './pages/MatchesWithContent.vue'

export default {
	components: {
		MatchesWithContent,
	},
}
</script>
