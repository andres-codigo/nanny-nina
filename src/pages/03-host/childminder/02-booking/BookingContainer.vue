<template>
	<div class="flex flex-wrap grow gap-y-6 gap-x-4">
		<ResponsesWithContent class="max-w-450-for-dev-not-prod" />
		<CandidatesWithContent class="max-w-450-for-dev-not-prod" />
		<MatchesWithContent class="max-w-450-for-dev-not-prod" />
	</div>
</template>

<script>
import ResponsesWithContent from './pages/ResponsesWithContent.vue'
import CandidatesWithContent from './pages/CandidatesWithContent.vue'
import MatchesWithContent from './pages/MatchesWithContent.vue'

export default {
	components: {
		ResponsesWithContent,
		CandidatesWithContent,
		MatchesWithContent
	}
}
</script>