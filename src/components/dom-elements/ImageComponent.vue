<template>
	<img :class="classes" :src="src" :alt="alt" />
</template>

<script>
export default {
	props: {
		src: {
			type: String,
			default: '',
		},
		alt: {
			type: String,
			default: '',
		},
		classes: {
			type: String,
			default: '',
		},
	},
}
</script>
