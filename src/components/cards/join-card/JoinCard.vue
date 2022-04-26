<template>
	<div :class="['flex flex-col relative h-80 rounded-3xl', backgroundColor]">
		<div class="w-full mt-8 ml-4">
			<h4 :class="['text-header-four font-semibold antialiased', textColorHeader]">{{ header }}</h4>
			<p :class="['text-sm antialiased leading-none mt-4', textColorContent]">{{ content }}</p>
		</div>

		<div class="inline-flex w-full justify-center absolute bottom-[2rem]">
			<slot name="link"></slot>
		</div>
	</div>
</template>

<script>
import { QuestionMarkCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
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