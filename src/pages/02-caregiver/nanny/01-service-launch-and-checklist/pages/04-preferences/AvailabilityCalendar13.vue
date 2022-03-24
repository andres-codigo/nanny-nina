<template>
	<div class="w-full h-full">pNavigation>
		<TopNavigation text="Availability">
			<template #iconLeft><router-link to="/dashboard"><ChevronLeftIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
			<template #iconRight><QuestionMarkCircleIcon class="w-8 h-8 text-green-500" aria-hidden="true" /></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col px-4 py-6">
				<h5 class="mt-8 mb-2 text-left text-header-five font-normal text-gray-900">Availability</h5>
				<p	class="font-light">Set your weekly hours and add specific dates you may be unavailable</p>

				<div class="mt-12">
					<Tabs
						tabOneClasses="border-transparent text-gray-500 border-b-2 hover:text-gray-700 hover:border-gray-300"
						tabOneText="Weekly Hours"
						tabTwoClasses="border-b-2 border-purple-500 text-black"
						tabTwoText="Unavailability"
					/>

					<p class="mt-8 mx-10 font-thin text-center text-gray-500">Your unavailability on the specific dates, exceptions to the regular schedule</p>

					<Calendar />

					<h5 class="mt-10 mb-2 text-header-five font-normal text-gray-900">Workday &amp; time</h5>
					<p class="font-thin mt-8">You haven’t selected any specific day</p>
				</div>

				<div class="mt-24">
					<ButtonPrimary text="Save" />
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../../components/navigation/TopNavigation.vue'
import Tabs from '../../../../../../components/tabs/Tabs.vue'
import Calendar from '../../../../../../components/calendar/Calendar.vue'
import ButtonPrimary from '../../../../../../components/buttons/ButtonPrimary.vue'

import { ChevronLeftIcon, QuestionMarkCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		Tabs,
		Calendar,
		ButtonPrimary,
		ChevronLeftIcon,
		QuestionMarkCircleIcon
	}
}
</script>