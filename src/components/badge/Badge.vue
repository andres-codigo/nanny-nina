<template>
	<span :class="classes" class="inline-flex items-center px-3 rounded-full">
		<span>
			{{ text }}
		</span>
	</span>
</template>

<script>
export default {
	props: {
		text: {
			type: String,
			default: '',
		},
		classes: {
			type: String,
			default: 'bg-gray-50 font-semibold my-2 mr-2 py-1.5 px-5',
		},
	},
}
</script>
