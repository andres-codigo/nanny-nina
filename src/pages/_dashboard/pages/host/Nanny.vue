<template>
	<ul role="list" class="relative z-0 divide-y divide-gray-200">
		<ListItem
			:subItem="false"
			:hideNotes="false"
			notes="Waiting on Design comment updates"
			date="06/05/22"
			routerLinkPath="/host-nanny"
			title="Onboarding"
			textColor="text-purple-600"
			textBadge="On Hold - UI/Design"
			textColorBadge="text-amber-800"
			backgroundColorBadge="bg-amber-100"
		/>
		<ListItem
			:subItem="false"
			:hideNotes="true"
			notes=""
			date=""
			routerLinkPath="/host-nanny-event"
			title="Event"
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
			routerLinkPath="/host-nanny-availability-w-fixed-button"
			title="Availability with fixed button"
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
			routerLinkPath="/host-nanny-availability-w-fixed-complete-button"
			title="Request Overview with fixed complete button"
			textColor="text-purple-600"
			textBadge="Completed"
			textColorBadge="text-white"
			backgroundColorBadge="bg-green-800"
		/>
		<ListItem
			:subItem="false"
			:hideNotes="false"
			notes="Waiting on Design and comment updates"
			date="16/05/22"
			routerLinkPath="/host-nanny-booking"
			title="Booking"
			textColor="text-purple-600"
			textBadge="On Hold - UI/Design"
			textColorBadge="text-amber-800"
			backgroundColorBadge="bg-amber-100"
		/>
		<ListItem
			:subItem="false"
			:hideNotes="true"
			notes=""
			date=""
			routerLinkPath="/host-nanny-booking-profile"
			title="Booking Profile with fixed ignore/match button"
			textColor="text-purple-600"
			textBadge="Completed"
			textColorBadge="text-white"
			backgroundColorBadge="bg-green-800"
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