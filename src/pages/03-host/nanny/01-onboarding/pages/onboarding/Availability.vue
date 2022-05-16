<template>
	<div class="w-full">
		<TopNavigation text="Availability">
			<template #iconLeft><router-link to="/dashboard?tab=3"><ChevronLeftIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
			<template #iconRight><QuestionMarkCircleIcon class="w-6 h-6 text-green-500" aria-hidden="true" /></template>
		</TopNavigation>
		<main>
			<div class="h-screen flex flex-col pt-12 mx-4">
				<h5 class="text-header-five font-semibold antialiased">Brittany's Availability</h5>
				<p class="font-thin mt-2">View her work hours on selected dates</p>

				<CalendarAvailability :showButtons="false" class="mb-4" />

				<hr class="border-1 border-gray-50 my-6" />

				<div class="flex flex-col">
					<p class="text-xs font-thin ml-2">Sun, 10 Feb</p>
					<div class="flex flex-wrap">
						<Badge  v-for="available in availability" :key="available.time" :text="available.time" />
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../../components/navigation-and-tabs/TopNavigation.vue'
import CalendarAvailability from '../../../../../../components/calendar/CalendarAvailability.vue'
import Badge from '../../../../../../components/badge/Badge.vue'

import { ChevronLeftIcon, QuestionMarkCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		CalendarAvailability,
		Badge,
		ChevronLeftIcon,
		QuestionMarkCircleIcon
	},
	data() {
		return {
			availability: [
				{
					time: '10:00 - 15:00'
				},
				{
					time: '16:00 - 17:00'
				},
				{
					time: '18:00 - 23:00'
				}
			]
		}
	}
}
</script>