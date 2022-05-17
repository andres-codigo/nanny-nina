<template>
	<ul role="list" class="relative z-0 divide-y divide-gray-200">
		<ListItem
			:subItem="false"
			:hideNotes="true"
			notes=""
			date=""
			routerLinkPath="/caregiver-childminder-service-onboarding"
			title="Onboarding"
			textColor="text-purple-600"
			textBadge="Completed"
			textColorBadge="text-white"
			backgroundColorBadge="bg-green-800"
		/>
		<ListItem
			:subItem="false"
			:hideNotes="false"
			notes="Waiting on answers to Figma comments and design updates & solution to introduction of new profile switching"
			date="17/05/22"
			routerLinkPath="/caregiver-childminder-booking"
			title="Booking"
			textColor="text-purple-600"
			textBadge="Blocked - UI/Design"
			textColorBadge="text-purple-900"
			backgroundColorBadge="bg-melon-600"
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