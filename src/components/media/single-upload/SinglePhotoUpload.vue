<template>
	<h5 class="mb-2 text-left text-header-five font-normal text-gray-900">Let's put a face to your name</h5>
	<p	class="text-sm font-light">Preferably a smiling picture, if you have a pet or kid in it even better!</p>

	<div class="mt-10">
		<SinglePhotoUploadItem />
	</div>
</template>

<script>
import SinglePhotoUploadItem from './SinglePhotoUploadItem.vue'

export default {
	components: {
		SinglePhotoUploadItem
	}
}
</script>
