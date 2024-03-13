<template>
	<div class="flex flex-nowrap">
		<span
			class="inline-flex justify-center rounded-full text-purple-900 text-xs leading-none border border-purple-900 w-button-xs cursor-pointer mx-1 py-1 hover:bg-gray-50 focus:bg-gray-100"
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
