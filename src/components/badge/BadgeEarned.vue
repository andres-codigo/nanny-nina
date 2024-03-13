<template>
	<div :class="classes" class="flex flex-col">
		<slot name="title"></slot>
		<slot name="badges"></slot>
	</div>
</template>

<script>
export default {
	props: {
		classes: {
			type: String,
			default: '',
		},
	},
}
</script>
