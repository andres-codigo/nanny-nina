<!-- TODO: focus behavior for radio -->
<template>
	<div
		:class="[
			'relative flex items-center',
			sideBySideRadioButtons ? 'py-2' : '',
			isQuestionOne ? '' : 'pt-2',
		]"
	>
		<div class="min-w-0 flex-1">
			<label for="radio" class="font-light text-purple-800">{{
				text
			}}</label>
		</div>
		<div class="ml-3 flex items-center h-5">
			<input
				id="radio"
				aria-describedby="radio"
				name="radio"
				type="radio"
				class="rounded-full h-4 w-4 text-purple-500 checked:ring-2 checked:ring-offset-2 checked:ring-purple-400 checked:bg-none focus:ring-purple-400 border-1 border-gray-400"
			/>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		text: {
			type: String,
			default: '',
		},
		sideBySideRadioButtons: Boolean,
		isQuestionOne: Boolean,
	},
}
</script>
