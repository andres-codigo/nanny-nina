<template>
	<button
		type="submit"
		:class="class"
		class="
			justify-center
			rounded-full
			text-white font-bold
			antialiased leading-none
			bg-lilac-500
			hover:bg-lilac-400
			focus:bg-lilac-600
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