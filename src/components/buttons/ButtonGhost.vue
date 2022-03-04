<template>
	<button
		type="submit"
		class="
			px-5 py-2
			text-lg font-medium underline hover:no-underline"
		>{{ text }}</button>
</template>

<script>
export default {
	props: {
		text: String
	}
}
</script>