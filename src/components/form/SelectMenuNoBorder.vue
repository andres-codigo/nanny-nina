<!-- TODO: default and focus color numbers -->
<template>
	<div>
		<label for="for-dev-not-prod" class="block text-sm font-light text-purple-800 pl-4 pb-1">{{ labelText }}</label>
		<select
			id="for-dev-not-prod"
			name="for-dev-not-prod"
			:class="class"
			class="
				select-no-border-lg
				appearance-none block w-full
				text-2xl leading-7
				font-semibold
				border-none
				focus:outline-none focus:ring-0 focus:border-black
			"
		>
			<option>{{ optionTextOne }}</option>
			<option v-if="optionTextTwo && optionTextTwo.length > 0">{{ optionTextTwo }}</option>
			<option v-if="optionTextThree && optionTextThree.length > 0">{{ optionTextThree }}</option>
		</select>
	</div>
</template>

<script>
export default {
	props: {
		labelText: String,
		optionTextOne: {
			type: String,
			default: 'Select an option'
		},
		optionTextTwo: {
			type: String,
			default: ''
		},
		optionTextThree: {
			type: String,
			default: ''
		},
		class: {
			type: String,
			default: 'w-full'
		}
	}
}
</script>