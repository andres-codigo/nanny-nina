<template>
	<div class="font-bold">Container</div>
	<ApplyDetails />
	<Preferences />
	<Photos />
	<Reviews />
</template>

<script>
import ApplyDetails from './ApplyDetails.vue'
import Preferences from './Preferences.vue'
import Photos from './Photos.vue'
import Reviews from './Reviews.vue'

export default {
	components: {
		ApplyDetails,
		Preferences,
		Photos,
		Reviews
	}
}
</script>