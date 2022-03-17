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
			border border-gray-400 rounded-full
			text-sm text-center font-thin
			read-only:border-gray-100
			focus:outline-none focus:ring-0 focus:ring-blue-500 focus:border-blue-500"
	/>
</template>

<script>
export default {
	props: {
		value: String
	}
}
</script>