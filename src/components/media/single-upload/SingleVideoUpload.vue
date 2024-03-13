<template>
	<h5 class="text-header-five font-semibold antialiased mb-2">
		Upload Introductory Video
		<span class="text-sm text-gray-500">(Optional)</span>
	</h5>
	<p class="text-sm font-light">
		When you upload a short introduction yourself, you have 80% more chance
		to be chosen for the job
	</p>

	<div class="mt-10">
		<SingleVideoUploadItem />
	</div>
</template>

<script>
import SingleVideoUploadItem from './SingleVideoUploadItem.vue'

export default {
	components: {
		SingleVideoUploadItem,
	},
}
</script>
