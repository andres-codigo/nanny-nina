<template>
	<ul role="list" class="relative z-0 divide-y divide-gray-200">
		<ListItem
			:subItem="false"
			:hideNotes="true"
			notes=""
			date=""
			routerLinkPath="/onboarding-caregiver"
			title="Onboarding Slides"
			textColor="text-purple-600"
			textBadge="Completed"
			textColorBadge="text-white"
			backgroundColorBadge="bg-green-800"
		/>
		<ListItem
			:hideNotes="true"
			notes=""
			date=""
			routerLinkPath="/caregiver-childminder-and-nanny-home-with-bottom-menu"
			title="Home (with bottom menu)"
			textColor="text-purple-600"
			textBadge="Completed"
			textColorBadge="text-white"
			backgroundColorBadge="bg-green-800"
		/>
		<ListItem
			:subItem="false"
			:hideNotes="true"
			notes=""
			date=""
			routerLinkPath="/caregiver-nanny-home-without-bottom-menu"
			title="Home (without bottom menu)"
			textColor="text-purple-600"
			textBadge="Completed"
			textColorBadge="text-white"
			backgroundColorBadge="bg-green-800"
		/>
		<ListItem
			:subItem="false"
			:hideNotes="true"
			notes=""
			date=""
			routerLinkPath="/caregiver-home-with-bottom-menu-and-profile"
			title="Home (with bottom menu and profile)"
			textColor="text-purple-600"
			textBadge="Completed"
			textColorBadge="text-white"
			backgroundColorBadge="bg-green-800"
		/>
		<ListItem
			:subItem="false"
			:hideNotes="false"
			notes="Waiting on Figma design update"
			date="25/05/22"
			routerLinkPath="/caregiver-payment-account"
			title="Payment"
			textColor="text-purple-600"
			textBadge="On Hold - UI/Design"
			textColorBadge="text-purple-900"
			backgroundColorBadge="bg-amber-500"
		/>
		<ListItem
			:subItem="false"
			:hideNotes="true"
			notes=""
			date=""
			routerLinkPath="/caregiver-notifications"
			title="Notifications"
			textColor="text-purple-600"
			textBadge="In Progress"
			textColorBadge="text-purple-900"
			backgroundColorBadge="bg-amber-300"
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