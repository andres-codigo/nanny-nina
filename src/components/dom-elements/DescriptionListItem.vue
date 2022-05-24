<template>
	<div class="py-4 flex">
		<dt class="flex-grow text-sm">{{ term }}</dt>
		<dd class="flex-shrink-0 mt-1 text-sm text-gray-900">
			<slot name="termDescription">&euro;25</slot>
		</dd>
	</div>
</template>
<script>
export default {
	props: {
		term: {
			type: String,
			default: 'Total Rewards Earned'
		}
	}
}
</script>