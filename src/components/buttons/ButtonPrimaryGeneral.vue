<template>
	<button
		type="submit"
		:class="
			['w-full inline-flex justify-center px-5 py-2 border border-transparent rounded-full shadow-sm text-lg font-medium hover:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2',
			textColor,
			backgroundColor,
			textColorHover,
			backgroundColorHover,
			textColorActive,
			backgroundColorActive,
			textColorFocus,
			backgroundColorFocus]
		">{{ text }}</button>
</template>

<script>
export default {
	props: {
		text: String,
		textColor: String,
		backgroundColor: String,
		textColorHover: String,
		backgroundColorHover: String,
		textColorActive: String,
		backgroundColorActive: String,
		textColorFocus: String,
		backgroundColorFocus: String,
	}
}
</script>