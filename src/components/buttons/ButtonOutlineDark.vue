<!-- TODO: bg color for default, hover & focus -->
<template>
	<button
		type="submit"
		:class="class"
		class="
			justify-center
			rounded-full
			font-bold
			antialiased
			border
			hover:border-lilac-900
			focus:border-lilac-500
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
			default: 'w-full py-4 text-xl'
		},
		text: String
	}
}
</script>