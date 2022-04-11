<template>
	<div class="w-full">
		<main>
			<div class="h-screen flex flex-col mx-4">
				<PricingConfirmation />
				<RequestNote />

				<hr class="border-1 border-gray-50 my-6" />

				<Preferences class="mt-7" />

				<hr class="border-1 border-gray-50 my-6" />

				<Photos :showToggleButton="true" class="mt-7" />
			</div>
		</main>
	</div>
</template>

<script>
import PricingConfirmation from './PricingConfirmation.vue'
import RequestNote from './RequestNote.vue'
import Preferences from '../../../../../../components/profile/Preferences.vue'
import Photos from '../../../../../../components/profile/photos/Photos.vue'

export default {
	components: {
		PricingConfirmation,
		RequestNote,
		Preferences,
		Photos
	}
}
</script>
