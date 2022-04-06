<template>
	<div class="w-full h-full">
		<TopNavigation text="Availability">
			<template #iconLeft><router-link to="/dashboard"><ChevronLeftIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
			<template #iconRight><router-link to="/dashboard"><DotsVerticalIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<div class="h-screen flex flex-col pt-12 mx-4">
				<h6 class="text-header-six font-bold antialiased relative">Brittany's Availability</h6>
				<p class="text-sm font-thin font-purple-800">View her work hours on selected dates</p>

				<CalendarAvailability :showButtons="false" class="mb-4" />

				<hr class="border-1 border-gray-50 my-6" />

				<div class="flex flex-col">
					<p class="text-xs font-thin antialiased ml-2">Sun, 10 Feb</p>
					<div class="flex flex-wrap">
						<Badge  v-for="available in availability" :key="available.time" :text="available.time" />
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../components/navigation/TopNavigation.vue'
import CalendarAvailability from '../../../../components/calendar/CalendarAvailability.vue'
import Badge from '../../../../components/badge/Badge.vue'

import { ChevronLeftIcon, DotsVerticalIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		CalendarAvailability,
		Badge,
		ChevronLeftIcon,
		DotsVerticalIcon
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