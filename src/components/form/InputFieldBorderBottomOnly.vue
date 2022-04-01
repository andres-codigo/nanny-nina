<!-- TODO: text color for label and input; hover & focus behavior for input -->
<template>
	<label for="qualification" class="hidden text-sm font-medium text-gray-500">{{ text }}</label>
	<div class="mt-0 border-b border-gray-500 focus-within:border-purple-400">
		<input
			id="qualification"
			name="qualification"
			:type="type"
			autocomplete="email"
			required=""
			:placeholder="placeholder"
			:value="value"
			class="
				block w-full
				py-3 px-0
				border-0 border-b border-transparent
				focus:border-b-purple-400 focus:ring-0
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