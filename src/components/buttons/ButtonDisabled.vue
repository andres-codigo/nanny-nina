<template>
	<button
		type="submit"
		:class="class"
		class="
			justify-center
			rounded-full
			text-md font-semibold text-white
			antialiased
			bg-gray-400
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