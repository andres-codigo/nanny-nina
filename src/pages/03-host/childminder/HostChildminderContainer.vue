<template>
	<div class="flex flex-wrap grow gap-y-6 gap-x-4">
		<PriceBooking class="max-w-450-for-dev-not-prod" />
	</div>
</template>

<script>
import PriceBooking from './pages/onboarding/PriceBooking.vue'

export default {
	components: {
		PriceBooking
	}
}
</script>