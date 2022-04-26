<template>
	<div class="w-full h-full">
		<TopNavigation text="Host Families">
			<template #iconLeft><router-link to="/dashboard"><ChevronLeftIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<JobListingFilter>
				<template #filter-one><JobListingFilterItemSelected text="Language" /></template>
				<template #filter-two><JobListingFilterItem text="Start Date" /></template>
				<template #filter-three><JobListingFilterItem text="Region" /></template>
				<template #filter-four><JobListingFilterItem text="Duration" /></template>
			</JobListingFilter>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../../components/navigation-and-tabs/TopNavigation.vue'

import JobListingFilter from '../../../../../../components/filter/JobListingFilter.vue'
import JobListingFilterItem from '../../../../../../components/filter/JobListingFilterItem.vue'
import JobListingFilterItemSelected from '../../../../../../components/filter/JobListingFilterItemSelected.vue'

import { ChevronLeftIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		JobListingFilter,
		JobListingFilterItem,
		JobListingFilterItemSelected,
		ChevronLeftIcon
	}
}
</script>