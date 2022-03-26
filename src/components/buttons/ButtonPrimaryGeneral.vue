<template>
	<button
		type="submit"
		:class="
			['w-full justify-center py-2 rounded-full text-xl font-bold antialiased leading-none',
			textColor,
			backgroundColor,
			textColorHover,
			backgroundColorHover,
			textColorFocus,
			backgroundColorFocus]
		">{{ text }}</button>
</template>

<script>
export default {
	props: {
		text: String,
		class: String,
		textColor: String,
		backgroundColor: String,
		textColorHover: String,
		backgroundColorHover: String,
		textColorFocus: String,
		backgroundColorFocus: String,
	}
}
</script>