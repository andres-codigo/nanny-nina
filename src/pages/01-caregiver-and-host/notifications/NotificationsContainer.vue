<template>
	<div class="flex flex-wrap grow gap-y-6 gap-x-4">
		<InboxListNotifications class="max-w-450-for-dev-not-prod" />
		<InboxListChat class="max-w-450-for-dev-not-prod" />
		<HelpSearchListOptions class="max-w-450-for-dev-not-prod" />
		<InboxChatList class="max-w-450-for-dev-not-prod" />
	</div>
</template>

<script>
import InboxListNotifications from './pages/InboxListNotifications.vue'
import InboxListChat from './pages/InboxListChat.vue'
import HelpSearchListOptions from './pages/HelpSearchListOptions.vue'
import InboxChatList from './pages/InboxChatList.vue'

export default {
	components: {
		InboxListNotifications,
		InboxListChat,
		HelpSearchListOptions,
		InboxChatList
	}
}
</script>