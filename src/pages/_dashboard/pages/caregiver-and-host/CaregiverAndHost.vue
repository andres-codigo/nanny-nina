<template>
	<ul role="list" class="relative z-0 divide-y divide-gray-200">
		<ListItem
			:hideNotes="true"
			notes=""
			date=""
			routerLinkPath="/registration"
			title="Registration"
			textColor="text-purple-600"
			textBadge="Completed"
			textColorBadge="text-white"
			backgroundColorBadge="bg-green-800"
		/>
		<ListItem
			:hideNotes="true"
			notes=""
			date=""
			routerLinkPath="/forgot-password"
			title="Forgot Password"
			textColor="text-purple-600"
			textBadge="Completed"
			textColorBadge="text-white"
			backgroundColorBadge="bg-green-800"
		/>
		<ListItem
			:subItem="false"
			:hideNotes="false"
			notes="Waiting on Figma design updates"
			date="02/06/22"
			routerLinkPath="/caregiver-and-host-notifications"
			title="Notifications"
			textColor="text-purple-600"
			textBadge="On Hold - UI/Design"
			textColorBadge="text-purple-900"
			backgroundColorBadge="bg-amber-500"
		/>
		<ListItem
			:subItem="false"
			:hideNotes="false"
			notes="Waiting on Figma design updates"
			date="02/06/22"
			routerLinkPath="/caregiver-and-host-chat-conversation"
			title="Chat Conversation"
			textColor="text-purple-600"
			textBadge="On Hold - UI/Design"
			textColorBadge="text-purple-900"
			backgroundColorBadge="bg-amber-500"
		/>
	</ul>
</template>

<script>
import ListItem from '../../../../components/_dashboard/ListItem.vue'

export default {
	components: {
		ListItem
	}
}
</script>