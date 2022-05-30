<template>
	<div class="flex flex-wrap grow gap-y-6 gap-x-4">
		<Inbox class="max-w-450-for-dev-not-prod" />
	</div>
</template>

<script>
import Inbox from './pages/Inbox.vue'

export default {
	components: {
		Inbox
	}
}
</script>