<template>
	<div class="w-full h-full">
		<TopNavigation text="Nanny Jobs">
			<template #iconLeft><router-link to="/dashboard"><ChevronLeftIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<JobListingFilter>
				<template #filter-one><JobListingFilterItem text="Distance" /></template>
				<template #filter-two><JobListingFilterItem text="Start Date" /></template>
				<template #filter-three><JobListingFilterItem text="Price" /></template>
				<template #filter-four><JobListingFilterItem text="One time" /></template>
			</JobListingFilter>
		</main>
		<footer>
			<BottomMenu />
		</footer>
	</div>
</template>

<script>
import TopNavigation from '../../../../components/navigation/TopNavigation.vue'

import JobListingFilter from '../../../../components/filter/JobListingFilter.vue'
import JobListingFilterItem from '../../../../components/filter/JobListingFilterItem.vue'

import BottomMenu from '../../../../components/menu/BottomMenu.vue'

import { ChevronLeftIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		JobListingFilter,
		JobListingFilterItem,
		BottomMenu,
		ChevronLeftIcon
	}
}
</script>