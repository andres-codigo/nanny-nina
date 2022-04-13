<template>
	<input
		id="date"
		name="date"
		type="type"
		autocomplete="date"
		required
		:placeholder="placeholder"
		readonly
		:class="classes"
		class="
			px-3 py-2
			border border-gray-100 placeholder:text-gray-100 rounded-full
			text-center font-thin
			focus:outline-none
		"
	>
</template>

<script>
export default {
	props: {
		placeholder: String,
		classes: {
			type: String,
			default: 'w-full'
		}
	}
}
</script>