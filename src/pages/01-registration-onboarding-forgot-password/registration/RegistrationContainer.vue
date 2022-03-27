<template>
	<div class="flex flex-wrap gap-y-6 sm:gap-x-4 w-screen h-screen">
		<Welcome01 class="min-w-360-for-dev-not-prod max-w-450-for-dev-not-prod" />
		<SignUpOptions02 class="min-w-360-for-dev-not-prod max-w-450-for-dev-not-prod" />
		<SignUp03 class="min-w-360-for-dev-not-prod max-w-450-for-dev-not-prod" />

		<VerifyStep01 class="min-w-360-for-dev-not-prod max-w-450-for-dev-not-prod" />
		<VerifyStep02 class="min-w-360-for-dev-not-prod max-w-450-for-dev-not-prod" />
		<VerifyStep03 class="min-w-360-for-dev-not-prod max-w-450-for-dev-not-prod" />

		<Login04 class="min-w-360-for-dev-not-prod max-w-450-for-dev-not-prod" />
	</div>
</template>

<script>
import Welcome01 from './pages/Welcome01.vue'
import SignUpOptions02 from './pages/SignUpOptions02.vue'
import SignUp03 from './pages/SignUp03.vue'

import VerifyStep01 from './pages/verification/VerifyStep01.vue'
import VerifyStep02 from './pages/verification/VerifyStep02.vue'
import VerifyStep03 from './pages/verification/VerifyStep03.vue'

import Login04 from './pages/Login04.vue'

export default {
	components: {
		Welcome01,
		SignUpOptions02,
		SignUp03,
		VerifyStep01,
		VerifyStep02,
		VerifyStep03,
		Login04
	}
}
</script>