<template>
	<ul role="list" class="relative z-0 divide-y divide-gray-200">
		<ListItem
			:subItem="false"
			:hideNotes="true"
			notes=""
			date=""
			routerLinkPath="/onboarding-host"
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
			routerLinkPath="/host-nanny-home"
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
			routerLinkPath="/host-home-with-bottom-menu-and-profile"
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
			routerLinkPath="/host-payment-account"
			title="Payment"
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