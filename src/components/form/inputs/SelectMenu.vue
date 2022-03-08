<template>
	<div>
		<label for="for-dev-not-prod" class="block text-sm font-light text-gray-700 pl-4">{{ text }}</label>
		<select
			id="for-dev-not-prod"
			name="for-dev-not-prod"
			class="
				appearance-none block w-full
				px-3 py-2
				border border-gray-300 rounded-full shadow-sm
				text-sm text-gray-200
				focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
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