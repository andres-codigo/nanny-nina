<template>
	<div class="w-full h-full">
		<TopNavigation text="Booking">
			<template #iconRight><QuestionMarkCircleIcon class="w-6 h-6 text-green-500" aria-hidden="true" /></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col">
				<Tabs
					tabOneClasses="border-transparent text-gray-500 border-b-2 hover:text-gray-700 hover:border-gray-300"
					tabOneText="Invites"
					:tabOneIsActive="false"
					tabTwoClasses="text-purple-900"
					tabTwoText="Matches"
					:tabTwoIsActive="true"
				/>

				<div class="flex flex-col pt-6 pb-12 mx-4">
					<h4 class="text-header-four font-semibold antialiased mb-2">Your Matches</h4>
					<p class="font-light text-gray-500 antialiased">All childminder bookings go to Portabase. To submit your hours & process payments please go here</p>
				</div>

				<div class="flex flex-col pb-20 px-12">
					<PortabaseCard backgroundColor="bg-lilac-100" header="Portabase">
						<!-- TODO: Need hover and focus hex values for anchor on lilac 100 background -->
						<template #link><AnchorOutlineLight text="Go to Portabase" class="w-button-xl text-xl py-4 border-gray-500" /></template>
					</PortabaseCard>
				</div>

				<div class="flex justify-center mb-20">
					<Img src="./assets/svg/logo/portabase.svg" class="w-24 h-20" />
				</div>


			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation-and-tabs/TopNavigation.vue'
import Tabs from '../../../../../components/navigation-and-tabs/Tabs.vue'
import PortabaseCard from '../../../../../components/cards/portabase-card/PortabaseCard.vue'
import AnchorOutlineLight from '../../../../../components/dom-elements/AnchorOutlineLight.vue'
import Img from '../../../../../components/dom-elements/Img.vue'

import { QuestionMarkCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		Tabs,
		PortabaseCard,
		AnchorOutlineLight,
		Img,
		QuestionMarkCircleIcon
	}
}
</script>