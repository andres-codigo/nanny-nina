<template>
	<button
		type="submit"
		:class="
			['w-full inline-flex justify-center px-5 py-2 border border-transparent rounded-full shadow-sm text-lg font-medium hover:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2',
			textColour,
			backgroundColor,
			textColourHover,
			backgroundColorHover,
			backgroundColorFocus]
		">{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: String,
	textColour: String,
	backgroundColor: String,
	textColourHover: String,
	backgroundColorHover: String,
	backgroundColorFocus: String,
  }
}
</script>