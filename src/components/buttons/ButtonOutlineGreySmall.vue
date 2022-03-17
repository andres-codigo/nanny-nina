<!-- TODO: bg colour for default, hover & focus -->
<template>
	<button
		type="submit"
		class="
			w-20 justify-center
			py-2
			rounded-full
			text-sm font-semibold text-gray-500
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
		text: String
	}
}
</script>