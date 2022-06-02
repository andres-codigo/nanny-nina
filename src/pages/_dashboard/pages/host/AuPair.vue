<template>
	<ul role="list" class="relative z-0 divide-y divide-gray-200">
		<ListItem
			:subItem="false"
			:hideNotes="false"
			notes="Waiting on Figma design comment update"
			date="25/05/22"
			routerLinkPath="/host-au-pair"
			title="Onboarding"
			textColor="text-purple-600"
			textBadge="On Hold - UI/Design"
			textColorBadge="text-purple-900"
			backgroundColorBadge="bg-amber-500"
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