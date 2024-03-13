<template>
	<h5 class="text-header-five font-semibold antialiased mb-2">
		<slot name="title">{{ title }}</slot>
	</h5>
	<p class="text-sm font-light">{{ description }}</p>

	<div class="mt-7">
		<div class="flex flex-nowrap items-center justify-center gap-3 mb-10">
			<MultipleUploadItem />
			<MultipleUploadItem />
			<MultipleUploadItem />
		</div>
		<p class="text-xs font-light text-center text-gray-500">
			Size limit for each 5MB
		</p>
	</div>
</template>

<script>
import MultipleUploadItem from './MultipleUploadItem.vue'

export default {
	components: {
		MultipleUploadItem,
	},
	props: {
		title: {
			type: String,
			default: '',
		},
		description: {
			type: String,
			default: '',
		},
	},
}
</script>
