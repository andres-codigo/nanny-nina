<template>
	<h5 class="mb-2 text-left text-header-five text-gray-900 font-semibold antialiased">Upload Profile Picture</h5>
	<p	class="text-sm font-light">Please upload a clear and happy picture, for higher responses. If you have a pet or kid in it even better!</p>

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
