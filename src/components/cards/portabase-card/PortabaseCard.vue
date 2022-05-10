<template>
	<router-link :to="'/' + to" :class="class" class="inline-flex grow relative h-48 px-7 py-8 rounded-20px focus:outline-none">
		<div>
			<div class="flex flex-col">
				<h4 class="inline-flex text-header-four font-bold antialiased">{{ title }} <Img :src="src" alt="" /></h4>
				<slot name="details"></slot>
			</div>

			<div class="flex flex-col items-left" v-if="showPlaceholderSVG">
				<!--
					Image svg here
					width, height (including div container) and position will need to be adjusted as assets not provided
					<img src="*.svg" class="w-32 h-32 absolute -bottom-6"/>
				-->
				<Img class="w-48 h-48 absolute -left-6 -bottom-10" src="./assets/svg/other/placeholder.svg" alt="" />
			</div>
		</div>
	</router-link>
</template>

<script>
import Img from '../../dom-elements/Img.vue'

export default {
	components: {
		Img
	},
	props: {
		to: String,
		class: String,
		title: String,
		src: {
			type: String,
			default: './assets/svg/other/arrow-right-up.svg'
		},
		showPlaceholderSVG: {
			type: Boolean,
			default: false
		},
	}
}
</script>