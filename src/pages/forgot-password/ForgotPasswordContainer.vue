<script setup>
import ForgotPassword01 from './pages/ForgotPassword01.vue'
import ForgotPasswordError02 from './pages/ForgotPasswordError02.vue'
import ForgotPasswordExpiredLink03 from './pages/ForgotPasswordExpiredLink03.vue'
</script>

<template>
	<div class="flex flex-wrap gap-y-6 sm:gap-x-4 w-full h-full bg-gray-200">
		<ForgotPassword01 class="max-w-450-for-dev-not-prod" />
		<ForgotPasswordError02 class="max-w-450-for-dev-not-prod" />
		<ForgotPasswordExpiredLink03 class="max-w-450-for-dev-not-prod" />
	</div>
</template>
