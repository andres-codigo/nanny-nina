<template>
	<a
		:href="url"
		:target="hrefTarget"
		:class="classes"
		class="inline-flex justify-center rounded-full text-gray-500 font-bold antialiased leading-none bg-gray-100"
	>
		{{ text }}</a
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
