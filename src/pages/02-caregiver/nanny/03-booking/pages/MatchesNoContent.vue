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

				<div class="mt-44 mx-20 font-thin text-center">
					<p class="text-gray-500">You have no matches yet.</p>
					<p class="text-gray-500">Explore vacancies on the Home page to invite nannies to your booking</p>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation-and-tabs/TopNavigation.vue'
import Tabs from '../../../../../components/navigation-and-tabs/Tabs.vue'

import { QuestionMarkCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		Tabs,
		QuestionMarkCircleIcon
	}
}
</script>