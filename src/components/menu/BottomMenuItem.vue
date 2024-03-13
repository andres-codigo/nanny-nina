<template>
	<router-link :to="'/' + to" :class="['w-full text-center', selectedClass]">
		<slot></slot>
		<span class="block text-xs">{{ text }}</span>
	</router-link>
</template>

<script>
export default {
	props: {
		to: {
			type: String,
			default: '',
		},
		text: {
			type: String,
			default: '',
		},
		selectedClass: {
			type: String,
			default: '',
		},
	},
}
</script>
