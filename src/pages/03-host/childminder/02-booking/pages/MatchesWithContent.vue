<template>
	<div class="w-full h-full">
		<TopNavigation text="Booking">
			<template #iconRight><QuestionMarkCircleIcon class="w-6 h-6 text-green-500" aria-hidden="true" /></template>
		</TopNavigation>
		<main>
			<Tabs
				tabOneClasses="border-transparent text-gray-500 border-b-2 hover:text-gray-700 hover:border-gray-300"
				tabOneText="Responses"
				:tabOneIsActive="false"
				tabTwoClasses="text-purple-900"
				tabTwoText="Matches"
				:tabTwoIsActive="true"
			/>
			<div class="flex flex-col mx-4">
				<div class="pt-6 mb-4">
					<h4 class="text-header-four font-semibold antialiased">Your Matches</h4>
				</div>

				<div class="flex flex-col pb-8">
					<CandidateMatchCard
						:showHeart="true"
						badgeClass="bg-lilac-50 text-purple-900"
						badgeText="6 days left"
						bookingPrice="Payment due: €60"
					/>

					<CandidateMatchCard
						:showHeart="true"
						badgeSvg="./assets/svg/badges/hourglass.svg"
						badgeClass="bg-green-400 text-purple-900"
						badgeText="Recurring"
					/>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation-and-tabs/TopNavigation.vue'
import Tabs from '../../../../../components/navigation-and-tabs/Tabs.vue'
import Img from '../../../../../components/dom-elements/Img.vue'
import CandidateMatchCard from '../../../../../components/cards/candidate-match-card/CandidateMatchCard.vue'

import { QuestionMarkCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		Tabs,
		Img,
		CandidateMatchCard,
		QuestionMarkCircleIcon
	}
}
</script>