<template>
	<div class="inline-flex w-full border border-gray-50 hover:border hover:border-gray-500  rounded-3xl">
		<a href="/" class="w-full h-80 focus:opacity-60">
			<div :class="['flex flex-row rounded-t-3xl', tempBackgroundColor]">
				<div class="relative flex grow h-40 overflow-hidden">
					<span class="absolute right-2 top-2 w-6"><QuestionMarkCircleIcon class="w-6 h-6 text-purple-500" aria-hidden="true" /></span>
					<!--
						Image svg here
						<img src="*.svg" />
						* remove background color in div as visual placeholder
					-->
				</div>
			</div>
			<div class="h-40 ">
				<div class="flex flex-row">
					<div class="basis-1/2 mt-4 ml-4">
						<h4 class="text-header-four font-semibold antialiased">{{ user }}</h4>
					</div>
					<div :class="['basis-1/2 mt-4 mr-4 text-right', !showCompletionSteps ? 'hidden sm:hidden' : '']">
						<span class="text-xs text-gray-500 font-light">0/5 steps completed</span>
					</div>
				</div>
				<p class="text-sm font-light leading-5 mt-4 mx-4">{{ content }}</p>
			</div>
		</a>
	</div>
</template>

<script>
import { QuestionMarkCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
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