<template>
	<div :class="['flex flex-col relative h-48 py-8 rounded-20px', backgroundColor]">
		<div class="inline-flex w-full justify-center">
			<h4 :class="['inline-flex text-header-four font-bold antialiased', textColorHeader]">{{ header }} <Img :src="src" alt="" /></h4>
		</div>

		<div class="inline-flex w-full justify-center absolute bottom-[1.6rem]">
			<slot name="link"></slot>
		</div>
	</div>
</template>

<script>
import Img from '../../dom-elements/Img.vue'

export default {
	components: {
		Img
	},
	props: {
		backgroundColor: String,
		textColorHeader: {
			type: String,
			default: 'text-purple-900'
		},
		header: String,
		src: {
			type: String,
			default: './assets/svg/other/arrow-right-up.svg'
		},
	}
}
</script>