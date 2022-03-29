<template>
	<h5 class="mb-2 text-left text-header-five text-gray-900 font-semibold antialiased">Upload Introductory Video <span class="text-sm text-gray-500">(Optional)</span></h5>
	<p	class="text-sm font-light">When you upload a short introduction yourself, you have 80% more chance to be chosen for the job</p>

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
