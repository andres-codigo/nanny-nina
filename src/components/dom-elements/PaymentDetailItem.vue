<template>
	<div :class="class" class="flex items-center">
		<div :class="['flex-grow text-sm', isBold ? 'font-semibold' : '']">{{ term }}</div>
		<div :class="['flex-shrink-0 text-gray-900', isBold ? 'font-semibold' : 'text-sm mt-1']" v-if="showPrice">
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
		term: {
			type: String,
			default: 'Total Rewards Earned'
		},
		isBold: {
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