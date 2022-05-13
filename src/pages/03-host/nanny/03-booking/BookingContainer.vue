<template>
	<div class="flex flex-wrap grow gap-y-6 gap-x-4">
		<ResponsesWithContent class="max-w-450-for-dev-not-prod" />
		<ProfileBadges class="max-w-450-for-dev-not-prod" />
		<Availability class="max-w-450-for-dev-not-prod" />
	</div>
</template>

<script>
import ResponsesWithContent from './pages/ResponsesWithContent.vue'
import ProfileBadges from './pages/ProfileBadges.vue'
import Availability from './pages/Availability.vue'

export default {
	components: {
		ResponsesWithContent,
		ProfileBadges,
		Availability
	}
}
</script>