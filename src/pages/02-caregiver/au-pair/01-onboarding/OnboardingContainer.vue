<template>
	<div class="flex flex-wrap grow gap-y-6 gap-x-4">
		<Reference class="max-w-450-for-dev-not-prod" />
		<Home class="max-w-450-for-dev-not-prod" />
		<MediaUploadPhoto class="max-w-450-for-dev-not-prod" />
	</div>
</template>

<script>
import Reference from './pages/Reference.vue'
import Home from './pages/Home.vue'
import MediaUploadPhoto from './pages/MediaUploadPhoto.vue'

export default {
	components: {
		Reference,
		Home,
		MediaUploadPhoto
	}
}
</script>