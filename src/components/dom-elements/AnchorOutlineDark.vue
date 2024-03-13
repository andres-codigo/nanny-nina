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
			default:
				'w-full text-xl border-purple-900 hover:border-lilac-900 focus:border-lilac-500 hover:bg-green-400 focus:bg-green-600 py-4',
		},
		text: {
			type: String,
			default: '',
		},
	},
}
</script>
