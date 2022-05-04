<template>
	<a
		:href="url"
		:target="hrefTarget"
		:class="class"
		class="
			inline-flex
			font-bold
			antialiased leading-none
			anchor-with-underline
		">
		{{ text }}</a>
</template>

<script>
export default {
	props: {
		url: {
			type: String,
			default: '#'
		},
		hrefTarget: {
			type: String,
			default: '_self'
		},
		class: {
			type: String,
			default: 'text-purple-900'
		},
		text: String
	}
}
</script>