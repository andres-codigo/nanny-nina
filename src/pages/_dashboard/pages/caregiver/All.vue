<template>
	<ul role="list" class="relative z-0 divide-y divide-gray-200">
		<ListItem
			:sub-item="false"
			:hide-notes="true"
			notes=""
			date=""
			router-link-path="/caregiver-reference"
			title="Reference"
			text-color="text-purple-600"
			text-badge="Completed"
			text-color-badge="text-white"
			background-color-badge="bg-green-800"
		/>
		<ListItem
			:sub-item="false"
			:hide-notes="true"
			notes=""
			date=""
			router-link-path="/caregiver-parent-profile"
			title="Parent Profile"
			text-color="text-purple-600"
			text-badge="Completed"
			text-color-badge="text-white"
			background-color-badge="bg-green-800"
		/>
	</ul>
</template>

<script>
import ListItem from '../../../../components/_dashboard/ListItem.vue'

export default {
	components: {
		ListItem,
	},
}
</script>
