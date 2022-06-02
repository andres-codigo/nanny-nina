<template>
	<li>
		<a href="#" class="flex flex-row pt-3 hover:bg-lilac-50 focus:bg-green-100">
			<div class="inline-flex pl-2 mb-3 basis-2/12">
				<div class="relative">
					<Img :src="src" class="rounded-full h-14 w-14" />
					<span class="absolute bottom-1 right-0.5 w-2.5 h-2.5 rounded-full border border-white bg-success-500" v-if="userIsOnline"></span>
				</div>
			</div>
			<div class="border-b basis-8/12 border-b-gray-50">
				<div class="flex flex-col pl-2">
					<p class="mb-2 font-bold text-purple-900">{{ user }}</p>
					<p class="text-sm text-gray-500">{{ message }}</p>
				</div>
			</div>
			<div class="pr-2 border-b basis-2/12 border-b-gray-50">
				<div class="flex flex-col h-full">
					<div class="mb-2">
						<div :class="['inline-flex float-right text-13px font-medium min-w-chat-counter h-5', isOldMessage ? 'text-gray-500' : 'text-purple-500']">{{ dateOrTime }}</div>
					</div>
					<div>
						<div class="inline-flex items-center justify-center float-right h-5 px-2 font-medium leading-none text-white bg-purple-500 rounded-full min-w-chat-counter text-13px" v-if="hasMessages">{{ numberOfMessages }}</div>
					</div>
				</div>
			</div>
		</a>
	</li>
</template>

<script>
import Img from '../dom-elements/Img.vue'

export default {
	components: {
		Img
	},
	props: {
		src: {
			type: String,
			default: 'https://images.unsplash.com/photo-1643869355390-4dcffc63d049?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
		},
		user: {
			type: String,
			default: 'The Sanders'
		},
		userIsOnline: {
			type: Boolean,
			default: true
		},
		message: {
			type: String,
			default: 'Hey! Looking forward to meeting you'
		},
		dateOrTime: {
			type: String,
			default: '12:13'
		},
		isOldMessage:  {
			type: Boolean,
			default: false
		},
		numberOfMessages: {
			type: String,
			default: '1'
		},
		hasMessages: {
			type: Boolean,
			default: true
		}
	}
}
</script>