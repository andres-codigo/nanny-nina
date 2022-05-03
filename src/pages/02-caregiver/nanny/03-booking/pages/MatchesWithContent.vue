<template>
	<div class="w-full h-full">
		<TopNavigation text="Booking">
			<template #iconRight><QuestionMarkCircleIcon class="w-6 h-6 text-green-500" aria-hidden="true" /></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col">
				<Tabs
					tabOneClasses="border-transparent text-gray-500 border-b-2 hover:text-gray-700 hover:border-gray-300"
					tabOneText="Invites"
					:tabOneIsActive="false"
					tabTwoClasses="text-purple-900"
					tabTwoText="Matches"
					:tabTwoIsActive="true"
				/>

				<div class="flex flex-col pt-12 px-4">
					<div class="mb-10">
						<h5 class="text-header-five font-semibold antialiased mb-2">Your Matches</h5>
						<p class="font-light">Review hours</p>
					</div>

					<div class="block mb-10">
						<p class="text-sm font-light mb-2">Next</p>
						<BookingCard
							src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
							title="Working @ Sanders"
						/>
					</div>

					<div class="block mb-10">
						<p class="text-sm font-light mb-2">Show all</p>
						<BookingCard
							src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
							title="Working @ Kalous"
						/>

						<BookingCard
							src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
							title="Working @ Kalous"
						/>
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation-and-tabs/TopNavigation.vue'
import Tabs from '../../../../../components/navigation-and-tabs/Tabs.vue'
import BookingCard from '../../../../../components/cards/booking-card/BookingCard.vue'

import { QuestionMarkCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		Tabs,
		BookingCard,
		QuestionMarkCircleIcon
	}
}
</script>