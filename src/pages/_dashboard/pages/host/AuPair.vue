<template>
	<ul role="list" class="relative z-0 divide-y divide-gray-200">
		<ListItem
			:subItem="false"
			:hideNotes="false"
			notes="Waiting on answers to Figma comments and design updates"
			date="27/04/22"
			routerLinkPath="/host-au-pair"
			title="Onboarding"
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