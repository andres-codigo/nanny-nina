<template>
	<div class="w-full h-full">
		<TopNavigation text="Weekly Schedule">
			<template #iconLeft><router-link to="'/dashboard?tab=2"><ChevronLeftIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
			<template #iconRight><QuestionMarkCircleIcon class="w-6 h-6 text-green-500" aria-hidden="true" /></template>
		</TopNavigation>
		<main>
			<form class="w-full" action="#" method="POST">
				<div class="flex flex-col">
					<div class="flex flex-col mx-4 pt-6">
						<h4 class="text-header-four font-semibold antialiased mb-2">Your Weekly Schedule</h4>
						<p class="inline-flex items-centre font-light antialiased">Your weekly activities with The Sanders<span class="ml-2"><QuestionMarkCircleIcon class="w-6 h-6 text-purple-500" aria-hidden="true" /></span></p>
					</div>
					<Week>
						<template #one><DayItem text="M" /></template>
						<template #two><DayItemSelected text="T" /></template>
						<template #three><DayItem text="W" /></template>
						<template #four><DayItem text="T" /></template>
						<template #five><DayItem text="F" /></template>
						<template #six><DayItem text="S" /></template>
						<template #seven><DayItem text="S" /></template>
					</Week>
					<div class="flex border-b border-b-1 py-6 mb-6">
						<h6 class="w-full text-header-six font-bold antialiased text-center">Tuesday</h6>
					</div>
					<div class="grid grid-cols-1 gap-0">
						<div class="flex flex-row h-24">
							<div class="basis-1/12 text-xs font-semibold px-2 mr-4 relative">
								<span class="text-gray-500 absolute -top-2.5">00:00</span>
							</div>
							<div class="basis-11/12">
								<div class="border-t border-t-1 ml-2"></div>
								<div class="border-r border-r-1 w-4 h-24">
									<div>
										<div class="border-b border-b-1 w-4 h-4"></div>
										<div class="border-b border-b-1 w-4 h-8"></div>
										<div class="border-b border-b-1 w-4 h-8"></div>
									</div>
								</div>
							</div>
						</div>
						<div class="flex flex-row h-24">
							<div class="basis-1/12 text-xs font-semibold px-2 mr-4 relative">
								<span class="text-gray-500 absolute -top-2.5">01:00</span>
							</div>
							<div class="basis-11/12">
								<div class="border-t border-t-1 ml-2"></div>
								<div class="border-r border-r-1 w-4 h-24">
									<div>
										<div class="border-b border-b-1 w-4 h-4"></div>
										<div class="border-b border-b-1 w-4 h-8"></div>
										<div class="border-b border-b-1 w-4 h-8"></div>
									</div>
								</div>
							</div>
						</div>
						<div class="flex flex-row h-24">
							<div class="basis-1/12 text-xs font-semibold px-2 mr-4 relative">
								<span class="text-gray-500 absolute -top-2.5">02:00</span>
							</div>
							<div class="basis-11/12">
								<div class="border-t border-t-1 ml-2"></div>
								<div class="border-r border-r-1 w-4 h-24">
									<div>
										<div class="border-b border-b-1 w-4 h-4"></div>
										<div class="border-b border-b-1 w-4 h-8"></div>
										<div class="border-b border-b-1 w-4 h-8"></div>
									</div>
								</div>
							</div>
						</div>
						<div class="flex flex-row h-24">
							<div class="basis-1/12 text-xs font-semibold px-2 mr-4 relative">
								<span class="text-gray-500 absolute -top-2.5">03:00</span>
							</div>
							<div class="basis-11/12">
								<div class="border-t border-t-1 ml-2"></div>
								<div class="border-r border-r-1 w-4 h-24">
									<div>
										<div class="border-b border-b-1 w-4 h-4"></div>
										<div class="border-b border-b-1 w-4 h-8"></div>
										<div class="border-b border-b-1 w-4 h-8"></div>
									</div>
								</div>
							</div>
						</div>
						<div class="flex flex-row h-24">
							<div class="basis-1/12 text-xs font-semibold px-2 mr-4 relative">
								<span class="text-gray-500 absolute -top-2.5">04:00</span>
							</div>
							<div class="basis-11/12">
								<div class="border-t border-t-1 ml-2"></div>
								<div class="border-r border-r-1 w-4 h-24">
									<div>
										<div class="border-b border-b-1 w-4 h-4"></div>
										<div class="border-b border-b-1 w-4 h-8"></div>
										<div class="border-b border-b-1 w-4 h-8"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</form>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation-and-tabs/TopNavigation.vue'

import Week from '../../../../../components/calendar/week-day-selection/Week.vue'
import DayItem from '../../../../../components/calendar/week-day-selection/DayItem.vue'
import DayItemSelected from '../../../../../components/calendar/week-day-selection/DayItemSelected.vue'

import { ChevronLeftIcon, QuestionMarkCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		Week,
		DayItem,
		DayItemSelected,
		ChevronLeftIcon,
		QuestionMarkCircleIcon
	}
}
</script>