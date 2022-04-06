<template>
	<div :class="class" class="flex flex-col">
		<h5 class="text-header-five font-bold antialiased">{{ title }}</h5>
		<slot name="content"></slot>
	</div>
</template>

<script>
export default {
	props: {
		class: String,
		title: String
	}
}
</script>