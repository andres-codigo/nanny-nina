<script setup>
import ForgotPassword01 from './pages/ForgotPassword01.vue'
import ForgotPasswordError02 from './pages/ForgotPasswordError02.vue'
</script>

<template>
	<div class="flex flex-wrap gap-y-6 sm:gap-x-4 bg-gray-200 w-screen h-screen">
		<ForgotPassword01 class="max-w-450-for-dev-not-prod" />
		<ForgotPasswordError02 class="max-w-450-for-dev-not-prod" />
	</div>
</template>
