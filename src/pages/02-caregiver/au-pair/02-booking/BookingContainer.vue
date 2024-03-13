<template>
	<div class="flex flex-wrap grow gap-y-6 gap-x-4">
		<ResidenceIDUploading class="max-w-450-for-dev-not-prod" />
		<WeeklySchedule class="max-w-450-for-dev-not-prod" />
	</div>
</template>

<script>
import ResidenceIDUploading from './pages/ResidenceIDUploading.vue'
import WeeklySchedule from './pages/WeeklySchedule.vue'

export default {
	components: {
		ResidenceIDUploading,
		WeeklySchedule,
	},
}
</script>
