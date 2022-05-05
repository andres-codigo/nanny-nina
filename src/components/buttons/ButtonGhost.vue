<!-- TODO: bg color for default, hover & focus -->
<template>
	<button
		type="submit"
		:class="class"
		class="
			justify-center
			rounded-full
			text-lilac-900 font-bold
			antialiased leading-none
			underline
			hover:text-lilac-400
			focus:text-lilac-500"
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