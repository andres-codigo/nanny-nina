<template>
	<div class="flex flex-wrap grow gap-y-6 gap-x-4">
		<NewRequest class="max-w-450-for-dev-not-prod" />
	</div>
</template>

<script>
import NewRequest from './pages/onboarding/NewRequest.vue'

export default {
	components: {
		NewRequest
	}
}
</script>