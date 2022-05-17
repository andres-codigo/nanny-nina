<template>
	<ul role="list" class="relative z-0 divide-y divide-gray-200">
		<ListItem
			:subItem="false"
			:hideNotes="true"
			notes=""
			date=""
			routerLinkPath="/caregiver-au-pair-country-listings"
			title="Country Listings"
			textColor="text-purple-600"
			textBadge="Completed"
			textColorBadge="text-white"
			backgroundColorBadge="bg-green-800"
		/>
		<ListItem
			:subItem="false"
			:hideNotes="false"
			notes="Waiting on Design comment updates"
			date="27/04/22"
			routerLinkPath="/caregiver-au-pair-service-onboarding"
			title="Onboarding"
			textColor="text-purple-600"
			textBadge="On Hold - UI/Design"
			textColorBadge="text-amber-800"
			backgroundColorBadge="bg-amber-100"
		/>
		<ListItem
			:subItem="false"
			:hideNotes="false"
			notes="Waiting on Design comment updates"
			date="27/04/22"
			routerLinkPath="/caregiver-au-pair-personality-test"
			title="Personality Test"
			textColor="text-purple-600"
			textBadge="On Hold - UI/Design"
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