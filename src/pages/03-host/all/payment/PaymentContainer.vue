<template>
	<div class="flex flex-wrap grow gap-y-6 gap-x-4">
		<PaymentHistory class="max-w-450-for-dev-not-prod" />
		<PaymentDetailsRecurring class="max-w-450-for-dev-not-prod" />
		<PaymentDetailsVersionOne class="max-w-450-for-dev-not-prod" />
		<PaymentDetailsVersionTwo class="max-w-450-for-dev-not-prod" />
		<PaymentDetailsVersionThree class="max-w-450-for-dev-not-prod" />
		<PaymentRewardNoPoints class="max-w-450-for-dev-not-prod" />
		<PaymentRewardWithPoints class="max-w-450-for-dev-not-prod" />
	</div>
</template>

<script>
import PaymentHistory from './pages/PaymentHistory.vue'
import PaymentDetailsRecurring from './pages/PaymentDetailsRecurring.vue'
import PaymentDetailsVersionOne from './pages/PaymentDetailsVersionOne.vue'
import PaymentDetailsVersionTwo from './pages/PaymentDetailsVersionTwo.vue'
import PaymentDetailsVersionThree from './pages/PaymentDetailsVersionThree.vue'
import PaymentRewardNoPoints from './pages/PaymentRewardNoPoints.vue'
import PaymentRewardWithPoints from './pages/PaymentRewardWithPoints.vue'

export default {
	components: {
		PaymentHistory,
		PaymentDetailsRecurring,
		PaymentDetailsVersionOne,
		PaymentDetailsVersionTwo,
		PaymentDetailsVersionThree,
		PaymentRewardNoPoints,
		PaymentRewardWithPoints
	}
}
</script>