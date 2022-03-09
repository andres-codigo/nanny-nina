<script setup>
import Image from '../carousel/Image.vue'
</script>

<template>
	<a href="/" class="mb-9 h-80 bg-white drop-shadow-md rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2">
		<div class="flex flex-row">
			<div :class="['flex grow h-40 rounded-t-3xl overflow-hidden', tempBackgroundColour]">
				<!--
					Image component for svg here
					<Image src="*.svg" />
					* remove background colour in div as visual placeholder
				-->
			</div>
		</div>
		<div class="flex flex-row">
			<div class="basis-1/2 mt-4 ml-4">
				<h1 class="antialiased text-xl">{{ user }}</h1>
			</div>
			<div class="basis-1/2 mt-4 mr-4 text-right">
				<span class="text-xs text-gray-500 font-light">0/5 steps completed</span>
			</div>
		</div>
		<p class="text-base font-light leading-5 mt-4 mx-4">{{ content }}</p>
	</a>
</template>

<script>
export default {
	props: {
		tempBackgroundColour: String,
		user: String,
		content: String
	}
}
</script>