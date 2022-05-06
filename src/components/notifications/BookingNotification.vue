<template>
	<div class="flex h-28 bg-purple-500">
		<div class="inline-flex justify-center items-center ml-4 w-12 h-28">
			<img class="h-7 w-7 rounded-full" :src="src" alt="">
		</div>
		<div class="grow h-28 inline-flex items-center">
			<div class="block">
				<p class="text-white font-semibold antialiased">{{ title }}</p>
				<a href="#" target="_self" class="text-center text-green-500 font-thin anchor-with-underline">{{ linkTitle }} ></a>
			</div>
		</div>
		<div class="inline-flex justify-center w-14 h-28 mt-4 cursor-pointer">
			<XCircleIcon class=" w-6 h-6 text-white" aria-hidden="true" />
		</div>
	</div>
</template>

<script>
import { XCircleIcon, ChevronRightIcon } from '@heroicons/vue/solid'

export default {
	components: {
		XCircleIcon,
		ChevronRightIcon
	},
	props: {
		src: String,
		title: String,
		linkTitle: {
			type: String,
			default: 'Review'
		}
	}
}
</script>