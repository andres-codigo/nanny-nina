<template>
	<div class="w-full h-full">
		<TopNavigation text="Promotions">
			<template #iconLeft
				><router-link to="'/dashboard?tab=1"
					><ChevronLeftIcon
						class="w-8 h-8 text-white"
						aria-hidden="true" /></router-link
			></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col mx-4">
				<JobListingFilter>
					<template #filter-one
						><JobListingFilterItemSelected text="Location"
					/></template>
					<template #filter-two
						><JobListingFilterItem text="One-time"
					/></template>
					<template #filter-three
						><JobListingFilterItem text="Recurring"
					/></template>
					<template #filter-four
						><JobListingFilterItem text="[filter type]"
					/></template>
				</JobListingFilter>

				<div class="flex flex-col py-6">
					<h4 class="text-header-four font-semibold antialiased mb-2">
						This week's promotions
					</h4>
					<p class="font-light antialiased">
						Locations you can earn more this week
					</p>
				</div>

				<div class="mb-10">
					<PromotionsCard
						badge-text="Recurring"
						badge-svg="./assets/svg/badges/lock.svg"
						badge-class="bg-green-500 text-purple-900 w-28"
						user="Almera: 7 days left"
					/>
					<PromotionsCard
						background-color="bg-lilac-50"
						badge-text="Recurring"
						badge-class="bg-lilac-50 text-purple-900 w-28"
						user="Utretch: 2 days left"
					>
						<template #promotionalHeader>+€2/hr</template>
					</PromotionsCard>
					<PromotionsCard
						background-color="bg-lilac-100"
						badge-text="Recurring"
						badge-svg="./assets/svg/badges/event.svg"
						badge-class="bg-lilac-100 text-purple-900 w-28"
						user="Almera: 7 days left"
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

import PromotionsCard from '../../../../../components/cards/promotions-card/PromotionsCard.vue'

import { ChevronLeftIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		JobListingFilter,
		JobListingFilterItem,
		JobListingFilterItemSelected,
		PromotionsCard,
		ChevronLeftIcon,
	},
}
</script>
