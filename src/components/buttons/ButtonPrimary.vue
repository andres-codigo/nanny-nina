<template>
	<button
		type="submit"
		:class="class"
		class="
			justify-center
			rounded-full
			text-white font-bold
			antialiased leading-none
			bg-purple-500
			hover:bg-purple-400
			focus:bg-purple-600
		">
		{{ text }}</button>
</template>

<script>
export default {
	props: {
		class: {
			type: String,
			default: 'w-full text-xl py-4'
		},
		text: String
	}
}
</script>