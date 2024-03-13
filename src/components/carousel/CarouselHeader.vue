<template>
	<h3 class="text-header-three font-semibold leading-none antialiased h-8">
		{{ title }}
	</h3>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: '',
		},
	},
}
</script>
