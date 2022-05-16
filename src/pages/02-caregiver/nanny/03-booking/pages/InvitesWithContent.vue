<template>
	<div class="w-full h-full">
		<TopNavigation text="Booking">
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

				<div class="flex flex-row pt-6 mx-4">
					<div class="basis-1/2">
						<h4 class="text-header-four font-semibold antialiased">Your Invites</h4>
					</div>
					<div class="basis-1/2">
						<div class="inline-flex float-right items-center"><Img src="./assets/svg/other/clock-outline.svg" /><a href="#" target="_self" class="anchor-blue anchor-with-underline ml-1">History</a></div>
					</div>
				</div>

				<div class="flex flex-col pt-6 px-4">

					<BookingCard
						title="The Sanders"
						timeOrDate="Shared on 5 mins ago > 20+ responses"
						badgeClass="bg-lilac-50 text-purple-900"
						badgeText="One-time"
					/>

					<BookingCard
						title="The Alis"
						:showHeart="true"
						timeOrDate="Shared an hour ago > 7 responses"
						badgeSvg="./assets/svg/other/lock.svg"
						badgeClass="bg-green-400 text-purple-900"
						badgeText="Recurring"
					/>

					<BookingCard
						title="The Van de Beeks"
						timeOrDate="Shared an hour ago > 20 responses"
						badgeClass="bg-lilac-100 text-purple-900"
						badgeSvg="./assets/svg/other/event.svg"
						badgeText="Event"
					/>

					<BookingCard
						title="The Sanders"
						timeOrDate="Shared an hour ago > 20 responses"
						badgeClass="bg-rose-100 text-purple-900"
						badgeSvg="./assets/svg/other/clock.svg"
						badgeText="Urgent"
					/>
				</div>
			</div>
			<section class="block fixed inset-x-0 w-full bottom-0 z-10 bg-white border-t border-gray min-w-360-for-dev-not-prod">
				<FixedBottomPrimaryButton />
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
import FixedBottomPrimaryButton from '../../../../../components/content/fixed/FixedBottomPrimaryButton.vue'

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
		FixedBottomPrimaryButton,
		QuestionMarkCircleIcon,
		ClockIcon
	}
}
</script>