<template>
	<ul role="list" class="relative z-0 divide-y divide-gray-200">
		<ListItem
			:sub-item="false"
			:hide-notes="true"
			notes=""
			date=""
			router-link-path="/host-nanny"
			title="Onboarding"
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
			router-link-path="/host-nanny-event"
			title="Event"
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
			router-link-path="/host-nanny-availability-w-fixed-button"
			title="Availability (with fixed content)"
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
			router-link-path="/host-nanny-availability-w-fixed-complete-button"
			title="Request Overview (with fixed content)"
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
			router-link-path="/host-nanny-booking"
			title="Booking"
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
			router-link-path="/host-nanny-booking-response-tab-with-pop-up"
			title="Booking > Responses Tab (with pop-up)"
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
