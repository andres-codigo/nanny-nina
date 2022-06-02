<template>
	<li class="mt-3">
		<div class="flex flex-row">
			<div class="basis-2/12 inline-flex mb-3">
				<div class="relative pr-1">
					<Img :src="src" class="h-14 w-14 rounded-full" />
					<span class="absolute bottom-1 right-2 w-2.5 h-2.5 rounded-full border border-white bg-success-500" v-if="userIsOnline"></span>
				</div>
			</div>
			<div class="basis-8/12 border-b border-b-gray-50">
				<div class="flex flex-col pl-2">
					<h6 class="text-header-six text-purple-900 mb-2">{{ user }}</h6>
					<p class="text-sm text-gray-500">{{ message }}</p>
				</div>
			</div>
			<div class="basis-2/12 border-b border-b-gray-50">
				<div class="flex flex-col h-full">
					<div class="mb-2">
						<div :class="['inline-flex float-right text-13px  font-medium min-w-chat-counter h-5', isOldMessage ? 'text-gray-500' : 'text-purple-500']">{{ dateOrTime }}</div>
					</div>
					<div>
						<div class="inline-flex float-right items-center justify-center bg-purple-500 text-white leading-none font-medium min-w-chat-counter h-5 text-13px rounded-full px-2" v-if="hasMessages">{{ numberOfMessages }}</div>
					</div>
				</div>
			</div>
		</div>
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