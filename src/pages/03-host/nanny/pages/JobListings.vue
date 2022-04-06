<template>
	<div class="w-full h-full">
		<TopNavigation text="Nanny">
			<template #iconLeft><router-link to="/dashboard"><ChevronLeftIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<JobListingFilter>
				<template #filter-one><JobListingFilterItem text="Distance" /></template>
				<template #filter-two><JobListingFilterItem text="Start Date" /></template>
				<template #filter-three><JobListingFilterItem text="Price" /></template>
				<template #filter-four><JobListingFilterItem text="One time" /></template>
			</JobListingFilter>

			<JobAdNannyCard
				src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
				title="Brittany (27)"
				availability="Available to work"
			/>
			<JobAdNannyCard
				src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
				title="Sadiat (18)"
				:filledHeart="true"
				availability="Available from 4pm"
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

			<div class="flex flex-col justify-center items-center my-6">
				<ButtonOutlineDark class="w-button-lg text-sm text-gray-500 leading-5 py-4" text="Load Next 10" />
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../components/navigation/TopNavigation.vue'

import JobListingFilter from '../../../../components/filter/JobListingFilter.vue'
import JobListingFilterItem from '../../../../components/filter/JobListingFilterItem.vue'

import JobAdNannyCard from '../../../../components/cards/JobAdNannyCard.vue'

import ButtonOutlineDark from '../../../../components/buttons/ButtonOutlineDark.vue'

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