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
			:hideNotes="true"
			notes=""
			date=""
			routerLinkPath="/caregiver-childminder-booking"
			title="Booking"
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