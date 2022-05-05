<template>
	<div :class="class" class="flex items-center justify-between">
		<Img class="inline mr-1 h-4 w-4" src="./assets/svg/logo/alternate-logo.svg" alt="" />
		<Img class="inline mr-1 h-4 w-4" src="./assets/svg/logo/alternate-logo.svg" alt="" />
	</div>
</template>

<script>
import Img from '../../dom-elements/Img.vue'

export default {
	components: {
		Img
	},
	props: {
		class: {
			type: String,
			default: 'mx-5 mt-8'
		}
	}
}
</script>