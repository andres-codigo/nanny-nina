<!-- TODO: bg colour hover & focus -->
<script setup>
import Image from './Image.vue'
</script>

<template>
	<a href="/" :class="['mb-9 h-80 rounded-3xl bg-white-500 hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-0', tempFocusRingColour]">
		<div :class="['flex flex-row rounded-t-3xl', tempBackgroundColour]">
			<div class="flex grow h-40 rounded-t-3xl overflow-hidden">
				<!--
					Image component for svg here
					<Image src="*.svg" />
					* remove background colour in div as visual placeholder
				-->
			</div>
		</div>
		<div class="h-40 bg-white rounded-b-3xl drop-shadow-md ">
			<div class="flex flex-row">
				<div class="basis-1/2 mt-4 ml-4">
					<h4 class="antialiased text-3xl">{{ user }}</h4>
				</div>
				<div :class="['basis-1/2 mt-4 mr-4 text-right', !showCompletionSteps ? 'hidden sm:hidden' : '']">
					<span class="text-xs text-gray-500 font-light">0/5 steps completed</span>
				</div>
			</div>
			<p class="font-light leading-5 mt-4 mx-4">{{ content }}</p>
		</div>
	</a>
</template>

<script>
export default {
	props: {
		tempBackgroundColour: String,
		tempFocusRingColour: String,
		user: String,
		content: String,
		showCompletionSteps: {
			type: Boolean,
			default: true
		}
	}
}
</script>