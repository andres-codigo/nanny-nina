<template>
	<div class="flex flex-nowrap">
		<span
			class="inline-flex justify-center items-center rounded-full text-white font-bold leading-none border border-purple-500 bg-purple-500 w-10 h-10 cursor-pointer mx-2 py-1"
		>
			<span class="inline-flex text-xs">{{ text }}</span>
		</span>
	</div>
</template>

<script>
export default {
	props: {
		text: {
			type: String,
			default: '',
		},
	},
}
</script>
