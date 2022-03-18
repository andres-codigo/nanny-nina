<!-- TODO: focus behavior for radio -->
<template>
	<div class="relative flex items-start py-2">
		<div class="min-w-0 flex-1">
			<label for="radio" class="font-light text-gray-700">{{ text }}</label>
		</div>
		<div class="ml-3 flex items-center h-5">
			<input
				id="radio"
				aria-describedby="radio"
				name="radio"
				type="radio"
				class="
					rounded-full
					h-5 w-5
					text-blue-500
					checked:ring-1 checked:ring-offset-2 checked:ring-gray-400 checked:bg-none
					focus:ring-gray-400
					border-1 border-gray-400"
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