<!-- TODO: bg color for default, hover & focus -->
<template>
	<button
		type="submit"
		:class="class"
		class="
			justify-center
			rounded-full
			font-bold
			antialiased leading-none
			anchor-black
			anchor-with-underline"
		>{{ text }}</button>
</template>

<script>
export default {
	props: {
		class: {
			type: String,
			default: 'w-full text-purple-900 py-4'
		},
		text: String
	}
}
</script>