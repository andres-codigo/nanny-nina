<template>
	<button
		type="submit"
		class="
			w-20 justify-center
			py-1
			rounded-full
			text-sm font-light text-black
			border border-gray-400
			hover:border-black
			focus:border-indigo-500
		">{{ text }}</button>
</template>

<script>
export default {
	props: {
		text: String
	}
}
</script>