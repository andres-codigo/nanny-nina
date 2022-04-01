<template>
	<div class="flex flex-nowrap">
		<span class="justify-center rounded-full text-purple-900 text-xs leading-none border border-purple-900 inline-flex w-button-xs mx-1 px-2 py-1">
			<span class="inline-flex text-xs">{{ text }}</span>
		</span>
	</div>
</template>

<script>
export default {
	props: {
		text: String
	}
}
</script>
