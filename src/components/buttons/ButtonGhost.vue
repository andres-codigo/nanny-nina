<!-- TODO: bg color for default, hover & focus -->
<template>
	<button
		type="submit"
		:class="class"
		class="
			justify-center
			rounded-full
			text-xl font-bold antialiased
			underline
			hover:no-underline
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