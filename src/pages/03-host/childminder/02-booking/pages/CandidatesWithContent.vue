<template>
	<div class="w-full h-full">
		<TopNavigation text="Candidates(4)">
			<template #iconRight><QuestionMarkCircleIcon class="w-6 h-6 text-green-500" aria-hidden="true" /></template>
		</TopNavigation>
		<main>
			<JobListingFilter>
				<template #filter-one><JobListingFilterItemSelected text="Availability" /></template>
				<template #filter-two><JobListingFilterItem text="Strength" /></template>
				<template #filter-three><JobListingFilterItem text="Experience" /></template>
				<template #filter-four><JobListingFilterItem text="Venue" /></template>
			</JobListingFilter>
			<div class="flex flex-col mx-4">
				<div class="pt-6">
					<h4 class="text-header-four font-semibold antialiased">Your Responses</h4>
				</div>

				<div class="flex flex-col pt-6">
					<CandidateMatchCard
						:isCandidate="true"
						:showHeart="true"
						badgeSvg="./assets/svg/badges/house.svg"
						badgeClass="bg-lilac-50 text-purple-900"
						badgeText="Her home"
						bookingDate="Mon, Tue, Wed & Fri"
						bookingStartTime="Starting 23/05"
					/>

					<CandidateMatchCard
						:isCandidate="true"
						:showHeart="true"
						badgeSvg="./assets/svg/badges/hourglass.svg"
						badgeClass="bg-lilac-50 text-purple-900"
						badgeText="Your home"
						title="Meike"
						age="23yrs"
						totalExperience="Has 1 years experience"
						bookingDate="Mon, Tue, Wed & Fri"
						bookingStartTime="Starting 23/05/2022"
						bookingDuration="6-12 months"
						bookingCandidateStrength="Strength: Creative"
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

import { QuestionMarkCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		JobListingFilter,
		JobListingFilterItem,
		JobListingFilterItemSelected,
		CandidateMatchCard,
		QuestionMarkCircleIcon,
	}
}
</script>