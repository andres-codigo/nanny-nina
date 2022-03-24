<!-- TODO: text size, color for label and input; hover & focus behavior for input -->
<template>
	<label for="motivation" class="sr-only">{{ text }}</label>
	<p	class="text-sm font-light text-gray-500">For example, <span class="italic">"My name is John Doe, I am a student at UVA, I enjoy cooking, riding a bike , I have 10years work experience etc."</span></p>
	<div class="mt-2">
		<textarea
			rows="8"
			:name="name"
			:id="id"
			class="
				block w-full
				rounded-lg
				border border-gray-400
				text-sm	text-gray-600
				focus:outline-none focus:ring-0 focus:ring-lilac-500 focus:border-lilac-500">
		</textarea>
		<div class="font-light text-gray-500 text-right">0/280</div>
	</div>
</template>

<script>
export default {
	props: {
		text: String,
		name: String,
		id: String
	}
}
</script>