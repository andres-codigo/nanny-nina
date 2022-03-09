<template>
	<div>
		<img :src="src">
	</div>
</template>

<script>
export default {
	props: {
		src: String
	}
}
</script>