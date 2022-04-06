<template>
	<div>
		<main>
			<div class="h-full flex flex-col mx-4">
				<ApplyDetails />

				<hr class="border-1 border-gray-50 my-6" />

				<Preferences class="mt-7" />

				<hr class="border-1 border-gray-50 my-6" />

				<Photos class="mt-7" />

				<hr class="border-1 border-gray-50 my-6" />

				<Reviews class="mt-7">
					<template #title>
						<h5 class="text-header-five font-bold antialiased mb-7">What Others Say</h5>
					</template>
				</Reviews>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation/TopNavigation.vue'
import ApplyDetails from './fold/ApplyDetails.vue'
import Preferences from '../../../../../components/profile/Preferences.vue'
import Photos from '../../../../../components/profile/photos/Photos.vue'
import Reviews from '../../../../../components/profile/Reviews.vue'

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
