<template>
	<button
		type="submit"
		:class="class"
		class="
			justify-center
			rounded-full
			text-xl font-bold text-white
			antialiased
			bg-lilac-500
			hover:bg-lilac-600
			focus:bg-lilac-400
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