<template>
	<div class="flex flex-wrap grow gap-y-6 gap-x-4">
		<PaymentHistory class="max-w-450-for-dev-not-prod" />
		<PaymentDetails class="max-w-450-for-dev-not-prod" />
	</div>
</template>

<script>
import PaymentHistory from './pages/PaymentHistory.vue'
import PaymentDetails from './pages/PaymentDetails.vue'

export default {
	components: {
		PaymentHistory,
		PaymentDetails
	}
}
</script>