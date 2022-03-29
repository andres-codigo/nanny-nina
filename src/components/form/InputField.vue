<!-- TODO: text color for label and input; hover & focus behavior for input -->
<template>
	<label for="email" class="block text-xs font-light text-gray-700 pl-4">{{ text }}</label>
	<div class="mt-0">
		<input
			id="email"
			name="email"
			:type="type"
			autocomplete="email"
			required=""
			:placeholder="placeholder"
			:value="value"
			class="
				appearance-none block w-full
				px-3 py-3
				border border-gray-400 rounded-full
				text-sm	text-gray-600
				focus:outline-none focus:ring-0 focus:ring-purple-500 focus:border-purple-500
			"
		>
	</div>
</template>

<script>
export default {
	props: {
		text: String,
		type: String,
		value: String,
		placeholder: String
	}
}
</script>