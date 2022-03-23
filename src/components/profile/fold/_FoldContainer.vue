<template>
	<div>
		<ApplyDetails />

		<hr class="my-6" />

		<Preferences />

		<hr class="my-6" />

		<Photos />

		<hr class="my-6" />

		<Reviews />
	</div>
</template>

<script>
import ApplyDetails from './ApplyDetails.vue'
import Preferences from './Preferences.vue'
import Photos from './photos/Photos.vue'
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