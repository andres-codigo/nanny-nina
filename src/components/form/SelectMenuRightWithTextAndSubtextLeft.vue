<template>
	<div class="flex py-4">
		<div class="min-w-0 flex-1 text-xl">
			<label class="text-purple-800 font-thin select-none">{{ text }}</label>
			<p class="text-xs text-gray-500">{{ subText }}</p>
		</div>
		<div class="ml-3 flex h-5">
			<SelectMenu optionText="1-10" class="w-24" />
		</div>
	</div>
</template>

<script>
import SelectMenu from './SelectMenu.vue'

export default {
	components: {
		SelectMenu
	},
	props: {
		text: String,
		subText: String
	}
}
</script>