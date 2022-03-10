<script setup>
import MultipleUploadItem from './MultipleUploadItem.vue'
</script>

<template>
	<h2 class="mb-2 text-left text-2xl font-normal text-gray-900">Upload more pictures</h2>
	<h3	h3 class="font-light">Add more pictures of you with kids/home</h3>

	<div class="mt-7">
		<div class="flex flex-nowrap items-center justify-center gap-3 mb-6">
			<MultipleUploadItem />
			<MultipleUploadItem />
			<MultipleUploadItem />
		</div>
		<p class="text-sm font-light text-center text-gray-500">Size limit for each 5MB</p>
	</div>
</template>