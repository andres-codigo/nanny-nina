<template>
	<div class="inline-flex w-full border border-gray-50 rounded-3xl">
		<div class="w-full h-60 focus:opacity-60">
			<div :class="['flex flex-row rounded-t-3xl', tempBackgroundColor]">
				<div class="relative flex grow h-33 overflow-hidden">
					<span class="absolute right-2 top-2 w-6" v-if="showQuestionMarkIcon"><QuestionMarkCircleIcon class="w-6 h-6 text-purple-500" aria-hidden="true" /></span>
						<Img :src="src" class="w-full" />
				</div>
			</div>
			<div>
				<div class="flex flex-row">
					<div class="basis-1/2 ml-4 mt-4">
						<h4 class="text-header-four font-semibold antialiased">{{ header }}</h4>
					</div>
					<div class="basis-1/2 mt-4 mr-4 text-right">

					</div>
				</div>
				<p class="text-sm font-light leading-5 mt-4 mx-4">{{ content }}</p>
			</div>
		</div>
	</div>
</template>

<script>
import Img from '../../dom-elements/Img.vue'

import { QuestionMarkCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
		Img,
		QuestionMarkCircleIcon
	},
	props: {
		tempBackgroundColor: String,
		header: String,
		content: String,
		src: {
			type: String,
			default: './assets/svg/help-me-choose/outcome-international/card-image.svg'
		},
		showCompletionSteps: {
			type: Boolean,
			default: true
		},
		showQuestionMarkIcon: {
			type: Boolean,
			default: true
		}
	}
}
</script>