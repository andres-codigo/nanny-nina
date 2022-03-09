<template>
	<button
		type="submit"
		class="
			w-full inline-flex justify-center
			px-5 py-2
			border border-transparent rounded-full
			text-lg font-medium text-white bg-indigo-600
			hover:border-transparent hover:text-white hover:bg-indigo-500
			active:bg-indigo-700
			focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
		>{{ text }}</button>
</template>

<script>
export default {
	props: {
		text: String
	}
}
</script>