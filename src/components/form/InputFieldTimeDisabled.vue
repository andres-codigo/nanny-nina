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
			border border-gray-400 rounded-full
			text-sm text-center font-thin
			read-only:border-gray-100
			focus:outline-none"
	/>
</template>

<script>
export default {
	props: {
		placeholder: String
	}
}
</script>