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

			<BookingNotification
				src="./assets/svg/notifications/alarm-selected.svg"
				message="Sanders booking has changed!"
				:display-button="true"
			/>
			<div class="flex flex-col mx-4">
				<div class="flex flex-col pt-6">
					<h4 class="text-header-four font-semibold antialiased mb-2">
						Your Matches
					</h4>
					<p class="font-light antialiased">
						View booking information and weekly hours
					</p>
				</div>

				<div class="flex flex-col pt-6">
					<BookingCard
						:is-locked-match="false"
						price-background-and-text-color="bg-white text-purple-900"
						title="The Sanders"
						time-or-date="Matched 22/03/2022"
						badge-svg="./assets/svg/badges/megaphone.svg"
						booking-duration="One-time"
						starting-time="Next: 6pm Thurs, 27/05"
					/>

					<BookingCard
						:is-locked-match="false"
						price-background-and-text-color="bg-white text-purple-900"
						title="The Jeffersons"
						time-or-date="Started 22/03/2022"
						badge-svg="./assets/svg/badges/lock.svg"
						badge-class="bg-green-400 text-purple-900"
						badge-text="Recurring"
						booking-duration="One-time"
						starting-time="Next: Wed, 23/05"
					/>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation-and-tabs/TopNavigation.vue'
import Tabs from '../../../../../components/navigation-and-tabs/Tabs.vue'
import BookingNotification from '../../../../../components/notifications/BookingNotification.vue'
import BookingCard from '../../../../../components/cards/booking-card/BookingCard.vue'

import { ChevronLeftIcon, QuestionMarkCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		Tabs,
		BookingNotification,
		BookingCard,
		ChevronLeftIcon,
		QuestionMarkCircleIcon,
	},
}
</script>
