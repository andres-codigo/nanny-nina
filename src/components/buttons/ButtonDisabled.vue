<template>
	<button
		type="submit"
		:class="classes"
		disabled
		class="justify-center rounded-full font-bold text-gray-500 antialiased leading-none disabled:bg-gray-100"
	>
		{{ text }}
	</button>
</template>

<script>
export default {
	props: {
		classes: {
			type: String,
			default: 'w-full text-xl py-4',
		},
		text: {
			type: String,
			default: '',
		},
	},
}
</script>
