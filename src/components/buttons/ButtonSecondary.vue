<template>
	<button
		type="submit"
		:class="classes"
		class="justify-center rounded-full text-purple-900 font-bold antialiased leading-none bg-green-500 hover:bg-green-400 focus:bg-green-600"
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
