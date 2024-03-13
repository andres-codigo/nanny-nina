<template>
	<span
		:class="[
			'inline-flex items-center py-2 px-4 rounded-20px text-xs font-semibold uppercase',
			backgroundColor,
			textColor,
		]"
		>{{ title }}</span
	>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: '',
		},
		backgroundColor: {
			type: String,
			default: '',
		},
		textColor: {
			type: String,
			default: '',
		},
	},
}
</script>
