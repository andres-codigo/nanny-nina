<template>
	<ul role="list" class="relative z-0 divide-y divide-gray-200">
		<ListItem
			:sub-item="false"
			:hide-notes="true"
			notes=""
			date=""
			router-link-path="/onboarding-host"
			title="Onboarding Slides"
			text-color="text-purple-600"
			text-badge="Completed"
			text-color-badge="text-white"
			background-color-badge="bg-green-800"
		/>
		<ListItem
			:hide-notes="true"
			notes=""
			date=""
			router-link-path="/host-nanny-home"
			title="Home (with bottom menu)"
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
			router-link-path="/host-home-with-bottom-menu-and-profile"
			title="Home (with bottom menu and profile)"
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
			router-link-path="/host-payment-account"
			title="Payment"
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
