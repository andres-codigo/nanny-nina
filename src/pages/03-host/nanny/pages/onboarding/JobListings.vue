<template>
	<div class="w-full">
		<TopNavigation text="Nanny">
			<template #iconLeft><router-link to="/dashboard"><ChevronLeftIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<div class="h-full">
				<JobListingFilter>
					<template #filter-one><JobListingFilterItem text="Last minute" /></template>
					<template #filter-two><JobListingFilterItem text="Recurring" /></template>
					<template #filter-three><JobListingFilterItem text="Distance" /></template>
					<template #filter-four><JobListingFilterItem text="Start Date" /></template>
					<template #filter-five><JobListingFilterItem text="Price" /></template>
					<template #filter-six><JobListingFilterItem text="One time" /></template>
				</JobListingFilter>

				<!--
					FYI, Tjardo/Aliu, please note that this is a combination of JobListing and Active Explore

					Job Listing Filter options - Distance, Start Date, Price and One Time
					Active Explore - Last minute and Recurring

					'Suggested JobAdNannyCards are is for the 'Active Explore' designs
				-->
				<JobAdNannyCard
					src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
					title="Brittany (27)"
					availability="Available to work now"
					:suggestedNanny="true"
				/>
				<JobAdNannyCard
					src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
					title="Sadiat (18)"
					:filledHeart="true"
					availability="Available from 4pm"
					:suggestedNanny="true"
				/>
				<JobAdNannyCard
					src="https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
					title="Maud (22)"
					availability="Available from 8pm tomorrow"
				/>
				<JobAdNannyCard
					src="https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
					title="Nour (25)"
					availability="Available Mon, Tues, Thurs"
				/>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation-and-tabs/TopNavigation.vue'

import JobListingFilter from '../../../../../components/filter/JobListingFilter.vue'
import JobListingFilterItem from '../../../../../components/filter/JobListingFilterItem.vue'

import JobAdNannyCard from '../../../../../components/cards/job-ad-card/JobAdNannyCard.vue'

import ButtonOutlineDark from '../../../../../components/buttons/ButtonOutlineDark.vue'

import { ChevronLeftIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		JobListingFilter,
		JobListingFilterItem,
		JobAdNannyCard,
		ButtonOutlineDark,
		ChevronLeftIcon
	}
}
</script>