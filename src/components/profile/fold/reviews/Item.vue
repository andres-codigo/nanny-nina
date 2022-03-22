<template>
	<div class="px-3 py-4 w-64 h-48 overflow-hidden rounded-lg border">
		<div class="flex mb-2">
			<div class="basis-2/3">
				<div class="grid grid-rows-2">
					<div class="font-semibold">{{ user }}</div>
					<div class="text-xs text-gray-400">{{ date }}</div>
				</div>
			</div>
			<div class="basis-1/3 mr-3">
				<div class="grid grid-cols-5 gap-2">
					<div><StarIcon class="w-5 h-5 text-yellow-400" /></div>
					<div><StarIcon class="w-5 h-5 text-yellow-400" /></div>
					<div><StarIcon class="w-5 h-5 text-yellow-400" /></div>
					<div><StarIcon class="w-5 h-5 text-yellow-400" /></div>
					<div><StarIcon class="w-5 h-5 text-yellow-400" /></div>
				</div>
			</div>
		</div>
		<p class="text-sm">One of the best homes I ever visited, She is such a great professional. Very nice kids, she is careful and kind, and never gets tired of playing with them!</p>
	</div>
</template>

<script>
import { StarIcon } from '@heroicons/vue/solid'

export default {
	components: {
		StarIcon
	},
	props: {
		user: String,
		date: String
	}
}
</script>