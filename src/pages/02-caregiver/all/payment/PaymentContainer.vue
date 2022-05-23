<template>
	<div class="flex flex-wrap grow gap-y-6 gap-x-4">
		<Account class="max-w-450-for-dev-not-prod" />
		<AddPayment class="max-w-450-for-dev-not-prod" />
	</div>
</template>

<script>
import Account from './pages/Account.vue'
import AddPayment from './pages/AddPayment.vue'

export default {
	components: {
		Account,
		AddPayment
	}
}
</script>