<template>
	<div class="flex flex-col">
		<h6 class="text-header-six font-semibold mt-12 mb-4">To Care For</h6>
		<p>2 kids > 3yrs (M), 2yrs (F)</p>

		<hr class="border-1 border-gray-50 my-6" />

		<Date>
			<template #header>Start Date</template>
			<template #date>Wednesday, 31st November 2021</template>
			<template #time>15:00-17:00</template>
		</Date>

		<hr class="border-1 border-gray-50 my-6" />

		<div>
			<div class="flex flex-row mt-2">
				<div class="flex-none w-5">
					<ClockIcon />
				</div>
				<div class="inline-flex items-center ml-2">
					<div class="grid grid-rows-3 grid-flow-col gap-1">
						<div>
							<h6 class="text-header-six font-semibold">
								Duration 6 months
							</h6>
						</div>
						<div>
							<p class="text-sm text-gray-500">
								Time and date may change
							</p>
						</div>
					</div>
				</div>
			</div>
			<div
				v-for="duration in durations"
				:key="duration.day"
				class="flex relative -top-6 py-2 ml-7 mr-4"
			>
				<div class="w-32">{{ duration.day }}</div>
				<div class="grow">{{ duration.time }}</div>
				<div>
					<input
						id="checkboxName"
						name="checkboxName"
						type="checkbox"
						:checked="duration.checked === 1"
						class="h-5 w-5 text-purple-500"
					/>
				</div>
			</div>
		</div>

		<hr class="border-1 border-gray-50 my-6" />

		<div>
			<div class="flex flex-row mt-2">
				<div class="flex-none w-5">
					<ClockIcon />
				</div>
				<div class="inline-flex items-center ml-2">
					<div class="grid grid-rows-3 grid-flow-col gap-1">
						<div>
							<h6 class="text-header-six font-semibold">
								Duration 6 months
							</h6>
						</div>
						<div>
							<p class="text-sm text-gray-500">
								Time and date may change
							</p>
						</div>
					</div>
				</div>
			</div>
			<div
				v-for="duration in durations"
				:key="duration.day"
				class="flex relative -top-6 py-2 ml-7 mr-4"
			>
				<div class="w-32">{{ duration.day }}</div>
				<div class="grow">{{ duration.time }}</div>
				<div>
					<input
						id="checkboxName"
						name="checkboxName"
						type="checkbox"
						:checked="duration.checked === 1"
						class="h-5 w-5 text-purple-500"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Date from '../view/Date.vue'

import { ClockIcon } from '@heroicons/vue/solid'

export default {
	components: {
		Date,
		ClockIcon,
	},
	data() {
		return {
			durations: [
				{
					day: 'Mondays',
					time: '12:00 - 17:00',
					checked: 1,
				},
				{
					day: 'Tuesdays',
					time: '12:00 - 17:00',
					checked: 0,
				},
				{
					day: 'Wednesdays',
					time: '12:00 - 17:00',
					checked: 0,
				},
				{
					day: 'Thursdays',
					time: '12:00 - 17:00',
					checked: 0,
				},
				{
					day: 'Fridays',
					time: '12:00 - 17:00',
					checked: 0,
				},
				{
					day: 'Saturdays',
					time: '12:00 - 17:00',
					checked: 0,
				},
				{
					day: 'Sundays',
					time: '12:00 - 17:00',
					checked: 0,
				},
			],
		}
	},
}
</script>
