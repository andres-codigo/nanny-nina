<template>
	<div class="w-full">
		<TopNavigation backgroundColor="bg-white" :dropShadow="true" headerColor="text-purple-900" text="New Request">
			<template #iconLeft><router-link to="/dashboard"><ChevronLeftIcon class="w-8 h-8 text-purple-900" aria-hidden="true" /></router-link></template>
			<template #iconRight><DotsVerticalIcon class="w-6 h-6 text-purple-900" aria-hidden="true" /></template>
		</TopNavigation>
		<main>
			<div class="h-full flex flex-col mx-4">
				<ParentCard :parentDetails="parentDetails" />

				<hr class="border-1 border-gray-50 my-6" />

				<ParentNeeds :parentDetails="parentDetails" />

				<hr class="border-1 border-gray-50 my-6" />

				<RequestNote />

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
import ParentCard from '../../../../../components/profile/parent-card/ParentCard.vue'
import ParentNeeds from '../../../../../components/profile/parent-needs/ParentNeeds.vue'
import FixedApplicationContent from '../../../../../components/profile/FixedApplicationContent.vue'
import RequestNote from '../../../../../components/profile/RequestNote.vue'
import Preferences from '../../../../../components/profile/Preferences.vue'
import Photos from '../../../../../components/profile/photos/Photos.vue'
import Reviews from '../../../../../components/profile/Reviews.vue'

import { ChevronLeftIcon, DotsVerticalIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		ParentCard,
		ParentNeeds,
		FixedApplicationContent,
		RequestNote,
		Preferences,
		Photos,
		Reviews,
		ChevronLeftIcon,
		DotsVerticalIcon
	},
	data() {
    	return {
      		parentDetails: [
				{
					bookingType: 'Recurring booking',
					duration: '6 months'
				}
			]
		}
	}
}
</script>
