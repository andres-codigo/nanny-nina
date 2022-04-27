<template>
	<div class="flex flex-nowrap">
		<span class="
			inline-flex justify-center
			rounded-full
			text-xs text-white leading-none
			bg-purple-500
			w-button-xs
			cursor-pointer
			mx-1 px-2 py-1
			">
			<span class="inline-flex text-xs">{{ text }}</span>
		</span>
	</div>
</template>

<script>
export default {
	props: {
		text: String
	}
}
</script>
