<template>
	<p class="font-light mt-4 h-20">{{ content }}</p>
</template>

<script>
export default {
	props: {
		content: {
			type: String,
			default: '',
		},
	},
}
</script>
