<template>
	<a
		:href="url"
		:target="hrefTarget"
		:class="class"
		class="
			inline-flex
			justify-center
			rounded-full
			font-bold
			antialiased leading-none
			border
		">{{ text }}</a>
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
			default: 'w-full text-xl py-4 text-white border-white hover:border-lilac-400 focus:border-green-500'
		},
		text: String
	}
}
</script>