<template>
	<div class="flex flex-wrap grow gap-y-6 gap-x-4">
		<NewRequest class="max-w-450-for-dev-not-prod" />
		<PriceBooking class="max-w-450-for-dev-not-prod" />
	</div>
</template>

<script>
import NewRequest from './pages/NewRequest.vue'
import PriceBooking from './pages/PriceBooking.vue'

export default {
	components: {
		NewRequest,
		PriceBooking,
	},
}
</script>
