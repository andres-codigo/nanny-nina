<!-- TODO: focus behavior for checkbox -->
<template>
	<div class="relative flex py-4">
		<div class="mr-4 inline-flex items-center">
			<input
				:id="id"
				:name="checkboxName"
				type="checkbox"
				:class="inputClass"
				:checked="checked"
				class="checked:bg-purple-600 checked:ring-1 checked:ring-offset-0 checked:ring-gray-400 focus:bg-gray-700 focus:ring-0 focus:ring-offset-0 focus:ring-gray-400 border-1 border-gray-400"
			/>
		</div>
		<div :class="labelContainerClass" class="min-w-0 flex-1">
			<label :for="checkboxName" class="select-none">
				<slot name="text"></slot>
			</label>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		inputClass: {
			type: String,
			default: 'h-5 w-5 text-purple-500',
		},
		labelContainerClass: {
			type: String,
			default: 'text-sm font-thin',
		},
		checked: {
			type: Boolean,
			default: false,
		},
		checkboxName: {
			type: String,
			default: '',
		},
	},
	data() {
		return {
			id: Math.ceil(Math.random() * 10000),
		}
	},
}
</script>
