<template>
	<div>
		<TopNavigation backgroundColor="bg-white" :dropShadow="true" headerColor="text-purple-900" text="Request Overview">
			<template #iconLeft><router-link to="/dashboard"><ChevronLeftIcon class="w-8 h-8 text-purple-900" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<div class="h-full flex flex-col mx-4 mt-4">
				<NannyRequestDetails :parentDetails="parentDetails" />
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../components/navigation/TopNavigation.vue'
import NannyRequestDetails from '../../../../components/profile/nanny-request/NannyRequestDetails.vue'

import { ChevronLeftIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		NannyRequestDetails,
		ChevronLeftIcon
	},
	data() {
    	return {
      		parentDetails: [
				{
					bookingType: 'One-time booking',
					duration: '2 days'
				}
			]
		}
	}
}
</script>
