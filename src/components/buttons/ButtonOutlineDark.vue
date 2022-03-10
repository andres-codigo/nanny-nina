<template>
	<button
		type="submit"
		class="
			w-full justify-center
			py-3
			rounded-full
			text-md font-light text-black
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