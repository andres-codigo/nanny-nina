<template>
	<button
		type="submit"
		:class="class"
		class="
			justify-center
			rounded-full
			text-purple-900 text-xl font-bold
			antialiased leading-none
			bg-green-500
			hover:bg-green-400
			focus:bg-green-600
		">{{ text }}</button>
</template>

<script>
export default {
	props: {
		class: {
			type: String,
			default: 'w-full py-4'
		},
		text: String
	}
}
</script>