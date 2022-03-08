<template>
	<label for="email" class="block text-sm font-light text-gray-700 pl-4">{{ text }}</label>
	<div class="mt-1">
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
				px-3 py-2
				border border-gray-300 rounded-full shadow-sm
				placeholder-gray-400
				focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
			/>
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