<template>
	<div class="fade">
		<img :src="src" />
	</div>
</template>

<script>
export default {
	props: {
		src: {
			type: String,
			default: '',
		},
	},
}
</script>
