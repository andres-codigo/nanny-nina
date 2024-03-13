<template>
	<div class="flex mx-4 items-center pt-12 pb-10 justify-center">
		<div class="py-1 relative w-full">
			<div class="h-2 bg-gray-100 rounded-full">
				<div
					class="absolute w-0 h-2 rounded-full bg-purple-500"
					style="width: 50%"
				></div>

				<PriceRangeItem :style="{ left: '0%' }">
					<template #price>&euro;10</template>
				</PriceRangeItem>

				<PriceRangeItem :style="{ left: '50%' }">
					<template #price>&euro;15</template>
				</PriceRangeItem>

				<div
					class="absolute text-sm text-gray-500 mr-1 bottom-4 right-0"
				>
					&euro;25
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import PriceRangeItem from './PriceRangeItem.vue'

export default {
	components: {
		PriceRangeItem,
	},
}
</script>
