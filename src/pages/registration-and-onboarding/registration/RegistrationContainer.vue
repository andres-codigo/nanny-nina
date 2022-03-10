<script setup>
import Welcome01 from './pages/Welcome01.vue'
import SignUp02 from './pages/SignUp02.vue'
import VerificationMessage03 from './pages/VerificationMessage03.vue'
import Login04 from './pages/Login04.vue'
</script>

<template>
	<div class="flex flex-wrap gap-y-6 sm:gap-x-4 w-screen h-screen">
		<Welcome01 class="min-w-360-for-dev-not-prod max-w-450-for-dev-not-prod" />
		<SignUp02 class="min-w-360-for-dev-not-prod max-w-450-for-dev-not-prod" />
		<VerificationMessage03 class="min-w-360-for-dev-not-prod max-w-450-for-dev-not-prod" />
		<Login04 class="min-w-360-for-dev-not-prod max-w-450-for-dev-not-prod" />
	</div>
</template>
