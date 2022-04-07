<!-- TODO: focus behavior for checkbox -->
<template>
	<div class="relative flex items-start py-4">
		<div class="mr-2 flex items-center h-5">
			<input
				:id="checkboxName"
				:name="checkboxName"
				type="checkbox"
				class="
					h-3 w-3
					text-purple-500
					checked:ring-1 checked:ring-offset-2 checked:ring-gray-400
					focus:ring-gray-400
					border-1 border-gray-400
				"
			>
		</div>
		<div :class="classes" class="min-w-0 flex-1">
			<label :for="checkboxName" class="select-none">
				<slot name="text"></slot>
			</label>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		classes: {
			type: String,
			default: 'text-xs font-thin'
		},
		checkboxName: String
	}
}
</script>