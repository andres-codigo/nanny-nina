<template>
	<span :class="['h-1 w-1 rounded-full mx-1', color]"></span>
</template>

<script>
export default {
	props: {
		color: {
			type: String,
			default: 'bg-purple-900'
		},
	}
}
</script>