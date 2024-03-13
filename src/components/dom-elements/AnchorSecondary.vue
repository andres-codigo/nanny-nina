<template>
	<a
		:href="url"
		:target="hrefTarget"
		:class="classes"
		class="inline-flex justify-center rounded-full text-purple-900 font-bold antialiased leading-none bg-green-500 hover:bg-green-400 focus:bg-green-600"
		>{{ text }}</a
	>
</template>

<script>
export default {
	props: {
		url: {
			type: String,
			default: '#',
		},
		hrefTarget: {
			type: String,
			default: '_self',
		},
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
