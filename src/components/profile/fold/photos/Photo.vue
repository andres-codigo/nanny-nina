<template>
	<div class="inline-block px-1.5">
		<div class="w-48 h-52 overflow-hidden rounded-lg">
			<img :src="imageUrl" />
		</div>
	</div>
</template>

<script>
export default {
	props: {
		imageUrl: String
	}
}
</script>