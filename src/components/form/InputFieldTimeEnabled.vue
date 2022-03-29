<template>
	<input
		id="date"
		name="date"
		type="text"
		autocomplete="date"
		required
		:value="value"
		class="
			w-full
			px-3 py-2
			border border-gray-500 rounded-full
			text-center font-thin
			read-only:border-gray-100
			focus:outline-none focus:ring-0 focus:ring-lilac-500 focus:border-lilac-500
		"
	>
</template>

<script>
export default {
	props: {
		value: String
	}
}
</script>