<template>
	<router-link :to="'/' + to" :class="class" class="inline-flex grow relative h-60 px-7 py-8 rounded-20px focus:outline-none">
		<div class="flex" v-if="hasPrice">
			<div class="basis-2/3">
				<h2 class="text-header-two font-bold antialiased">{{ title }}</h2>
				<slot name="details"></slot>
			</div>
			<div class="basis-1/3 text-right font-semibold">
				<span class="inline-flex text-right leading-7">
					<slot name="price"></slot>
				</span>
			</div>
		</div>

		<div v-else>
			<h2 class="text-header-two font-bold antialiased">{{ title }}</h2>
			<slot name="details"></slot>
		</div>

		<!--
			Image svg here
			width, height and bottom position may need to be adjusted
			<img src="*.svg" class="w-32 h-32 absolute -bottom-6"/>
		-->
		<ChevronRightIcon class="absolute right-2 top-28 w-8 h-8" aria-hidden="true" />
	</router-link>
</template>

<script>
import { ChevronRightIcon } from '@heroicons/vue/solid'

export default {
	components: {
		ChevronRightIcon,
	},
	props: {
		to: String,
		title: String,
		content: String,
		class: String,
		hasPrice: {
			type: Boolean,
			default: false
		}
	}
}
</script>