<template>
	<div>
		Container
		<ApplyDetails />
		<Preferences />
		<Photos />
		<Reviews />
	</div>
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