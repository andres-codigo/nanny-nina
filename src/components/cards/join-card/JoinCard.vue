<template>
	<div :class="['flex flex-col relative h-80 rounded-3xl', backgroundColor]">
		<div class="w-full mt-8 ml-4">
			<h4 :class="['text-header-four font-semibold antialiased', textColorHeader]">{{ header }}</h4>
			<p :class="['text-sm antialiased leading-none mt-4', textColorContent]">{{ content }}</p>
		</div>

		<div class="flex flex-col items-center h-40">
			<!--
				Image svg here
				width, height (including div container) and bottom position will need to be adjusted as assets not provided
				<img src="*.svg" class="w-32 h-32 absolute -bottom-6"/>
			-->
			<Img class="w-48 h-48 absolute bottom-9" src="./assets/svg/other/placeholder.svg" alt="" />
		</div>

		<div class="inline-flex w-full justify-center absolute bottom-[1.6rem]">
			<slot name="link"></slot>
		</div>
	</div>
</template>

<script>
import Img from '../../../components/dom-elements/Img.vue'

import { QuestionMarkCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
		Img,
		QuestionMarkCircleIcon
	},
	props: {
		backgroundColor: String,
		textColorHeader: {
			type: String,
			default: 'text-white'
		},
		textColorContent: {
			type: String,
			default: 'text-white'
		},
		header: String,
		content: String
	}
}
</script>