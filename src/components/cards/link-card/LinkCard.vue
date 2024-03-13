<template>
	<router-link
		:to="'/' + to"
		:class="classes"
		class="inline-flex grow relative h-60 px-7 py-8 rounded-20px focus:outline-none"
	>
		<div>
			<div v-if="hasPrice" class="flex">
				<div class="basis-3/4">
					<h2 class="text-header-two font-bold antialiased">
						{{ title }}
					</h2>
					<slot name="details"></slot>
				</div>
				<div class="basis-1/4 text-right font-semibold">
					<span class="inline-flex text-right leading-7">
						<slot name="price"></slot>
					</span>
				</div>
			</div>

			<div v-else>
				<span class="absolute right-2 top-2 w-6"
					><QuestionMarkCircleIcon
						v-if="showQuestionMark"
						class="w-6 h-6 text-green-500"
						aria-hidden="true"
				/></span>
				<h2 class="text-header-two font-bold antialiased">
					{{ title }}
				</h2>
				<slot name="details"></slot>
			</div>

			<div v-if="showPlaceholderSVG" class="flex flex-col items-left">
				<!--
					Image svg here
					width, height (including div container) and position will need to be adjusted as assets not provided
					<img src="*.svg" class="w-32 h-32 absolute -bottom-6"/>
				-->
				<ImageComponent :class="imageClass" :src="imageSrc" alt="" />
			</div>
		</div>
		<ChevronRightIcon
			class="absolute right-4 top-28 w-8 h-8"
			aria-hidden="true"
		/>
	</router-link>
</template>

<script>
import ImageComponent from '../../../components/dom-elements/ImageComponent.vue'

import { QuestionMarkCircleIcon, ChevronRightIcon } from '@heroicons/vue/solid'

export default {
	components: {
		ImageComponent,
		QuestionMarkCircleIcon,
		ChevronRightIcon,
	},
	props: {
		to: {
			type: String,
			default: '',
		},
		title: {
			type: String,
			default: '',
		},
		classes: {
			type: String,
			default: '',
		},
		imageClass: {
			type: String,
			default: 'absolute left-7 -bottom-[1.1rem]',
		},
		imageSrc: {
			type: String,
			default:
				'./assets/svg/illustrations/house-with-family-128-x-105.svg',
		},
		hasPrice: {
			type: Boolean,
			default: false,
		},
		showQuestionMark: {
			type: Boolean,
			default: false,
		},
		showPlaceholderSVG: {
			type: Boolean,
			default: false,
		},
	},
}
</script>
