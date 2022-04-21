<template>
	<div :class="class" class="flex items-center justify-between">
		<img class="inline mr-1 h-4 w-4" src="../../../assets/svg/logo/alternate-logo.svg" />
		<img class="inline mr-1 h-4 w-4" src="../../../assets/svg/logo/alternate-logo.svg" />
	</div>
</template>

<script>
export default {
	props: {
		class: {
			type: String,
			default: 'mx-5 mt-8'
		}
	}
}
</script>