<template>
	<a
		:href="url"
		:target="hrefTarget"
		:class="classes"
		class="inline-flex justify-center rounded-full font-semibold antialiased leading-none border"
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
			default: 'w-full text-xl py-4 text-white border-white',
		},
		text: {
			type: String,
			default: '',
		},
	},
}
</script>
