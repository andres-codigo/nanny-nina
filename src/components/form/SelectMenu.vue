<!-- TODO: text colour for label and input; default, hover & focus colour numbers -->
<template>
	<div>
		<label for="for-dev-not-prod" class="block text-sm font-light text-gray-500 pl-4">{{ text }}</label>
		<select
			id="for-dev-not-prod"
			name="for-dev-not-prod"
			class="
				appearance-none block w-full
				px-3 py-2
				border border-gray-400 rounded-full
				text-gray-400
				focus:outline-none focus:ring-0 focus:ring-black focus:border-black
			"
		>
			<option>Select an option</option>
		</select>
	</div>
</template>

<script>
export default {
	props: {
		text: String
	}
}
</script>