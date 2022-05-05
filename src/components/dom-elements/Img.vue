<template>
	<img :class="class" :src="src" :alt="alt">
</template>

<script>
export default {
	props: {
		src: String,
		alt: String,
		class: {
			type: String,
			default: ''
		}
	}
}
</script>