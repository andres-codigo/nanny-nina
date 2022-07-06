<template>
	<div class="w-full h-full">
		<TopNavigation text="Booking">
			<template #iconLeft><router-link to="'/dashboard?tab=2"><ChevronLeftIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
			<template #iconRight><QuestionMarkCircleIcon class="w-6 h-6 text-green-500" aria-hidden="true" /></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col pb-28">
				<Tabs
					tabOneClasses="text-purple-900"
					tabOneText="Invites"
					:tabOneIsActive="true"
					tabTwoClasses="border-transparent text-gray-500 border-b-2 hover:text-gray-700 hover:border-gray-300"
					tabTwoText="Matches"
					:tabTwoIsActive="false"
					:displayThirdTab="true"
					tabThreeClasses="border-transparent text-gray-500 border-b-2 hover:text-gray-700 hover:border-gray-300"
					tabThreeText="Applications"
					:tabThreeIsActive="false"
				/>
				<JobListingFilter>
					<template #filter-one><JobListingFilterItemSelected text="Distance" /></template>
					<template #filter-two><JobListingFilterItem text="Start Date" /></template>
					<template #filter-three><JobListingFilterItem text="Price" /></template>
					<template #filter-four><JobListingFilterItem text="One time" /></template>
				</JobListingFilter>

				<div class="pt-6 mx-4">
					<h4 class="text-header-four font-semibold antialiased">Your Invites</h4>
				</div>

				<div class="flex flex-col pt-6 px-4">

					<BookingCard
						badgeText="One-time"
						badgeClass="bg-lilac-50 text-purple-900"
						title="The Sanders"
						timeOrDate="Shared on 5 mins ago > 20+ responses"
					/>

					<BookingCard
						badgeText="Recurring"
						badgeSvg="./assets/svg/badges/lock.svg"
						badgeClass="bg-green-400 text-purple-900"
						title="The Alis"
						:showHeart="true"
						timeOrDate="Shared an hour ago > 7 responses"
					/>

					<BookingCard
						badgeText="Event"
						badgeClass="bg-lilac-100 text-purple-900"
						badgeSvg="./assets/svg/badges/event.svg"
						title="The Van de Beeks"
						timeOrDate="Shared an hour ago > 20 responses"
					/>

					<BookingCard
						badgeText="Urgent"
						badgeSvg="./assets/svg/badges/clock.svg"
						badgeClass="bg-melon-100 text-purple-900"
						title="The Sanders"
						timeOrDate="Shared an hour ago > 20 responses"
						priceBackgroundAndTextColor="bg-white text-purple-900"
					/>
				</div>
			</div>
			<section class="section-sticky-bottom-menu min-w-360-for-dev-not-prod">
				<FixedBottomAnchorPrimary />
			</section>
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
import FixedBottomAnchorPrimary from '../../../../../components/content/fixed/FixedBottomAnchorPrimary.vue'

import { ChevronLeftIcon, QuestionMarkCircleIcon, ClockIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		Tabs,
		Img,
		JobListingFilter,
		JobListingFilterItem,
		JobListingFilterItemSelected,
		BookingCard,
		FixedBottomAnchorPrimary,
		ChevronLeftIcon,
		QuestionMarkCircleIcon,
		ClockIcon
	}
}
</script>