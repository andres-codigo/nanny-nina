<!-- TODO: focus behavior for checkbox -->
<template>
	<div class="relative flex items-start py-4">
		<div class="min-w-0 flex-1 text-xl">
			<label for="checkbox-1" class="font-thin select-none">{{ text }}</label>
		</div>
		<div class="ml-3 flex items-center h-5">
			<input
				id="checkbox-1"
				name="checkbox-1"
				type="checkbox"
				class="
					h-5 w-5
					text-lilac-500
					checked:ring-1 checked:ring-offset-2 checked:ring-gray-400
					focus:ring-gray-400
					border-1 border-gray-400
				"
			>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		text: String
	}
}
</script>