<template>
	<div class="flex flex-col">
		<h5 class="text-header-five font-bold antialiased my-4">After School Sitter Needed</h5>
		<a href="#" class="text-blue-500 anchor-with-underline">Amsterdam Sloterdijk, Netherlands</a>

		<h6 class="text-header-six font-bold mt-12 mb-4">To Care For</h6>
		<p>2 kids > 3yrs (M), 2yrs (F)</p>

		<hr class="border-1 border-gray-50 my-6" />

		<Date>
			<template #header>Start Date</template>
			<template #date>Wednesday, 31st November 2021</template>
			<template #time>15:00-17:00</template>
		</Date>

		<hr class="border-1 border-gray-50 my-6" />

		<Date v-if="parentDetails[0].bookingType === 'One-time booking'">
			<template #header>Other Date(s)</template>
			<template #date>Wednesday, 3rd December 2021</template>
			<template #time>18:00-21:00</template>
		</Date>

		<div class="flex py-4" v-for="duration in durations" :key="duration.day" v-else>
			<div class="w-32">{{ duration.day }}</div>
			<div class="grow">{{ duration.time }}</div>
			<div>
				<input id="checkboxName" name="checkboxName" type="checkbox" :checked="duration.checked === 1" class="h-5 w-5 text-purple-500">
			</div>
		</div>
	</div>
</template>

<script>
import Date from './dates/Date.vue'

export default {
	components: {
		Date
	},
	props: ['parentDetails'],
	data() {
    	return {
      		durations: [
				{
					day: 'Monday',
					time: '12:00 - 17:00',
					checked: 1
				},
				{
					day: 'Tuesday',
					time: '12:00 - 17:00',
					checked: 0
				},
				{
					day: 'Wednesday',
					time: '12:00 - 17:00',
					checked: 0
				},
				{
					day: 'Thursday',
					time: '12:00 - 17:00',
					checked: 0
				},
				{
					day: 'Friday',
					time: '12:00 - 17:00',
					checked: 0
				},
				{
					day: 'Saturday',
					time: '12:00 - 17:00',
					checked: 0
				},
				{
					day: 'Sunday',
					time: '12:00 - 17:00',
					checked: 0
				}
			]
		}
	}
}
</script>