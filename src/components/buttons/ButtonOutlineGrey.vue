<!-- TODO: bg color for default, hover & focus -->
<template>
	<button
		type="submit"
		:class="class"
		class="
			justify-center
			rounded-full
			font-semibold text-gray-500
			antialiased leading-none
			border border-gray-500
			bg-white
			hover:border-black
			focus:border-purple-500
			focus:text-purple-500
		">{{ text }}</button>
</template>

<script>
export default {
	props: {
		class: {
			type: String,
			default: 'w-full text-sm py-4'
		},
		text: String
	}
}
</script>