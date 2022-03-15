<template>
	<label for="qualification" class="hidden text-sm font-medium text-gray-700">{{ text }}</label>
	<div class="mt-1 border-b border-gray-300 focus-within:border-indigo-600">
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
				py-3
				border-0 border-b border-transparent
				focus:border-b-indigo-600 focus:ring-0"
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