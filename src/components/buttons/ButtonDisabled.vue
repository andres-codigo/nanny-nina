<template>
	<button
		type="submit"
		:class="class"
		disabled
		class="
			justify-center
			rounded-full
			text-xl font-bold text-gray-500
			antialiased leading-none
			disabled:bg-gray-100
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