<template>
	<div :class="classes" class="flex items-center justify-between">
		<ImageComponent
			class="inline mr-1 h-4 w-4"
			src="./assets/svg/logo/alternate-logo.svg"
			alt=""
		/>
		<ImageComponent
			class="inline mr-1 h-4 w-4"
			src="./assets/svg/logo/alternate-logo.svg"
			alt=""
		/>
	</div>
</template>

<script>
import ImageComponent from '../../dom-elements/ImageComponent.vue'

export default {
	components: {
		ImageComponent,
	},
	props: {
		classes: {
			type: String,
			default: 'mx-5 mt-8',
		},
	},
}
</script>
