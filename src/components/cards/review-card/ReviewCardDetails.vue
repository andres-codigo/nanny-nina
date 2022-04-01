<template>
	<div class="flex mb-2">
			<div class="basis-2/3">
				<div class="grid grid-rows-2">
					<div class="font-semibold">{{ user }}</div>
					<div class="text-xs text-gray-500">{{ date }}</div>
				</div>
			</div>
			<div class="basis-1/3 mr-3">
				<div class="relative -r-20 w-20">
					<div class="grid grid-cols-5 gap-2">
						<div><StarIcon class="w-5 h-5 text-yellow-400" /></div>
						<div><StarIcon class="w-5 h-5 text-yellow-400" /></div>
						<div><StarIcon class="w-5 h-5 text-yellow-400" /></div>
						<div><StarIcon class="w-5 h-5 text-gray-100" /></div>
						<div><StarIcon class="w-5 h-5 text-gray-100" /></div>
					</div>
				</div>
			</div>
		</div>
		<p :class="class">One of the best homes I ever visited, She is such a great professional. Very nice kids, she is careful and kind, and never gets tired of playing with them!</p>
</template>

<script>
import { StarIcon } from '@heroicons/vue/solid'

export default {
	components: {
		StarIcon
	},
	props: {
		user: String,
		date: String,
		class: String
	}
}
</script>