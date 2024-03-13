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
			<div class="flex flex-col pb-28">
				<Tabs
					tab-one-classes="text-purple-900"
					tab-one-text="Invites"
					:tab-one-is-active="true"
					tab-two-classes="border-transparent text-gray-500 border-b-2 hover:text-gray-700 hover:border-gray-300"
					tab-two-text="Matches"
					:tab-two-is-active="false"
					:display-third-tab="true"
					tab-three-classes="border-transparent text-gray-500 border-b-2 hover:text-gray-700 hover:border-gray-300"
					tab-three-text="Applications"
					:tab-three-is-active="false"
				/>
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

				<div class="pt-6 mx-4">
					<h4 class="text-header-four font-semibold antialiased">
						Your Invites
					</h4>
				</div>

				<div class="flex flex-col pt-6 px-4">
					<BookingCard
						badge-text="One-time"
						badge-class="bg-lilac-50 text-purple-900"
						title="The Sanders"
						time-or-date="Shared on 5 mins ago > 20+ responses"
					/>

					<BookingCard
						badge-text="Recurring"
						badge-svg="./assets/svg/badges/lock.svg"
						badge-class="bg-green-400 text-purple-900"
						title="The Alis"
						:show-heart="true"
						time-or-date="Shared an hour ago > 7 responses"
					/>

					<BookingCard
						badge-text="Event"
						badge-class="bg-lilac-100 text-purple-900"
						badge-svg="./assets/svg/badges/event.svg"
						title="The Van de Beeks"
						time-or-date="Shared an hour ago > 20 responses"
					/>

					<BookingCard
						badge-text="Urgent"
						badge-svg="./assets/svg/badges/clock.svg"
						badge-class="bg-melon-100 text-purple-900"
						title="The Sanders"
						time-or-date="Shared an hour ago > 20 responses"
						price-background-and-text-color="bg-white text-purple-900"
					/>
				</div>
			</div>
			<section
				class="section-sticky-bottom-menu min-w-360-for-dev-not-prod"
			>
				<FixedBottomAnchorPrimary />
			</section>
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
import FixedBottomAnchorPrimary from '../../../../../components/content/fixed/FixedBottomAnchorPrimary.vue'

import { ChevronLeftIcon, QuestionMarkCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		Tabs,
		JobListingFilter,
		JobListingFilterItem,
		JobListingFilterItemSelected,
		BookingCard,
		FixedBottomAnchorPrimary,
		ChevronLeftIcon,
		QuestionMarkCircleIcon,
	},
}
</script>
