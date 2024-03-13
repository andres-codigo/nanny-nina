<template>
	<h5 class="text-header-five font-semibold antialiased mb-2">{{ title }}</h5>
	<p class="text-sm font-light">{{ description }}</p>

	<div class="mt-10">
		<SinglePhotoUploadItem />
	</div>
</template>

<script>
import SinglePhotoUploadItem from './SinglePhotoUploadItem.vue'

export default {
	components: {
		SinglePhotoUploadItem,
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
