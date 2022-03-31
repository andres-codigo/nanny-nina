<template>
	<div class="flex flex-col my-14">
		<h5 class="text-header-five font-bold antialiased mb-7">What Others Say</h5>
		<div class="flex overflow-x-scroll pb-10 no-scrollbar">
			<div class="flex flex-nowrap">
				<div class="inline-block px-1">
					<ReviewCard user="Sophie D" date="24 /03/2021" />
				</div>

				<div class="inline-block px-1">
					<ReviewCard user="Rebecca" date="24 /03/2021" />
				</div>

				<div class="inline-block px-1">
					<ReviewCard user="Amanda" date="24 /03/2021" />
				</div>
			</div>
		</div>
		<div class="flex">
			<div class="flex-none"><a href="#" class="font-semibold text-purple-500 anchor-with-underline">Show all reviews</a></div>
			<div class="inline-flex items-center justify-center pl-1"><ChevronRightIcon class="w-5 h-5 text-purple-500" /></div>
		</div>
	</div>
</template>

<script>
import ReviewCard from '../../../../../../components/cards/ReviewCard.vue'

import { ChevronRightIcon } from '@heroicons/vue/solid'

export default {
	components: {
		ReviewCard,
		ChevronRightIcon
	}
}
</script>