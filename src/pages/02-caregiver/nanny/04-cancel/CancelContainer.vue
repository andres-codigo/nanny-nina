<template>
	<div class="flex flex-wrap grow gap-y-6 gap-x-4">
		<ReasonForCancellation class="max-w-450-for-dev-not-prod" />
		<BookingNotMatched class="max-w-450-for-dev-not-prod" />
	</div>
</template>

<script>
import ReasonForCancellation from './pages/ReasonForCancellation.vue'
import BookingNotMatched from './pages/BookingNotMatched.vue'

export default {
	components: {
		ReasonForCancellation,
		BookingNotMatched
	}
}
</script>