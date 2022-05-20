<template>
	<span :class="['inline-flex items-center px-5 py-1.5 mr-2 my-2 rounded-full', isMatchingPreference ? 'bg-purple-100' : 'bg-gray-50']">
		<slot name="icon"></slot>
		<span class="pl-2">
			{{ text }}
		</span>
	</span>
</template>

<script>
export default {
	props: {
		text: String,
		isMatchingPreference: Boolean
	}
}
</script>