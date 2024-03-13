<template>
	<div class="flex flex-wrap grow gap-y-6 gap-x-4">
		<AccountSetUpAdd class="max-w-450-for-dev-not-prod" />
		<AddPayment class="max-w-450-for-dev-not-prod" />
		<AccountSetUpEdit class="max-w-450-for-dev-not-prod" />
		<Earnings class="max-w-450-for-dev-not-prod" />
		<Referrals class="max-w-450-for-dev-not-prod" />
		<Promotions class="max-w-450-for-dev-not-prod" />
		<PromotionsWithPopUp class="max-w-450-for-dev-not-prod" />
		<PaymentHistory class="max-w-450-for-dev-not-prod" />
		<PaymentDetails class="max-w-450-for-dev-not-prod" />
	</div>
</template>

<script>
import AccountSetUpAdd from './pages/AccountSetUpAdd.vue'
import AddPayment from './pages/AddPayment.vue'
import AccountSetUpEdit from './pages/AccountSetUpEdit.vue'
import Earnings from './pages/Earnings.vue'
import Referrals from './pages/Referrals.vue'
import Promotions from './pages/Promotions.vue'
import PromotionsWithPopUp from './pages/pop-ups/PromotionsWithPopUp.vue'
import PaymentHistory from './pages/PaymentHistory.vue'
import PaymentDetails from './pages/PaymentDetails.vue'

export default {
	components: {
		AccountSetUpAdd,
		AddPayment,
		AccountSetUpEdit,
		Earnings,
		Referrals,
		Promotions,
		PromotionsWithPopUp,
		PaymentHistory,
		PaymentDetails,
	},
}
</script>
