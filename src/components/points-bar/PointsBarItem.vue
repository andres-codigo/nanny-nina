<template>
	<li class="relative pr-[21.5%]" v-if="!isLastStep">
		<div class="absolute inset-0 flex items-center" aria-hidden="true">
			<div :class="['h-1 w-full', pointsGained ? 'bg-purple-500' : 'bg-gray-200']"></div>
		</div>
		<div :class="['relative w-3 h-3 flex items-center justify-center rounded-full', pointsGained || pointsToBeGained ? 'bg-purple-500': 'bg-gray-500']">
			<span :class="['h-2.5 w-2.5 rounded-full', pointsToBeGained ? 'bg-purple-500': 'bg-gray-500']" aria-hidden="true" v-if="!pointsGained"></span>
			<span class="sr-only">{{ pointsGainedText }}</span>
		</div>
	</li>
	<li class="relative" v-else>
		<!-- Points remaining to be gained step -->
		<div class="absolute inset-0 flex items-center" aria-hidden="true">
			<div class="h-1 w-full bg-gray-200"></div>
		</div>
		<div class="group relative w-3 h-3 flex items-center justify-center bg-gray-500 rounded-full">
			<span class="h-2.5 w-2.5 bg-gray-500 rounded-full" aria-hidden="true"></span>
			<span class="sr-only">250 Points Gained</span>
		</div>
	</li>
</template>

<script>
export default {
	props: {
		pointsGained: {
			type: Boolean,
			default: false
		},
		pointsToBeGained: {
			type: Boolean,
			default: false
		},
		pointsGainedText: {
			type: String,
			default: '50 Points Gained'
		},
		isLastStep: {
			type: Boolean,
			default: false
		}
	}
}
</script>
