<template>
	<div class="w-full">
		<TopNavigation
			background-color="bg-white"
			:display-border-bottom="true"
			header-color="text-purple-900"
			text="New Request"
		>
			<template #iconLeft
				><router-link to="/dashboard?tab=2"
					><ChevronLeftIcon
						class="w-8 h-8 text-purple-900"
						aria-hidden="true" /></router-link
			></template>
			<template #iconRight
				><DotsVerticalIcon
					class="w-6 h-6 text-purple-900"
					aria-hidden="true"
			/></template>
		</TopNavigation>
		<main>
			<div class="h-full flex flex-col mx-4">
				<ParentCard :parent-details="parentDetails" />

				<hr class="border-1 border-gray-50 my-6" />

				<ParentNeeds :parent-details="parentDetails" />

				<hr class="border-1 border-gray-50 my-6" />

				<RequestNote />

				<hr class="border-1 border-gray-50 my-6" />

				<Preferences classes="mt-7" />

				<hr class="border-1 border-gray-50 my-6" />

				<Photos class="mt-7" />

				<hr class="border-1 border-gray-50 my-6" />

				<Reviews classes="mt-7">
					<template #title>
						<h5
							class="text-header-five font-semibold antialiased mb-7"
						>
							What Others Say
						</h5>
					</template>
				</Reviews>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation-and-tabs/TopNavigation.vue'
import ParentCard from './parent-card/_ParentCard.vue'
import ParentNeeds from './_ParentNeeds.vue'
import RequestNote from '../../../../../components/profile/view/RequestNote.vue'
import Preferences from '../../../../../components/profile/view/Preferences.vue'
import Photos from '../../../../../components/profile/_photos/Photos.vue'
import Reviews from '../../../../../components/profile/view/Reviews.vue'

import { ChevronLeftIcon, DotsVerticalIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		ParentCard,
		ParentNeeds,
		RequestNote,
		Preferences,
		Photos,
		Reviews,
		ChevronLeftIcon,
		DotsVerticalIcon,
	},
	data() {
		return {
			parentDetails: [
				{
					bookingType: 'One-time booking',
					duration: '2 days',
				},
			],
		}
	},
}
</script>
