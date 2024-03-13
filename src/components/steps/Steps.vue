<template>
	<nav class="flex mt-6 ml-4" aria-label="Progress">
		<p class="text-xs">{{ text }}</p>
		<ol role="list" class="ml-4 flex items-center space-x-2">
			<slot name="step-one"></slot>
			<slot name="step-two"></slot>
			<slot name="step-three"></slot>
			<slot name="step-four"></slot>
			<slot name="step-five"></slot>
		</ol>
	</nav>
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
