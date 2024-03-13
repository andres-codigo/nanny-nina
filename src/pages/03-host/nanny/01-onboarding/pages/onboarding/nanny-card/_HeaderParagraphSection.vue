<template>
	<div :class="classes" class="flex flex-col">
		<h5 class="text-header-five font-semibold antialiased">{{ title }}</h5>
		<slot name="content"></slot>
	</div>
</template>

<script>
export default {
	props: {
		classes: {
			type: String,
			default: '',
		},
		title: {
			type: String,
			default: '',
		},
	},
}
</script>
