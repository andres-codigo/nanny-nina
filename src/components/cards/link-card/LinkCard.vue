<template>
	<router-link :to="'/' + to" :class="class" class="inline-flex grow relative h-60 px-7 py-8 rounded-20px focus:outline-none">
		<div>
			<div class="flex" v-if="hasPrice">
				<div class="basis-3/4">
					<h2 class="text-header-two font-bold antialiased">{{ title }}</h2>
					<slot name="details"></slot>
				</div>
				<div class="basis-1/4 text-right font-semibold">
					<span class="inline-flex text-right leading-7">
						<slot name="price"></slot>
					</span>
				</div>
			</div>

			<div v-else>
				<span class="absolute right-2 top-2 w-6"><QuestionMarkCircleIcon class="w-6 h-6 text-green-500" aria-hidden="true" v-if="showQuestionMark" /></span>
				<h2 class="text-header-two font-bold antialiased">{{ title }}</h2>
				<slot name="details"></slot>
			</div>

			<div class="flex flex-col items-left" v-if="showPlaceholderSVG">
				<!--
					Image svg here
					width, height (including div container) and position will need to be adjusted as assets not provided
					<img src="*.svg" class="w-32 h-32 absolute -bottom-6"/>
				-->
				<Img class="w-48 h-48 absolute -left-6 -bottom-10" src="./assets/svg/placeholder/placeholder.svg" alt="" />
			</div>
		</div>
		<ChevronRightIcon class="absolute right-2 top-28 w-8 h-8" aria-hidden="true" />
	</router-link>
</template>

<script>
import Img from '../../../components/dom-elements/Img.vue'

import { QuestionMarkCircleIcon, ChevronRightIcon } from '@heroicons/vue/solid'

export default {
	components: {
		Img,
		QuestionMarkCircleIcon,
		ChevronRightIcon,
	},
	props: {
		to: String,
		title: String,
		class: String,
		hasPrice: {
			type: Boolean,
			default: false
		},
		showQuestionMark: {
			type: Boolean,
			default: false
		},
		showPlaceholderSVG: {
			type: Boolean,
			default: false
		},
	}
}
</script>