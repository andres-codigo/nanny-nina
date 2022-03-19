<template>
	<div class="flex flex-wrap grow gap-y-6 sm:gap-x-4 w-full h-full">
		<AddressForm01 class="min-w-450-for-dev-not-prod max-w-450-for-dev-not-prod" />
		<MediaUploadPhoto02 class="min-w-360-for-dev-not-prod max-w-450-for-dev-not-prod" />
	</div>
</template>

<script>
import AddressForm01 from './pages/AddressForm01.vue'
import MediaUploadPhoto02 from './pages/MediaUploadPhoto02.vue'

export default {
	components: {
		AddressForm01,
		MediaUploadPhoto02
	}
}
</script>