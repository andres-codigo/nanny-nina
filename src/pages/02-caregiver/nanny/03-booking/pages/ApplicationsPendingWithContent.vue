<template>
	<div class="w-full h-full">
		<TopNavigation text="Booking">
			<template #iconRight><QuestionMarkCircleIcon class="w-6 h-6 text-green-500" aria-hidden="true" /></template>
		</TopNavigation>
		<main>
			<Tabs
				tabOneClasses="border-transparent text-gray-500 border-b-2 hover:text-gray-700 hover:border-gray-300"
				tabOneText="Invites"
				:tabOneIsActive="false"
				tabTwoClasses="border-transparent text-gray-500 border-b-2 hover:text-gray-700 hover:border-gray-300"
				tabTwoText="Matches"
				:tabTwoIsActive="false"
				:displayThirdTab="true"
				tabThreeClasses="text-purple-900"
				tabThreeText="Applications"
				:tabThreeIsActive="true"
			/>
			<JobListingFilter>
				<template #filter-one><JobListingFilterItemSelected text="All bookings" /></template>
				<template #filter-two><JobListingFilterItem text="One-time" /></template>
				<template #filter-three><JobListingFilterItem text="Recurring" /></template>
				<template #filter-four><JobListingFilterItem text="[filter type]" /></template>
			</JobListingFilter>
			<div class="flex flex-col pb-28 mx-4">
				<div class="flex flex-row pt-2">
					<SelectMenuNoBorder optionTextOne="Pending" optionTextTwo="Rejected" optionTextThree="Unmatched" />
				</div>

				<div class="flex flex-col pt-2">

					<BookingCard
						title="The Sanders"
						timeOrDate="Shared on 5 mins ago > 20+ responses"
						priceBackgroundAndTextColor="bg-white text-purple-900"
						badgeClass="bg-lilac-50 text-purple-900"
						badgeText="One-time"
						bookingDuration="3 days"
						startingTime="Start: 4pm Wed, 23/05"
						numberOfChildren="2 children (2yr, 3yr)"
					/>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation-and-tabs/TopNavigation.vue'
import Tabs from '../../../../../components/navigation-and-tabs/Tabs.vue'
import Img from '../../../../../components/dom-elements/Img.vue'

import JobListingFilter from '../../../../../components/filter/JobListingFilter.vue'
import JobListingFilterItem from '../../../../../components/filter/JobListingFilterItem.vue'
import JobListingFilterItemSelected from '../../../../../components/filter/JobListingFilterItemSelected.vue'

import BookingCard from '../../../../../components/cards/booking-card/BookingCard.vue'
import SelectMenuNoBorder from '../../../../../components/form/SelectMenuNoBorder.vue'

import { QuestionMarkCircleIcon, ClockIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		Tabs,
		Img,
		JobListingFilter,
		JobListingFilterItem,
		JobListingFilterItemSelected,
		BookingCard,
		SelectMenuNoBorder,
		QuestionMarkCircleIcon,
		ClockIcon
	}
}
</script>