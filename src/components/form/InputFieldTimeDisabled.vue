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
		class="px-3 py-2 border border-gray-100 placeholder:text-gray-100 rounded-full text-gray-500 text-center font-thin focus:outline-none cursor-default"
	/>
</template>

<script>
export default {
	props: {
		placeholder: {
			type: String,
			default: '',
		},
		classes: {
			type: String,
			default: 'w-full',
		},
	},
}
</script>
