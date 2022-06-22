<template>
	<h5 :class="class">
		<slot name="title">{{ title }}</slot>
	</h5>
	<p class="text-sm font-light">{{ description }}</p>

	<div class="mt-7">
		<div class="grid gap-2 grid-cols-3 items-center place-items-center mb-10">
			<div><MultipleUploadItem /></div>
			<div><MultipleUploadItem /></div>
			<div><MultipleUploadItem /></div>
			<div><MultipleUploadItem /></div>
			<div><MultipleUploadItem /></div>
			<div><MultipleUploadItem /></div>
		</div>
		<p class="text-xs font-light text-center text-gray-500">Size limit for each 5MB</p>
	</div>
</template>

<script>
import MultipleUploadItem from './MultipleUploadItem.vue'

export default {
	components: {
		MultipleUploadItem
	},
	props: {
		class: {
			type: String,
			default: 'text-header-five font-semibold antialiased mb-2'
		},
		title: String,
		description: String
	}
}
</script>