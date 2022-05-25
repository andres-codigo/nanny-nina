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
			default: 'w-full text-xl border-purple-900 hover:border-lilac-900 focus:border-lilac-500 py-4'
		},
		text: String
	}
}
</script>