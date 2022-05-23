<template>
	<div class="flex flex-wrap grow gap-y-6 gap-x-4">
		<AccountSetUpAdd class="max-w-450-for-dev-not-prod" />
		<AddPayment class="max-w-450-for-dev-not-prod" />
		<AccountSetUpEdit class="max-w-450-for-dev-not-prod" />
	</div>
</template>

<script>
import AccountSetUpAdd from './pages/AccountSetUpAdd.vue'
import AddPayment from './pages/AddPayment.vue'
import AccountSetUpEdit from './pages/AccountSetUpEdit.vue'

export default {
	components: {
		AccountSetUpAdd,
		AddPayment,
		AccountSetUpEdit,
	}
}
</script>