<!-- TODO: bg color for default, hover & focus -->
<template>
	<button
		type="submit"
		:class="class"
		class="
			justify-center
			rounded-full
			text-purple-900 text-xl font-bold
			antialiased
			underline
			hover:text-purple-400
			focus:text-purple-500
			focus:bg-white"
		>{{ text }}</button>
</template>

<script>
export default {
	props: {
		class: {
			type: String,
			default: 'w-full py-4 text-black'
		},
		text: String
	}
}
</script>