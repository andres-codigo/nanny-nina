<template>
	<input
		id="date"
		name="date"
		type="type"
		autocomplete="date"
		required
		:placeholder="placeholder"
		readonly
		class="
			w-full
			px-3 py-2
			border border-gray-50 placeholder:text-gray-50 rounded-full
			text-center font-thin
			focus:outline-none
		"
	>
</template>

<script>
export default {
	props: {
		placeholder: String
	}
}
</script>