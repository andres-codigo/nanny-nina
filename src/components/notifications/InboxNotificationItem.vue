<template>
	<a href="#" :class="['flex py-6 hover:bg-lilac-50 focus:bg-green-100', isNewNotification ? 'bg-purple-50' : 'bg-white', isLastNotificationItem ? '' : 'border-b border-gray-500']">
		<div class="inline-flex justify-center mx-4 shrink-0">
			<Img :src="src" class="w-10 h-10 rounded-full" alt="" />
		</div>
		<div class="inline-flex items-center pr-4">
			<div>
				<slot name="notificationMessage">
					<p class="antialiased font-semibold">New message from The Sanders</p>
					<p class="antialiased font-semibold">Take a look!</p>
					<p class="text-xs">Now</p>
				</slot>
			</div>
		</div>
	</a>
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
		isNewNotification: {
			type: Boolean,
			default: false
		},
		isLastNotificationItem: {
			type: Boolean,
			default: false
		}
	}
}
</script>