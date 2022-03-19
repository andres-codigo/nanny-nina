<template>
	<h5 class="mb-2 text-left text-header-five font-normal text-gray-900">Upload Introductory Video <span class="text-sm text-gray-500">(Optional)</span></h5>

	<div class="mt-10">
		<SingleVideoUploadItem />
	</div>
</template>

<script>
import SingleVideoUploadItem from './SingleVideoUploadItem.vue'

export default {
	components: {
		SingleVideoUploadItem
	}
}
</script>
