<template>
	<div class="w-full h-full">
		<TopNavigation text="Booking">
			<template #iconRight><QuestionMarkCircleIcon class="w-6 h-6 text-green-500" aria-hidden="true" /></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col">
				<Tabs
					tabOneClasses="text-purple-900"
					tabOneText="Invites"
					:tabOneIsActive="true"
					tabTwoClasses="border-transparent text-gray-500 border-b-2 hover:text-gray-700 hover:border-gray-300"
					tabTwoText="Matches"
					:tabTwoIsActive="false"
				/>

				<div class="flex flex-row pt-6 mx-4">
					<div class="basis-1/2">
						<h4 class="text-header-four font-semibold antialiased">Your Invites</h4>
					</div>
					<div class="basis-1/2">
						<div class="inline-flex float-right items-center"><ClockIcon class="w-5 h-5" /><a href="#" target="_self" class="anchor-blue anchor-with-underline ml-1">View History</a></div>
					</div>
				</div>

				<div class="flex flex-col pt-6 px-4">

					<BookingCard
						src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
						title="The Sanders"
						timeOrDate="Shared on 5 mins ago"
					/>

					<BookingCard
						src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
						title="The Sanders"
						:showHeart="true"
						timeOrDate="Shared an hour ago"
					/>

					<BookingCard
						src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
						title="The Sanders"
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

import { QuestionMarkCircleIcon, ClockIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		Tabs,
		BookingCard,
		QuestionMarkCircleIcon,
		ClockIcon
	}
}
</script>