<template>
	<button
		type="submit"
		:class="class"
		disabled
		class="
			justify-center
			rounded-full
			font-bold text-gray-500
			antialiased leading-none
			disabled:bg-gray-100
		">{{ text }}</button>
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