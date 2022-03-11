<template>
	<button
		type="submit"
		class="
			w-full justify-center
			py-3
			rounded-full
			text-md font-light text-white
			bg-gray-400
			hover:bg-indigo-500
			focus:bg-indigo-700
		">{{ text }}</button>
</template>

<script>
export default {
	props: {
		text: String
	}
}
</script>