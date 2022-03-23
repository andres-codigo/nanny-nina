<template>
	<button
		type="submit"
		:class="class"
		class="
			justify-center
			rounded-full
			text-xl font-bold text-black
			antialiased
			bg-green-500
			hover:bg-green-600
			focus:bg-green-400
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