<template>
	<a
		:href="url"
		:target="hrefTarget"
		:class="[
			'inline-flex antialiased leading-none anchor-with-underline',
			textColorClass,
		]"
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
		textColorClass: {
			type: String,
			default: 'anchor-black',
		},
		text: {
			type: String,
			default: '',
		},
	},
}
</script>
