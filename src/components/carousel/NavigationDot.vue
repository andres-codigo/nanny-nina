<template>
	<span
		:class="[
			'dot cursor-pointer my-0 inline rounded-full',
			dotWidthAndHeight,
			backgroundColor,
			backgroundColorHover,
		]"
	></span>
</template>

<script>
export default {
	props: {
		backgroundColor: {
			type: String,
			default: '',
		},
		backgroundColorHover: {
			type: String,
			default: '',
		},
		dotWidthAndHeight: {
			type: String,
			default: 'h-4 w-4',
		},
	},
}
</script>
