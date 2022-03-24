<template>
	<span
		:class="
			['inline-flex items-center py-2 px-4 rounded-20px text-sm font-medium uppercase',
			backgroundColor,
			textColor]
		">{{ title }}</span>
</template>

<script>
export default {
	props: {
		title: String,
		backgroundColor: String,
		textColor: String,
	}
}
</script>