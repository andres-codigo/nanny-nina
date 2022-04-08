<template>
	<form class="w-full">
		<h5 class="text-header-five font-bold antialiased mb-4">After School Sitter Needed For 2 days</h5>

		<hr class="border-1 border-gray-50 my-6" />

		<!-- Solution to how user will edit overview details - title, start date, other dates, duration, etc - to be confirmed -->
		<div class="inline-flex ">
			<div class="grid grid-rows-2 grid-flow-col gap-1">
				<div><h6 class="inline-flex w-full text-header-six font-bold">To Care For</h6></div>
				<div><p class="inline-flex w-full">2 kids > 3yrs (M), 2yrs (F)</p></div>
			</div>
		</div>

		<hr class="border-1 border-gray-50 my-6" />

		<Date>
			<template #header>Start Date</template>
			<template #date>Wednesday, 31st November 2021</template>
			<template #time>15:00-17:00</template>
		</Date>

		<hr class="border-1 border-gray-50 my-6" />

		<Date>
			<template #header>Other Date(s)</template>
			<template #date>Wednesday, 3rd December 2021</template>
			<template #time>18:00-21:00</template>
		</Date>
	</form>
</template>

<script>
import Date from './dates/Date.vue'

import { ClockIcon } from '@heroicons/vue/outline'

export default {
	components: {
		ClockIcon,
		Date
	}
}
</script>