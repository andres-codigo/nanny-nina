<template>
	<div class="justify-self-start">
		<div class="pr-4 text-sm text-right text-gray-500" v-if="showSentDate">Today</div>
		<div class="px-3 py-3 text-sm font-light bg-purple-50 rounded-bl-3xl x rounded-r-3xl">{{ message}}</div>
	</div>
</template>

<script>
export default {
	props: {
		message: {
			type: String,
			default: 'Sent message example'
		},
		showSentDate: {
			type: Boolean,
			default: false
		}
	}
}
</script>