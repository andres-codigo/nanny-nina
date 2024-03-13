<template>
	<ul role="list" class="relative z-0 divide-y divide-gray-200">
		<ListItem
			:hide-notes="true"
			notes=""
			date=""
			router-link-path="/registration"
			title="Registration"
			text-color="text-purple-600"
			text-badge="Completed"
			text-color-badge="text-white"
			background-color-badge="bg-green-800"
		/>
		<ListItem
			:hide-notes="true"
			notes=""
			date=""
			router-link-path="/forgot-password"
			title="Forgot Password"
			text-color="text-purple-600"
			text-badge="Completed"
			text-color-badge="text-white"
			background-color-badge="bg-green-800"
		/>
		<ListItem
			:sub-item="false"
			:hide-notes="true"
			notes=""
			date=""
			router-link-path="/caregiver-and-host-notifications"
			title="Notifications"
			text-color="text-purple-600"
			text-badge="Completed"
			text-color-badge="text-white"
			background-color-badge="bg-green-800"
		/>
		<ListItem
			:sub-item="false"
			:hide-notes="true"
			notes=""
			date=""
			router-link-path="/caregiver-and-host-chat-conversation"
			title="Chat Conversation"
			text-color="text-purple-600"
			text-badge="Completed"
			text-color-badge="text-white"
			background-color-badge="bg-green-800"
		/>
		<ListItem
			:sub-item="false"
			:hide-notes="true"
			notes=""
			date=""
			router-link-path="/help-me-choose"
			title="Help Me Choose"
			text-color="text-purple-600"
			text-badge="Completed"
			text-color-badge="text-white"
			background-color-badge="bg-green-800"
		/>
		<ListItem
			:sub-item="false"
			:hide-notes="true"
			notes=""
			date=""
			router-link-path="/sticky-header-tabs-and-bottom-menu"
			title="Sticky Header, Tabs and Bottom Menu"
			text-color="text-purple-600"
			text-badge="Completed"
			text-color-badge="text-white"
			background-color-badge="bg-green-800"
		/>
	</ul>
</template>

<script>
import ListItem from '../../../../components/_dashboard/ListItem.vue'

export default {
	components: {
		ListItem,
	},
}
</script>
