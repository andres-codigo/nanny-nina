<script setup>
import BioForm01 from './pages/BioForm01.vue'
import MediaUploadPhoto02 from './pages/MediaUploadPhoto02.vue'
</script>

<template>
	<div class="flex flex-wrap grow gap-y-6 sm:gap-x-4 w-full h-full">
		<BioForm01 class="min-w-450-for-dev-not-prod max-w-450-for-dev-not-prod" />
		<MediaUploadPhoto02 class="min-w-360-for-dev-not-prod max-w-450-for-dev-not-prod" />
	</div>
</template>