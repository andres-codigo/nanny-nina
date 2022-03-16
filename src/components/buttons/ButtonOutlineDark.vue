<!-- TODO: bg colour for default, hover & focus -->
<template>
	<button
		type="submit"
		class="
			w-full justify-center
			py-3
			rounded-full
			text-md font-semibold text-black
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