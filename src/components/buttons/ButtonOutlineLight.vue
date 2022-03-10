<template>
	<button
		type="submit"
		class="
			w-full justify-center
			py-3
			rounded-full
			text-md font-light text-white
			border border-neutral-100
			hover:border-neutral-50
			focus:border-neutral-200
		">{{ text }}</button>
</template>

<script>
export default {
	props: {
		text: String
	}
}
</script>