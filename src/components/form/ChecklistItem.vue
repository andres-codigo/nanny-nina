<template>
	<div class="relative flex items-start py-4">
		<div class="min-w-0 flex-1 text-base">
			<label for="checklistItem" class="font-light text-gray-700">{{ text }}</label>
		</div>
		<div class="ml-3 flex items-center h-5">
			<input
				id="checklistItem"
				aria-describedby="checklistItem"
				name="checklistItem"
				type="checkbox"
				class="
					rounded-full
					h-5 w-5
					text-indigo-600
					focus:ring-indigo-500
					border-2 border-gray-400
				">
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