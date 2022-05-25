<template>
	<div class="w-full h-full">
		<TopNavigation text="Promotions">
			<template #iconLeft><router-link to="'/dashboard?tab=1"><ChevronLeftIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col mx-4">
				<JobListingFilter>
					<template #filter-one><JobListingFilterItemSelected text="Location" /></template>
					<template #filter-two><JobListingFilterItem text="One-time" /></template>
					<template #filter-three><JobListingFilterItem text="Recurring" /></template>
					<template #filter-four><JobListingFilterItem text="[filter type]" /></template>
				</JobListingFilter>

				<div class="flex flex-col py-6">
					<h4 class="text-header-four font-semibold antialiased mb-2">This week's promotions</h4>
					<p class="font-light antialiased">Locations you can earn more this week </p>
				</div>

				<div class="mb-10">
					<PromotionsCard
						badgeText="Recurring"
						badgeSvg="./assets/svg/badges/lock.svg"
						badgeClass="bg-green-500 text-purple-900 w-28"
						user="Almera: 7 days left"
					/>
					<PromotionsCard
						backgroundColor="bg-lilac-50"
						badgeText="Recurring"
						badgeClass="bg-lilac-50 text-purple-900 w-28"
						user="Utretch: 2 days left"
					>
						<template #promotionalHeader>+€2/hr</template>
					</PromotionsCard>
					<PromotionsCard
						backgroundColor="bg-lilac-100"
						badgeText="Recurring"
						badgeSvg="./assets/svg/badges/event.svg"
						badgeClass="bg-lilac-100 text-purple-900 w-28"
						user="Almera: 7 days left"
					/>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation-and-tabs/TopNavigation.vue'
import Img from '../../../../../components/dom-elements/Img.vue'

import JobListingFilter from '../../../../../components/filter/JobListingFilter.vue'
import JobListingFilterItem from '../../../../../components/filter/JobListingFilterItem.vue'
import JobListingFilterItemSelected from '../../../../../components/filter/JobListingFilterItemSelected.vue'

import PromotionsCard from '../../../../../components/cards/promotions-card/PromotionsCard.vue'

import { ChevronLeftIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		Img,
		JobListingFilter,
		JobListingFilterItem,
		JobListingFilterItemSelected,
		PromotionsCard,
		ChevronLeftIcon
	}
}
</script>