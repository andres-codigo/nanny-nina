<template>
	<button
		type="submit"
		:class="class"
		class="
			justify-center
			rounded-full
			text-md font-semibold text-black
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
			default: 'w-full py-3'
		},
		text: String
	}
}
</script>