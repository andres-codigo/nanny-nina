<template>
	<div class="w-full h-full">
		<TopNavigation text="Nanny Jobs">
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
					><JobListingFilterItemSelected text="Distance"
				/></template>
				<template #filter-two
					><JobListingFilterItem text="Start Date"
				/></template>
				<template #filter-three
					><JobListingFilterItem text="Price"
				/></template>
				<template #filter-four
					><JobListingFilterItem text="One time"
				/></template>
			</JobListingFilter>

			<JobAdCard
				src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
				title="Seeking A Professional Nanny"
				responses-total="4"
				published="20mins"
			/>
			<JobAdCard
				src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
				title="Seeking A Professional Nanny In Prins Hendrikkade Area...."
				responses-total="12"
				published="1hr"
			/>
			<JobAdCard
				src="https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
				title="Looking for reliable Nanny for 3kids in Sloterdijk"
				responses-total="10"
				published="2hrs"
			/>
			<JobAdCard
				src="https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
				title="Need babysitter for Office event"
				responses-total="22"
				published="2hrs"
			/>
			<JobAdCard
				src="https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
				title="Need babysitter for Office event"
				responses-total="22"
				published="2hrs"
			/>
			<JobAdCard
				src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
				title="Need babysitter for Office event"
				responses-total="22"
				published="2hrs"
			/>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../../components/navigation-and-tabs/TopNavigation.vue'

import JobListingFilter from '../../../../../../components/filter/JobListingFilter.vue'
import JobListingFilterItem from '../../../../../../components/filter/JobListingFilterItem.vue'
import JobListingFilterItemSelected from '../../../../../../components/filter/JobListingFilterItemSelected.vue'

import JobAdCard from '../../../../../../components/cards/job-ad-card/JobAdCard.vue'

import { ChevronLeftIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		JobListingFilter,
		JobListingFilterItem,
		JobListingFilterItemSelected,
		JobAdCard,
		ChevronLeftIcon,
	},
}
</script>
