<template>
	<div class="flex flex-nowrap">
		<span class="
			inline-flex justify-center items-center
			rounded-full
			text-purple-900 font-bold leading-none
			border-0
			cursor-pointer
			w-10 h-10
			mx-2 py-1
			hover:bg-gray-50
			focus:bg-gray-100
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
