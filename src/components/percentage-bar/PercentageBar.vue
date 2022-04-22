<template>
	<div class="flex pb-10">
		<div class="basis-36 relative -top-0.5">{{ title }}</div>
		<div class="py-2 relative w-full ml-4">
			<div class="h-1.5 bg-lilac-50 rounded-full">
				<div class="inline-flex absolute w-0 h-1.5 rounded-full bg-purple-500" style="width: 50%;"></div>

				<PercentageBarItem :style="{left: '0%'}">
					<template #price>&euro;10</template>
				</PercentageBarItem>

				<PercentageBarItem :style="{left: '50%'}">
					<template #price>&euro;15</template>
				</PercentageBarItem>

				<div class="absolute text-sm text-gray-500 mr-1 bottom-4 right-0">100%</div>
			</div>
		</div>
	</div>
</template>

<script>
import PercentageBarItem from './PercentageBarItem.vue'

export default {
	components: {
		PercentageBarItem
	},
	props: {
		title: String
	}
}
</script>