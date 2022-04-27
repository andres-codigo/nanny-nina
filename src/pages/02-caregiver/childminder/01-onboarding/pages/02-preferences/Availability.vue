<template>
	<div class="w-full h-full">
		<TopNavigation text="Availability">
			<template #iconLeft><router-link to="/dashboard"><ChevronLeftIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
			<template #iconRight><QuestionMarkCircleIcon class="w-6 h-6 text-green-500" aria-hidden="true" /></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col py-12 mx-4">
				<h5 class="text-left text-header-five font-semibold antialiased mb-4">Availability</h5>
				<p class="font-light">Set your weekly hours and add specific dates you may be unavailable</p>

				<div class="mt-12">
					<Tabs
						tabOneClasses="text-purple-900"
						tabOneText="Weekly Hours"
						:tabOneIsActive="true"
						tabTwoClasses="border-transparent text-gray-500 border-b-2 hover:text-gray-700 hover:border-gray-300"
						tabTwoText="Unavailability"
						:tabTwoIsActive="false"
					/>

					<div class="border-b border-gray-50">
						<DayOrTimeAvailabilityRow :rowWithTimeInputOnly="false">
							<template #toggleDay><ToggleButtonTextRight backgroundColor="bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500" translateXPosition="translate-x-0" text="Sun" /></template>
							<template #removeIcon>&nbsp;</template>
							<template #inputHours><InputFieldTimeDisabled placeholder="Unavailable" /></template>
							<template #inputNumberOfKids><InputFieldTimeDisabled placeholder="Number of kids" /></template>
							<template #AddIcon><PlusIcon class="w-6 h-6 text-gray-500" aria-hidden="true" /></template>
						</DayOrTimeAvailabilityRow>
					</div>

					<div class="border-b border-gray-50">
						<DayOrTimeAvailabilityRow :rowWithTimeInputOnly="false">
							<template #toggleDay><ToggleButtonTextRight backgroundColor="bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500" translateXPosition="translate-x-6" text="Mon" /></template>
							<template #removeIcon>&nbsp;</template>
							<template #inputHours><InputFieldTimeEnabled value="09:00- 17:00" /></template>
							<template #inputNumberOfKids><InputFieldTimeEnabled :readonly="true" value="3" class="w-full cursor-pointer" /></template>
							<template #AddIcon>&nbsp;</template>
						</DayOrTimeAvailabilityRow>

						<DayOrTimeAvailabilityRow :rowWithTimeInputOnly="false">
							<template #toggleDay>&nbsp;</template>
							<template #removeIcon><XCircleIcon class="w-6 h-6 text-gray-500" aria-hidden="true" /></template>
							<template #inputHours><InputFieldTimeEnabled value="17:00- 22:00" /></template>
							<template #inputNumberOfKids><InputFieldTimeEnabled :readonly="true" value="3" class="w-full cursor-pointer" /></template>
							<template #AddIcon><PlusIcon class="w-6 h-6 text-purple-500" aria-hidden="true" /></template>
						</DayOrTimeAvailabilityRow>
					</div>

					<div class="border-b border-gray-50">
						<DayOrTimeAvailabilityRow :rowWithTimeInputOnly="false">
							<template #toggleDay><ToggleButtonTextRight backgroundColor="bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500" translateXPosition="translate-x-6" text="Tue" /></template>
							<template #removeIcon>&nbsp;</template>
							<template #inputHours><InputFieldTimeEnabled value="09:00- 17:00" /></template>
							<template #inputNumberOfKids><InputFieldTimeEnabled :readonly="true" value="3" class="w-full cursor-pointer" /></template>
							<template #AddIcon><PlusIcon class="w-6 h-6 text-purple-500" aria-hidden="true" /></template>
						</DayOrTimeAvailabilityRow>
					</div>
				</div>

				<div class="flex flex-col justify-center items-center mt-16">
					<ButtonPrimary text="Save Changes" class="w-button-lg text-xl py-4" />
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../../components/navigation-and-tabs/TopNavigation.vue'
import Tabs from '../../../../../../components/navigation-and-tabs/Tabs.vue'
import DayOrTimeAvailabilityRow from '../../../../../../components/availability/weekly-hours/DayOrTimeRow.vue'
import ToggleButtonTextRight from '../../../../../../components/form/ToggleButtonTextRight.vue'
import InputFieldTimeEnabled from '../../../../../../components/form/InputFieldTimeEnabled.vue'
import InputFieldTimeDisabled from '../../../../../../components/form/InputFieldTimeDisabled.vue'
import ButtonPrimary from '../../../../../../components/buttons/ButtonPrimary.vue'

import { ChevronLeftIcon, QuestionMarkCircleIcon, PlusIcon, XCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		Tabs,
		DayOrTimeAvailabilityRow,
		ToggleButtonTextRight,
		InputFieldTimeEnabled,
		InputFieldTimeDisabled,
		ButtonPrimary,
		ChevronLeftIcon,
		QuestionMarkCircleIcon,
		PlusIcon,
		XCircleIcon
	}
}
</script>