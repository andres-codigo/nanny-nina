<template>
	<button
		type="submit"
		:class="class"
		class="justify-center antialiased font-bold leading-none text-white bg-purple-500 rounded-full  hover:bg-purple-400 focus:bg-purple-600">
		<slot name="leadingIcon"></slot>
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