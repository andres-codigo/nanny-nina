<template>
	<button
		type="submit"
		:class="class"
		class="
			justify-center
			py-3
			rounded-full
			text-md font-semibold text-white
			antialiased
			bg-blue-500
			hover:bg-blue-600
			focus:bg-blue-400
		">{{ text }}</button>
</template>

<script>
export default {
	props: {
		class: {
			type: String,
			default: 'w-full'
		},
		text: String
	}
}
</script>