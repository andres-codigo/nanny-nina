<!-- TODO: bg color for default, hover & focus -->
<template>
	<button
		type="submit"
		:class="class"
		class="
			justify-center
			rounded-full
			text-md font-semibold antialiased
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
			default: 'w-full py-3 text-black'
		},
		text: String
	}
}
</script>