<!-- TODO: bg colour for default, hover & focus -->
<template>
	<button
		type="submit"
		class="
			w-full justify-center
			py-3
			rounded-full
			text-md font-semibold text-black
			antialiased
			no-underline
			hover:underline hover:bg-gray-600
			focus:bg-white"
		>{{ text }}</button>
</template>

<script>
export default {
	props: {
		text: String
	}
}
</script>