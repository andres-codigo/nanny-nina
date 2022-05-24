<template>
	<div :class="class" class="flex">
		<dt :class="['flex-grow text-sm', isBold ? 'font-semibold' : '']">{{ term }}</dt>
		<dd :class="['flex-shrink-0 mt-1 text-gray-900', isBold ? 'font-semibold' : 'text-sm']">
			<slot name="termDescription">&euro;25</slot>
		</dd>
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
	}
}
</script>