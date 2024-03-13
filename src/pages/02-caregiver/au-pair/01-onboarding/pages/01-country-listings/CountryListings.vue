<template>
	<div class="w-full h-full">
		<TopNavigation text="Host Families">
			<template #iconLeft
				><router-link to="/dashboard?tab=2"
					><ChevronLeftIcon
						class="w-8 h-8 text-white"
						aria-hidden="true" /></router-link
			></template>
		</TopNavigation>
		<main>
			<JobListingFilter>
				<template #filter-one
					><JobListingFilterItemSelected text="Language"
				/></template>
				<template #filter-two
					><JobListingFilterItem text="Start Date"
				/></template>
				<template #filter-three
					><JobListingFilterItem text="Region"
				/></template>
				<template #filter-four
					><JobListingFilterItem text="Duration"
				/></template>
			</JobListingFilter>

			<div class="h-full pt-6 mx-4">
				<div class="mb-6">
					<h5 class="text-header-five font-semibold antialiased mb-2">
						Find your host
					</h5>
				</div>

				<AuPairCard />

				<AuPairCard />

				<AuPairCard />
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../../components/navigation-and-tabs/TopNavigation.vue'

import JobListingFilter from '../../../../../../components/filter/JobListingFilter.vue'
import JobListingFilterItem from '../../../../../../components/filter/JobListingFilterItem.vue'
import JobListingFilterItemSelected from '../../../../../../components/filter/JobListingFilterItemSelected.vue'

import AuPairCard from '../../../../../../components/cards/au-pair-card/AuPairCard.vue'

import { ChevronLeftIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		JobListingFilter,
		JobListingFilterItem,
		JobListingFilterItemSelected,
		AuPairCard,
		ChevronLeftIcon,
	},
}
</script>
