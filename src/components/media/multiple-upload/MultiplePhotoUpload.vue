<template>
	<h5 class="mb-2 text-left text-header-five font-normal text-gray-900">Upload more pictures</h5>
	<p class="text-sm font-light">Add more pictures of you with kids/home</p>

	<div class="mt-7">
		<div class="flex flex-nowrap items-center justify-center gap-3 mb-6">
			<MultipleUploadItem />
			<MultipleUploadItem />
			<MultipleUploadItem />
		</div>
		<p class="text-sm font-light text-center text-gray-500">Size limit for each 5MB</p>
	</div>
</template>

<script>
import MultipleUploadItem from './MultipleUploadItem.vue'

export default {
	components: {
		MultipleUploadItem
	}
}
</script>
