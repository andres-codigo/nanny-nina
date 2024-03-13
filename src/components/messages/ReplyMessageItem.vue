<template>
	<div class="justify-self-end">
		<div
			class="px-3 py-3 ml-12 text-sm font-light text-white bg-purple-500 justify-self-end rounded-l-3xl x rounded-br-3xl"
		>
			{{ message }}
		</div>
		<div
			v-if="showMessageReadSeen"
			class="pt-2 pr-1 text-sm text-right text-gray-500"
		>
			{{ messageReadSeen }}
		</div>
	</div>
</template>

<script>
export default {
	props: {
		message: {
			type: String,
			default: 'Reply message example',
		},
		showMessageReadSeen: {
			type: Boolean,
			default: false,
		},
		messageReadSeen: {
			type: String,
			default: 'Read',
		},
	},
}
</script>
