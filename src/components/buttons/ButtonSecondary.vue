<template>
	<button
		type="submit"
		class="
			w-full justify-center
			py-3
			rounded-full
			text-md font-semibold text-black
			antialiased
			bg-green-500
			hover:bg-green-600
			focus:bg-green-400
		">{{ text }}</button>
</template>

<script>
export default {
	props: {
		text: String
	}
}
</script>