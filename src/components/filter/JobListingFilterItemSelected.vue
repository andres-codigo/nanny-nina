<template>
	<div class="flex flex-nowrap">
		<span class="
			inline-flex
			justify-center
			rounded-full
			text-xs
			leading-none
			bg-purple-500
			text-white
			w-button-xs
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
