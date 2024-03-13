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
				tab-two-classes="text-purple-900"
				tab-two-text="Matches"
				:tab-two-is-active="true"
				:display-third-tab="true"
				tab-three-classes="border-transparent text-gray-500 border-b-2 hover:text-gray-700 hover:border-gray-300"
				tab-three-text="Applications"
				:tab-three-is-active="false"
			/>
			<div class="flex flex-col mx-4">
				<div class="flex flex-col pt-6">
					<h4 class="text-header-four font-semibold antialiased mb-2">
						Your Matches
					</h4>
					<p class="font-light antialiased">
						View booking information and update your hours
					</p>
				</div>

				<div class="flex flex-col pt-6">
					<BookingCard
						:is-locked-match="false"
						price-background-and-text-color="bg-white text-purple-900"
						title="The Sanders"
						time-or-date="Matched 22/03/2022"
						badge-class="bg-lilac-50 text-purple-900"
						badge-text="One-time"
						booking-duration="3 days"
					/>

					<BookingCard
						:is-locked-match="true"
						:show-heart="true"
						price-background-and-text-color="bg-white text-purple-900"
						title="The Alis"
						time-or-date="Matched 22/03/2022"
						badge-svg="./assets/svg/badges/lock.svg"
						badge-class="bg-green-400 text-purple-900"
						badge-text="Recurring"
						booking-duration="6 months"
					/>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation-and-tabs/TopNavigation.vue'
import Tabs from '../../../../../components/navigation-and-tabs/Tabs.vue'
import BookingCard from '../../../../../components/cards/booking-card/BookingCard.vue'

import { ChevronLeftIcon, QuestionMarkCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		Tabs,
		BookingCard,
		ChevronLeftIcon,
		QuestionMarkCircleIcon,
	},
}
</script>
