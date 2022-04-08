<template>
	<textarea
		:rows="rows"
		:name="name"
		:id="id"
		class="
			block w-full
			rounded-30px
			border border-gray-100
			text-gray-600
			focus:outline-none focus:ring-0 focus:border-purple-500">
	</textarea>
	<div class="text-sm text-gray-500 text-right font-light">0/{{ characterNumber }}</div>
</template>

<script>
export default {
	props: {
		rows: {
			type: String,
			default: '8'
		},
		name: String,
		id: String,
		characterNumber: {
			type: String,
			default: '280'
		}
	}
}
</script>