<template>
	<div class="flex flex-wrap grow gap-y-6 sm:gap-x-4 w-full h-full">
		<FPVerificationMessage01 class="min-w-360-for-dev-not-prod max-w-450-for-dev-not-prod" />
		<FPRequestLink02 class="max-w-450-for-dev-not-prod" />
		<FPError03 class="max-w-450-for-dev-not-prod" />
		<FPExpiredLink04 class="max-w-450-for-dev-not-prod" />
		<FPNewPassword05 class="w-full max-w-450-for-dev-not-prod" />
		<FPPasswordUpdated06 class="w-full max-w-450-for-dev-not-prod" />
	</div>
</template>

<script>
import FPVerificationMessage01 from './pages/FPVerificationMessage01.vue'
import FPRequestLink02 from './pages/FPRequestLink02.vue'
import FPError03 from './pages/FPError03.vue'
import FPExpiredLink04 from './pages/FPExpiredLink04.vue'
import FPNewPassword05 from './pages/FPNewPassword05.vue'
import FPPasswordUpdated06 from './pages/FPPasswordUpdated06.vue'

export default {
	components: {
		FPVerificationMessage01,
		FPRequestLink02,
		FPError03,
		FPExpiredLink04,
		FPNewPassword05,
		FPPasswordUpdated06
	}
}
</script>
