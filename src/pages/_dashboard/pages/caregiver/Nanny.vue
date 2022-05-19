<template>
	<ul role="list" class="relative z-0 divide-y divide-gray-200">
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
			:hideNotes="false"
			notes="Waiting on design updates"
			date="06/05/22"
			routerLinkPath="/caregiver-nanny-job-listings"
			title="Job Listings"
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
			routerLinkPath="/caregiver-nanny-service-onboarding"
			title="Onboarding"
			textColor="text-purple-600"
			textBadge="Completed"
			textColorBadge="text-white"
			backgroundColorBadge="bg-green-800"
		/>
		<ListItem
			:subItem="false"
			:hideNotes="false"
			notes="Waiting on design updates"
			date="06/05/22"
			routerLinkPath="/caregiver-nanny-parent-profile"
			title="Parent Profile"
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
			routerLinkPath="/caregiver-nanny-booking-invites-list-with-content"
			title="Booking Invites List (Content) and fixed content"
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
			routerLinkPath="/caregiver-nanny-booking-invites-list-with-no-content"
			title="Booking Invites List (No content) and fixed content"
			textColor="text-purple-600"
			textBadge="Completed"
			textColorBadge="text-white"
			backgroundColorBadge="bg-green-800"
		/>
		<ListItem
			:subItem="false"
			:hideNotes="false"
			notes="Waiting on solution to introduction of new profile switching on title on title"
			date="17/05/22"
			routerLinkPath="/caregiver-nanny-booking"
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
			routerLinkPath="/caregiver-nanny-cancel-booking"
			title="Cancel Booking"
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