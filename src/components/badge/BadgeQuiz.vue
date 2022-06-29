<template>
	<span :class="['inline-flex justify-center rounded-full text-xs leading-none cursor-pointer mx-1 my-1 px-4 py-2', badgeSelected ? 'text-white border border-purple-500 bg-purple-500 hover:bg-gray-50 hover:border-purple-900 hover:text-purple-900 focus:bg-gray-100 focus:border-purple-900' : 'text-purple-900 border border-purple-900 hover:bg-gray-50 focus:bg-gray-100']">
		<span class="inline-flex text-base select-none">{{ text }}</span>
	</span>
</template>

<script>
export default {
	props: {
		text: {
			type: String,
			default: 'Default text'
		},
		badgeSelected: {
			type: Boolean,
			default: false
		}
	}
}
</script>