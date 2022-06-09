<!-- TODO: default and focus color numbers -->
<template>
	<div>
		<label for="for-dev-not-prod" class="block text-sm font-light text-purple-800 pl-4 pb-1">{{ labelText }}</label>
		<select
			:id="this.id"
			name="for-dev-not-prod"
			:class="class"
			class="
				appearance-none block w-full
				px-3 py-2
				border border-gray-400 rounded-full
				text-gray-400
				focus:outline-none focus:ring-0 focus:border-black
			"
		>
			<option>{{ optionText }}</option>
		</select>
	</div>
</template>

<script>
export default {
	data () {
		return {
			id: Math.ceil(Math.random()*10000)
		}
	},
	props: {
		labelText: String,
		optionText: {
			type: String,
			default: 'Select an option'
		},
		class: {
			type: String,
			default: 'w-full'
		}
	}
}
</script>