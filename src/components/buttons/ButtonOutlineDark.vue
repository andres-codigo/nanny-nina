<!-- TODO: bg color for default, hover & focus -->
<template>
	<button
		type="submit"
		:class="class"
		class="
			justify-center
			rounded-full
			font-bold text-black
			antialiased
			border border-gray-400
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
			default: 'w-full py-4 text-xl'
		},
		text: String
	}
}
</script>