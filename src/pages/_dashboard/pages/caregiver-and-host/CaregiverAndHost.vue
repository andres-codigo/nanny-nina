<template>
	<ul role="list" class="relative z-0 divide-y divide-gray-200">
		<ListItem
			:hideNotes="true"
			notes=""
			date=""
			routerLinkPath="/registration"
			title="Registration"
			textColor="text-purple-600"
			textBadge="Completed"
			textColorBadge="text-white"
			backgroundColorBadge="bg-green-800"
		/>
		<ListItem
			:hideNotes="true"
			notes=""
			date=""
			routerLinkPath="/forgot-password"
			title="Forgot Password"
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