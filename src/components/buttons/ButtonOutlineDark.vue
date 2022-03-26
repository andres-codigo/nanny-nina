<!-- TODO: bg color for default, hover & focus -->
<template>
	<button
		type="submit"
		:class="class"
		class="
			justify-center
			rounded-full
			text-purple-900 font-bold
			antialiased leading-none
			border
			hover:border-purple-900
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