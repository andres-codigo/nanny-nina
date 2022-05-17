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
			notes="Waiting on Design comment updates"
			date="06/05/22"
			routerLinkPath="/caregiver-nanny-job-listings"
			title="Job Listings"
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
			notes="Waiting on Design comment updates"
			date="06/05/22"
			routerLinkPath="/caregiver-nanny-parent-profile"
			title="Parent Profile"
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
			notes="Waiting on Design comment updates"
			date="17/05/22"
			routerLinkPath="/caregiver-nanny-booking"
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