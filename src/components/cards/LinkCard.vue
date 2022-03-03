<template>
	<div class="flex pb-8">
		<router-link :to="'/' + to" :class="class" class="inline-flex grow relative h-60 px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2">
			<h1 class="text-3xl font-medium antialiased">{{ title }}</h1>
			<ChevronRightIcon class="absolute right-2 top-28 w-8 h-8" aria-hidden="true" />
		</router-link>
	</div>
</template>

<script>
import { ChevronRightIcon } from '@heroicons/vue/solid'

export default {
	props: {
		to: String,
		title: String,
		class: String,
	},
	components: {
		ChevronRightIcon,
	},
}
</script>