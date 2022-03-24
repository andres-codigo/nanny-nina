<template>
	<router-link :to="'/' + to" :class="['w-full text-center hover:text-lilac-400 focus:text-lilac-600 ', selectedClass]">
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