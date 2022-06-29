<!-- TODO: bg color for default, hover & focus -->
<template>
	<button
		type="submit"
		:class="class"
		class="
			justify-center
			rounded-full
			font-semibold
			antialiased
			border
			leading-none
		">
			<slot name="iconWithText"></slot>
			{{ text }}
		</button>
</template>

<script>
export default {
	props: {
		class: {
			type: String,
			default: 'w-full text-xl border-purple-900 hover:text-gray-500 hover:border-gray-500 focus:text-purple-600 focus:border-purple-600 py-4'
		},
		text: String
	}
}
</script>