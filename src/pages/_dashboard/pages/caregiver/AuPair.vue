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
			notes="Waiting on Figma comment updates"
			date="27/04/22"
			routerLinkPath="/caregiver-au-pair-service-onboarding"
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
			routerLinkPath="/caregiver-au-pair-personality-test"
			title="Personality Test"
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