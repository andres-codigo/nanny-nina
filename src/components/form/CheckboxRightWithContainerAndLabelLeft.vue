<!-- TODO: focus behavior for checkbox -->
<template>
	<div class="flex py-4">
		<div class="min-w-0 flex-1 text-xl">
			<label :for="checkboxName" class="text-purple-800 font-thin select-none">{{ text }}</label>
			<p :class="['text-xs text-gray-500', showSubText ? '' : 'hidden']">{{ subText }}</p>
		</div>
		<div class="ml-3 flex items-center h-5">
			<input
				:id="checkboxName"
				:name="checkboxName"
				:checked="checked"
				type="checkbox"
				class="h-5 w-5 text-purple-500"
			>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		text: String,
		subText: String,
		showSubText: {
			type: Boolean,
			default: false
		},
		checked: {
			type: Boolean,
			default: false
		},
		checkboxName: String
	}
}
</script>