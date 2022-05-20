<template>
	<ul role="list" class="relative z-0 divide-y divide-gray-200">
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
			routerLinkPath="/host-nanny-booking-profile"
			title="Booking Profile (with fixed content)"
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