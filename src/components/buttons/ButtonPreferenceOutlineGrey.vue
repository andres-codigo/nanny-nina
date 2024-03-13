<template>
	<button
		type="submit"
		:class="classes"
		class="justify-center rounded-full font-semibold text-gray-500 antialiased leading-none border border-gray-500 bg-white hover:border-purple-500 focus:bg-purple-500 focus:text-white"
	>
		{{ text }}
	</button>
</template>

<script>
export default {
	props: {
		classes: {
			type: String,
			default: 'w-full text-sm py-4',
		},
		text: {
			type: String,
			default: '',
		},
	},
}
</script>
