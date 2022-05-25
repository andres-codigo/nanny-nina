<template>
	<router-link :to="'/' + to" :class="['w-full text-center', selectedClass]">
		<slot></slot>
		<span class="block text-xs">{{ text }}</span>
	</router-link>
</template>

<script>
export default {
	props: {
		to: String,
		text: String,
		selectedClass: String
	}
}
</script>