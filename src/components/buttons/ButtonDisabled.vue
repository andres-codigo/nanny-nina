<template>
	<button
		type="submit"
		class="
			w-full justify-center
			py-3
			rounded-full
			text-md font-semibold text-white
			antialiased
			bg-gray-400
		">{{ text }}</button>
</template>

<script>
export default {
	props: {
		text: String
	}
}
</script>