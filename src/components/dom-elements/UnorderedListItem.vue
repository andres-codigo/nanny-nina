<template>
	<li>
		<div class="flex flex-row border-b border-b-gray-50 py-4 ml-2">
			<div class="basis-1/2 font-semibold">{{ title }}</div>
			<div class="basis-1/2 text-right">{{ value }}</div>
		</div>
	</li>
</template>
<script>
export default {
	props: {
		title: {
			type: String,
			default: ''
		},
		value: {
			type: String,
			default: ''
		},
	}
}
</script>