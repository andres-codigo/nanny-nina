<!-- TODO: text color for label and input; default, hover & focus color numbers -->
<template>
	<div>
		<label for="for-dev-not-prod" class="block text-sm font-light text-purple-800 pl-4">{{ labelText }}</label>
		<select
			id="for-dev-not-prod"
			name="for-dev-not-prod"
			:class="class"
			class="
				appearance-none block w-full
				px-3 py-3
				border border-gray-400 rounded-full
				text-sm	 text-gray-400
				focus:outline-none focus:ring-0 focus:border-black
			"
		>
			<option>Select an option</option>
		</select>
	</div>
</template>

<script>
export default {
	props: {
		labelText: String,
		class: {
			type: String,
			default: 'w-full'
		}
	}
}
</script>