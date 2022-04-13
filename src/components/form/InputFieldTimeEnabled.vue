<template>
	<input
		id="date"
		name="date"
		type="text"
		autocomplete="date"
		required
		:value="value"
		:class="classes"
		class="
			px-3 py-2
			border border-gray-500 rounded-full
			text-center text-purple-900 font-thin
			focus:outline-none focus:ring-0 focus:border-purple-500
		"
	>
</template>

<script>
export default {
	props: {
		value: String,
		classes: {
			type: String,
			default: 'w-full'
		}
	}
}
</script>