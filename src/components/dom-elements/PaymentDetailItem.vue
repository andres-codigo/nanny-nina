<template>
	<div :class="class" class="flex items-center">
		<div :class="['flex-grow', itemContainsPrice ? 'font-semibold' : 'text-sm']">{{ itemDetails }}</div>
		<div :class="['flex-shrink-0 text-gray-900', itemContainsPrice ? 'font-medium' : 'text-sm']" v-if="showPrice">
			<slot name="termDescription">&euro;25</slot>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		class: {
			type: String,
			default: ''
		},
		itemDetails: {
			type: String,
			default: 'Total Rewards Earned'
		},
		itemContainsPrice: {
			type: Boolean,
			default: false
		},
		showPrice: {
			type: Boolean,
			default: true
		}
	}
}
</script>