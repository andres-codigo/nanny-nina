<template>
	<div class="w-full h-full">
		<TopNavigation :displayBorderBottom="false">
			<template #iconRight><router-link to="/dashboard?tab=3"><XIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col pt-12 mx-4">
				<div class="flex flex-col">
					<div class="inline-flex items-center mb-4">
						<CalendarIcon class="w-6 h-6" />
						<h5 class="text-header-five font-semibold antialiased ml-2">Brittany's availability</h5>
					</div>
					<div class="flex relative py-2" v-for="duration in durations" :key="duration.day">
						<div class="w-32">{{ duration.day }}</div>
						<div class="grow">{{ duration.time }}</div>
					</div>
				</div>

				<div class="flex flex-col items-center mt-40 mb-8">
					<div><ButtonPrimary text="Confirm with Brittany" class="w-button-lg text-xl py-4" /></div>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation-and-tabs/TopNavigation.vue'
import ButtonPrimary from '../../../../../components/buttons/ButtonPrimary.vue'

import { XIcon, CalendarIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		ButtonPrimary,
		XIcon,
		CalendarIcon
	},
	data() {
    	return {
      		durations: [
				{
					day: 'Mondays',
					time: '12:00 - 17:00'
				},
				{
					day: 'Tuesdays',
					time: '12:00 - 17:00'
				},
				{
					day: 'Wednesdays',
					time: '12:00 - 17:00'
				},
				{
					day: 'Thursdays',
					time: '12:00 - 17:00'
				},
				{
					day: 'Fridays',
					time: '12:00 - 17:00'
				},
				{
					day: 'Saturdays',
					time: '12:00 - 17:00'
				},
				{
					day: 'Sundays',
					time: '12:00 - 17:00'
				}
			]
		}
	}
}
</script>