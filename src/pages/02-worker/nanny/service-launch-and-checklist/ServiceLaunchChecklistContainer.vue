<script setup>
import ServiceLaunchScreen01 from './pages/ServiceLaunchScreen01.vue'
import Checklist02 from './pages/Checklist02.vue'
import MediaUploadPhoto03 from './pages/MediaUploadPhoto03.vue'
import MediaUploadVideo04 from './pages/MediaUploadVideo04.vue'
import ResidenceCardOrID from './pages/ResidenceCardOrID.vue'
</script>

<template>
	<div class="flex flex-wrap grow gap-y-6 sm:gap-x-4 w-full h-full">
		<ServiceLaunchScreen01 class="min-w-360-for-dev-not-prod max-w-450-for-dev-not-prod" />
		<Checklist02 class="min-w-450-for-dev-not-prod max-w-450-for-dev-not-prod" />
		<MediaUploadPhoto03 class="min-w-360-for-dev-not-prod max-w-450-for-dev-not-prod" />
		<MediaUploadVideo04 class="min-w-450-for-dev-not-prod max-w-450-for-dev-not-prod" />
		<ResidenceCardOrID class="min-w-450-for-dev-not-prod max-w-450-for-dev-not-prod" />
	</div>
</template>