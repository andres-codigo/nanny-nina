<template>
	<div class="w-full h-full">
		<TopNavigation text="Candidates(4)">
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
			<JobListingFilter>
				<template #filter-one
					><JobListingFilterItemSelected text="Availability"
				/></template>
				<template #filter-two
					><JobListingFilterItem text="Strength"
				/></template>
				<template #filter-three
					><JobListingFilterItem text="Experience"
				/></template>
				<template #filter-four
					><JobListingFilterItem text="Venue"
				/></template>
			</JobListingFilter>
			<div class="flex flex-col mx-4">
				<div class="pt-6">
					<h4 class="text-header-four font-semibold antialiased">
						Your Responses
					</h4>
				</div>

				<div class="flex flex-col pt-6">
					<CandidateMatchCard
						:is-candidate="true"
						:show-heart="true"
						badge-svg="./assets/svg/badges/house.svg"
						badge-class="bg-lilac-50 text-purple-900"
						badge-text="Her home"
						booking-date="Mon, Tue, Wed & Fri"
						booking-start-time="Starting 23/05"
					/>

					<CandidateMatchCard
						:is-candidate="true"
						:show-heart="true"
						badge-svg="./assets/svg/badges/hourglass.svg"
						badge-class="bg-lilac-50 text-purple-900"
						badge-text="Your home"
						title="Meike"
						age="23yrs"
						total-experience="Has 1 years experience"
						booking-date="Mon, Tue, Wed & Fri"
						booking-start-time="Starting 23/05/2022"
						booking-duration="6-12 months"
						booking-candidate-strength="Strength: Creative"
					/>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation-and-tabs/TopNavigation.vue'

import JobListingFilter from '../../../../../components/filter/JobListingFilter.vue'
import JobListingFilterItem from '../../../../../components/filter/JobListingFilterItem.vue'
import JobListingFilterItemSelected from '../../../../../components/filter/JobListingFilterItemSelected.vue'

import CandidateMatchCard from '../../../../../components/cards/candidate-match-card/CandidateMatchCard.vue'

import { ChevronLeftIcon, QuestionMarkCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		JobListingFilter,
		JobListingFilterItem,
		JobListingFilterItemSelected,
		CandidateMatchCard,
		ChevronLeftIcon,
		QuestionMarkCircleIcon,
	},
}
</script>
