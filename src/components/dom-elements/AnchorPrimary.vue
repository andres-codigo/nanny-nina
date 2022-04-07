<template>
	<a
		:href="url"
		:target="hrefTarget"
		:class="class"
		class="
			inline-flex
			justify-center
			rounded-full
			text-white font-bold
			antialiased leading-none
			bg-purple-500
			hover:bg-purple-400
			focus:bg-purple-600
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
			default: 'w-full text-xl py-4'
		},
		text: String
	}
}
</script>