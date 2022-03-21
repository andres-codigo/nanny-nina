<template>
	<div class="flex flex-col">
		<h5 class="text-header-five font-bold my-4">After School Sitter Needed</h5>
		<p>Amsterdam Sloterdijk, Netherlands</p>

		<h6 class="text-header-six font-bold mt-12 mb-4">To Care For</h6>
		<p>2 kids > 3yrs (M), 2yrs (F)</p>

		<hr class="bg-gray-500 my-6" />

		<Date>
			<template #header>Start Date</template>
			<template #date>Wednesday, 31st November 2021</template>
			<template #time>15:00-17:00</template>
		</Date>

		<hr class="bg-gray-500 my-6" />

		<Date>
			<template #header>Other Date(s)</template>
			<template #date>Wednesday, 3rd December 2021</template>
			<template #time>18:00-21:00</template>
		</Date>
	</div>
</template>

<script>
import Date from './dates/Date.vue'

export default {
	components: {
		Date
	}
}
</script>