<template>
	<div class="flex flex-nowrap">
		<span class="
			inline-flex
			justify-center
			rounded-full
			text-purple-900
			text-xs
			bg-gray-100
			leading-none
			border border-purple-900
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
