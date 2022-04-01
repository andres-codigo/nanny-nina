<!-- TODO: bg color hover & focus -->
<template>
	<a href="/" :class="['h-80 rounded-3xl bg-white-500 hover:opacity-75 focus:outline-none', tempFocusRingColor]">
		<div :class="['flex flex-row rounded-t-3xl', tempBackgroundColor]">
			<div class="relative flex grow h-40 rounded-t-3xl overflow-hidden">
				<a href="#" class="absolute right-0 top-4 w-10"><QuestionMarkCircleIcon class="w-6 h-6 text-purple-500" aria-hidden="true" /></a>
				<!--
					Image component for svg here
					<Image src="*.svg" />
					* remove background color in div as visual placeholder
				-->
			</div>
		</div>
		<div class="h-40 bg-white rounded-b-3xl drop-shadow-md ">
			<div class="flex flex-row">
				<div class="basis-1/2 mt-4 ml-4">
					<h4 class="text-header-four font-semibold antialiased">{{ user }}</h4>
				</div>
				<div :class="['basis-1/2 mt-4 mr-4 text-right', !showCompletionSteps ? 'hidden sm:hidden' : '']">
					<span class="text-xs text-gray-500 font-light">0/5 steps completed</span>
				</div>
			</div>
			<p class=" text-sm font-light leading-5 mt-4 mx-4">{{ content }}</p>
		</div>
	</a>
</template>

<script>
import Image from './Image.vue'

import { QuestionMarkCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
		Image,
		QuestionMarkCircleIcon
	},
	props: {
		tempBackgroundColor: String,
		tempFocusRingColor: String,
		user: String,
		content: String,
		showCompletionSteps: {
			type: Boolean,
			default: true
		}
	}
}
</script>