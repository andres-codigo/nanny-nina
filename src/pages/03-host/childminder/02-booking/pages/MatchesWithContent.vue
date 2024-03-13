<template>
	<div class="w-full h-full">
		<TopNavigation text="Booking">
			<template #iconLeft
				><router-link to="/dashboard?tab=3"
					><ChevronLeftIcon
						class="w-8 h-8 text-white"
						aria-hidden="true" /></router-link
			></template>
			<template #iconRight
				><QuestionMarkCircleIcon
					class="w-6 h-6 text-green-500"
					aria-hidden="true"
			/></template>
		</TopNavigation>
		<main>
			<Tabs
				tab-one-classes="border-transparent text-gray-500 border-b-2 hover:text-gray-700 hover:border-gray-300"
				tab-one-text="Responses"
				:tab-one-is-active="false"
				tab-two-classes="text-purple-900"
				tab-two-text="Matches"
				:tab-two-is-active="true"
			/>
			<div class="flex flex-col mx-4">
				<div class="pt-6 mb-4">
					<h4 class="text-header-four font-semibold antialiased">
						Your Matches
					</h4>
				</div>

				<div class="flex flex-col pb-8">
					<CandidateMatchCard
						:show-heart="true"
						badge-class="bg-lilac-50 text-purple-900"
						badge-text="6 days left"
						booking-price="Payment due: €60"
					/>

					<CandidateMatchCard
						:show-heart="true"
						badge-svg="./assets/svg/badges/hourglass.svg"
						badge-class="bg-green-400 text-purple-900"
						badge-text="Recurring"
					/>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation-and-tabs/TopNavigation.vue'
import Tabs from '../../../../../components/navigation-and-tabs/Tabs.vue'
import CandidateMatchCard from '../../../../../components/cards/candidate-match-card/CandidateMatchCard.vue'

import { ChevronLeftIcon, QuestionMarkCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		Tabs,
		CandidateMatchCard,
		ChevronLeftIcon,
		QuestionMarkCircleIcon,
	},
}
</script>
