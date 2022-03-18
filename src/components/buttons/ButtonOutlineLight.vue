<!-- TODO: bg colour for default, hover & focus -->
<template>
	<button
		type="submit"
		:class="class"
		class="
			justify-center
			rounded-full
			text-md font-semibold text-white
			antialiased
			border border-neutral-100
			hover:border-neutral-50
			focus:border-neutral-200
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