<!-- TODO: bg colour for default, hover & focus -->
<template>
	<button
		type="submit"
		:class="class"
		class="
			justify-center
			rounded-full
			text-md text-black font-semibold antialiased
			no-underline
			hover:underline hover:bg-gray-600
			focus:bg-white"
		>{{ text }}</button>
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