<template>
	<div class="w-full h-full">
		<TopNavigation text="Booking">
			<template #iconLeft
				><router-link to="'/dashboard?tab=2"
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
			<Tabs
				tab-one-classes="border-transparent text-gray-500 border-b-2 hover:text-gray-700 hover:border-gray-300"
				tab-one-text="Invites"
				:tab-one-is-active="false"
				tab-two-classes="border-transparent text-gray-500 border-b-2 hover:text-gray-700 hover:border-gray-300"
				tab-two-text="Matches"
				:tab-two-is-active="false"
				:display-third-tab="true"
				tab-three-classes="text-purple-900"
				tab-three-text="Applications"
				:tab-three-is-active="true"
			/>
			<JobListingFilter>
				<template #filter-one
					><JobListingFilterItemSelected text="All bookings"
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
			<div class="flex flex-col pb-28 mx-4">
				<div class="flex flex-row pt-2">
					<SelectMenuNoBorder
						option-text-one="Pending"
						option-text-two="Rejected"
						option-text-three="Unmatched"
					/>
				</div>

				<div class="flex flex-col pt-2">
					<BookingCard
						title="The Sanders"
						time-or-date="Shared on 5 mins ago > 20+ responses"
						price-background-and-text-color="bg-white text-purple-900"
						badge-class="bg-lilac-50 text-purple-900"
						badge-text="One-time"
						booking-duration="3 days"
						starting-time="Start: 4pm Wed, 23/05"
						number-of-children="2 children (2yr, 3yr)"
					/>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation-and-tabs/TopNavigation.vue'
import Tabs from '../../../../../components/navigation-and-tabs/Tabs.vue'

import JobListingFilter from '../../../../../components/filter/JobListingFilter.vue'
import JobListingFilterItem from '../../../../../components/filter/JobListingFilterItem.vue'
import JobListingFilterItemSelected from '../../../../../components/filter/JobListingFilterItemSelected.vue'

import BookingCard from '../../../../../components/cards/booking-card/BookingCard.vue'
import SelectMenuNoBorder from '../../../../../components/form/SelectMenuNoBorder.vue'

import { ChevronLeftIcon, QuestionMarkCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		Tabs,
		JobListingFilter,
		JobListingFilterItem,
		JobListingFilterItemSelected,
		BookingCard,
		SelectMenuNoBorder,
		ChevronLeftIcon,
		QuestionMarkCircleIcon,
	},
}
</script>
