<template>
	<div class="flex flex-wrap grow gap-y-6 gap-x-4">
		<InboxNotifications class="max-w-450-for-dev-not-prod" />
		<InboxChat class="max-w-450-for-dev-not-prod" />
		<HelpSearchOptions class="max-w-450-for-dev-not-prod" />
	</div>
</template>

<script>
import InboxNotifications from './pages/InboxNotifications.vue'
import InboxChat from './pages/InboxChat.vue'
import HelpSearchOptions from './pages/HelpSearchOptions.vue'

export default {
	components: {
		InboxNotifications,
		InboxChat,
		HelpSearchOptions
	}
}
</script>