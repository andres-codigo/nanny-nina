<template>
	<div class="flex flex-wrap grow gap-y-6 gap-x-4">
		<InboxListNotifications class="max-w-450-for-dev-not-prod" />
		<InboxChatListNoAssistanceMessage class="max-w-450-for-dev-not-prod" />
		<HelpSearchListOptions class="max-w-450-for-dev-not-prod" />
		<InboxChatListWithAssistanceMessage
			class="max-w-450-for-dev-not-prod"
		/>
	</div>
</template>

<script>
import InboxListNotifications from './pages/InboxListNotifications.vue'
import InboxChatListNoAssistanceMessage from './pages/InboxChatListNoAssistanceMessage.vue'
import HelpSearchListOptions from './pages/HelpSearchListOptions.vue'
import InboxChatListWithAssistanceMessage from './pages/InboxChatListWithAssistanceMessage.vue'

export default {
	components: {
		InboxListNotifications,
		InboxChatListNoAssistanceMessage,
		HelpSearchListOptions,
		InboxChatListWithAssistanceMessage,
	},
}
</script>
