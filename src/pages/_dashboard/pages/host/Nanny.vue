<template>
	<ul role="list" class="relative z-0 divide-y divide-gray-200">
		<ListItem
			:subItem="false"
			:hideNotes="false"
			notes="Waiting on Figma comments and design updates"
			date="06/05/22"
			routerLinkPath="/host-nanny"
			title="Onboarding"
			textColor="text-purple-600"
			textBadge="Blocked - UI/Design"
			textColorBadge="text-purple-900"
			backgroundColorBadge="bg-melon-600"
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
			notes="Waiting on Figma comments and design updates"
			date="16/05/22"
			routerLinkPath="/host-nanny-booking"
			title="Booking"
			textColor="text-purple-600"
			textBadge="Blocked - UI/Design"
			textColorBadge="text-purple-900"
			backgroundColorBadge="bg-melon-600"
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
		<ListItem
			:subItem="false"
			:hideNotes="true"
			notes=""
			date=""
			routerLinkPath="/host-nanny-booking-response-tab-with-pop-up"
			title="Booking > Responses Tab with Response Card pop-up"
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