<template>
	<button
		type="submit"
		class="
			w-full justify-center
			py-3
			rounded-full
			text-md font-light text-black
			bg-emerald-300
			hover:bg-emerald-200
			focus:bg-emerald-400
		">{{ text }}</button>
</template>

<script>
export default {
	props: {
		text: String
	}
}
</script>