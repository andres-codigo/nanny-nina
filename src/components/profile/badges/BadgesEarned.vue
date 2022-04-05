<template>
	<div :class="class" class="flex flex-col">
		<slot name="title"></slot>
		<slot name="badges"></slot>
	</div>
</template>

<script>
export default {
	props: {
		class: String
	}
}
</script>