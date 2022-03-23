<!-- TODO: bg color for default, hover & focus -->
<template>
	<router-link :to="'/' + to" :class="class" class="inline-flex grow relative h-60 px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2">
		<div>
			<h2 class="text-header-two font-bold antialiased">{{ title }}</h2>
			<p class="font-thin pt-3">{{ content }}</p>
		</div>

		<!--
			Image component for svg here
			width, height and bottom position may need to be adjusted
			<Image src="*.svg" class="w-32 h-32 absolute -bottom-6"/>
		-->
		<ChevronRightIcon class="absolute right-2 top-28 w-8 h-8" aria-hidden="true" />
	</router-link>
</template>

<script>
import Image from './Image.vue'
import { ChevronRightIcon } from '@heroicons/vue/solid'

export default {
	components: {
		Image,
		ChevronRightIcon,
	},
	props: {
		to: String,
		title: String,
		content: String,
		class: String,
	}
}
</script>