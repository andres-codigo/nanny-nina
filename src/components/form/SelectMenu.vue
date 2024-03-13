<!-- TODO: default and focus color numbers -->
<template>
	<div>
		<label
			for="for-dev-not-prod"
			class="block text-sm font-light text-purple-800 pl-4 pb-1"
			>{{ labelText }}</label
		>
		<select
			:id="id"
			name="for-dev-not-prod"
			:class="classes"
			class="appearance-none block w-full px-3 py-2 border border-gray-400 rounded-full text-gray-400 focus:outline-none focus:ring-0 focus:border-black"
		>
			<option>{{ optionText }}</option>
		</select>
	</div>
</template>

<script>
export default {
	props: {
		labelText: {
			type: String,
			default: '',
		},
		optionText: {
			type: String,
			default: 'Select an option',
		},
		classes: {
			type: String,
			default: 'w-full',
		},
	},
	data() {
		return {
			id: Math.ceil(Math.random() * 10000),
		}
	},
}
</script>
