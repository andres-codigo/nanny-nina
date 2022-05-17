<template>
	<ul role="list" class="relative z-0 divide-y divide-gray-200">
		<ListItem
			:subItem="false"
			:hideNotes="true"
			notes=""
			date=""
			routerLinkPath="/host-childminder"
			title="Onboarding"
			textColor="text-purple-600"
			textBadge="Completed"
			textColorBadge="text-white"
			backgroundColorBadge="bg-green-800"
		/>
		<ListItem
			:subItem="false"
			:hideNotes="false"
			notes="In Progress but waiting on solution to introduction of new profile switching"
			date="18/05/22"
			routerLinkPath="/host-childminder-booking"
			title="Booking"
			textColor="text-purple-600"
			textBadge="In Progress"
			textColorBadge="text-amber-800"
			backgroundColorBadge="bg-amber-100"
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