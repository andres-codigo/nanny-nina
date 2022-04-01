<template>
	<div>
		<main>
			<div class="h-full flex flex-col mx-4">
				<ApplyDetails />

				<hr class="border-1 border-gray-50 my-6" />

				<Preferences />

				<hr class="border-1 border-gray-50 my-6" />

				<Photos />

				<hr class="border-1 border-gray-50 my-6" />

				<Reviews />
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation/TopNavigation.vue'
import ApplyDetails from './fold/ApplyDetails.vue'
import Preferences from './fold/Preferences.vue'
import Photos from './fold/photos/Photos.vue'
import Reviews from './fold/Reviews.vue'

import { ChevronLeftIcon, DotsVerticalIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		ApplyDetails,
		Preferences,
		Photos,
		Reviews,
		ChevronLeftIcon,
		DotsVerticalIcon
	}
}
</script>
