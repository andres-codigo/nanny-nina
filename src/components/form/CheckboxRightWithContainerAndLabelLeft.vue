<!-- TODO: focus behavior for checkbox -->
<template>
	<div class="relative flex items-start py-4">
		<div class="min-w-0 flex-1 text-xl">
			<label :for="checkboxName" class="text-lilac-900 font-thin select-none">{{ text }}</label>
		</div>
		<div class="ml-3 flex items-center h-5">
			<input
				:id="checkboxName"
				:name="checkboxName"
				type="checkbox"
				class="h-5 w-5 text-lilac-500"
			>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		text: String,
		checkboxName: String
	}
}
</script>