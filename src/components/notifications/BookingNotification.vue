<template>
	<div class="flex relative h-28 bg-green-500">
		<div class="inline-flex  justify-center ml-4 w-12 h-28">
			<Img :src="src" :class="['h-7 w-7 rounded-full relative', displayButton ? 'top-6' : 'top-11']" alt="" />
		</div>
		<div class="grow h-28 inline-flex items-center">
			<div class="block">
				<p :class="['font-semibold antialiased', , displayButton ? 'mt-2' : '']">{{ message }}</p>
				<ButtonOutlineDark text="Review" class="w-button-xs text-sm font-semibold py-1 mt-4" v-if="displayButton" />
			</div>
		</div>
		<div class="inline-flex justify-center w-14 h-28 mt-4 cursor-pointer">
			<Img src="./assets/svg/other/close-background-purple.svg" class="w-6 h-6 text-purple-500" />
		</div>
	</div>
</template>

<script>
import ButtonOutlineDark from '../buttons/ButtonOutlineDark.vue'
import Img from '../dom-elements/Img.vue'

export default {
	components: {
		ButtonOutlineDark,
		Img
	},
	props: {
		src: String,
		message: String,
		displayButton: {
			type: Boolean,
			default: false
		}
	}
}
</script>