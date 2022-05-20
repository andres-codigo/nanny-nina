<template>
	<div :class="class" class="flex flex-col">
		<slot name="title"></slot>
		<div class="flex overflow-x-scroll pb-10 no-scrollbar">
			<div class="flex flex-nowrap">
				<div class="inline-block px-1">
					<ReviewCard class="text-sm" user="Sophie D" date="24/03/2021" />
				</div>

				<div class="inline-block px-1">
					<ReviewCard class="text-sm" user="Rebecca" date="24/03/2021" />
				</div>

				<div class="inline-block px-1">
					<ReviewCard class="text-sm" user="Amanda" date="24/03/2021" />
				</div>
			</div>
		</div>
		<a href="#" target="_self" class="font-semibold anchor-blue anchor-with-underline">All reviews ></a>
	</div>
</template>

<script>
import ReviewCard from '../../cards/review-card/ReviewCard.vue'

import { ChevronRightIcon } from '@heroicons/vue/solid'

export default {
	components: {
		ReviewCard,
		ChevronRightIcon
	},
	props: {
		class: String
	}
}
</script>