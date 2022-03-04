<script setup>
import ForgotPassword01 from './pages/ForgotPassword01.vue'
import FPError02 from './pages/FPError02.vue'
import FPExpiredLink03 from './pages/FPExpiredLink03.vue'
import FPNewPassword04 from './pages/FPNewPassword04.vue'
import FPPasswordUpdated05 from './pages/FPPasswordUpdated05.vue'

</script>

<template>
	<div class="flex flex-wrap grow gap-y-6 sm:gap-x-4 w-full h-full bg-gray-200">
		<ForgotPassword01 class="max-w-450-for-dev-not-prod" />
		<FPError02 class="max-w-450-for-dev-not-prod" />
		<FPExpiredLink03 class="max-w-450-for-dev-not-prod" />
		<FPNewPassword04 class="grow max-w-450-for-dev-not-prod" />
		<FPPasswordUpdated05 class="grow max-w-450-for-dev-not-prod" />
	</div>
</template>
