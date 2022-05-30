<template>
	<div :class="['flex border-b border-gray-500 py-6', backgroundColor]">
		<div class="inline-flex shrink-0 justify-center mx-4">
			<Img :src="src" class="h-10 w-10 rounded-full" alt="" />
		</div>
		<div class="inline-flex items-center">
			<div class="block">
				<slot name="notificationMessage">
					<p class="font-semibold antialiased">New message from The Sanders</p>
					<p class="font-semibold antialiased">Take a look!</p>
					<p class="text-xs">Now</p>
				</slot>
			</div>
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
		src: {
			type: String,
			default: './assets/svg/notifications/circle-green-chat-bubble-purple.svg'
		},
		backgroundColor: {
			type: String,
			default: 'bg-purple-50'
		}
	}
}
</script>