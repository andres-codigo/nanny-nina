<template>
	<div class="flex flex-wrap grow gap-y-6 gap-x-4">
		<Information class="max-w-450-for-dev-not-prod" />
		<Description class="max-w-450-for-dev-not-prod" />
		<Booking class="max-w-450-for-dev-not-prod" />
	</div>
</template>

<script>
import Information from './pages/Information.vue'
import Description from './pages/Description.vue'
import Booking from './pages/Booking.vue'

export default {
	components: {
		Information,
		Description,
		Booking
	}
}
</script>