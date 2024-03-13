<template>
	<div class="flex flex-wrap gap-y-6 sm:gap-x-4 w-screen h-screen">
		<Welcome
			class="min-w-360-for-dev-not-prod max-w-450-for-dev-not-prod"
		/>
		<SignUpOptions
			class="min-w-360-for-dev-not-prod max-w-450-for-dev-not-prod"
		/>
		<SignUp class="min-w-360-for-dev-not-prod max-w-450-for-dev-not-prod" />
		<VerifyNumber
			class="min-w-360-for-dev-not-prod max-w-450-for-dev-not-prod"
		/>
		<Login class="min-w-360-for-dev-not-prod max-w-450-for-dev-not-prod" />
	</div>
</template>

<script>
import Welcome from './pages/Welcome.vue'
import SignUpOptions from './pages/SignUpOptions.vue'
import SignUp from './pages/SignUp.vue'
import VerifyNumber from './pages/VerifyNumber.vue'
import Login from './pages/Login.vue'

export default {
	components: {
		Welcome,
		SignUpOptions,
		SignUp,
		VerifyNumber,
		Login,
	},
}
</script>
