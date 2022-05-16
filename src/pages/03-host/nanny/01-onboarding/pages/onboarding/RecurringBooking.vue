<template>
	<div class="w-full h-full">
		<TopNavigation text="Recurring Booking">
			<template #iconLeft><router-link to="/dashboard?tab=3"><ChevronLeftIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col pt-12 px-4">
				<form class="w-full" action="#" method="POST">
					<h5 class="text-header-five font-semibold antialiased mb-2">Plan your booking</h5>
					<p	class="font-light">Select the day &amp; add time you need a nanny</p>

					<div class="mt-12">

						<div class="flex items-center justify-between">
							<span class="flex flex-col">
								<span class="text-purple-900 font-semibold antialiased" id="availability-label">Last Minute Booking</span>
								<span class="text-sm text-gray-500 font-thin pr-10">I need a nanny urgently</span>
							</span>
							<!-- Enabled: "bg-purple-600", Not Enabled: "bg-gray-500" -->
							<button type="button" class="bg-gray-500 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" role="switch" aria-checked="false" aria-labelledby="availability-label" aria-describedby="availability-description">
								<!-- Enabled: "translate-x-6", Not Enabled: "translate-x-0" -->
								<span aria-hidden="true" class="translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"></span>
							</button>
						</div>

						<h4 class="text-header-four font-semibold antialiased mt-12 mb-4">Week hours Needed</h4>

						<div class="border-b border-gray-50">
							<DayOrTimeAvailabilityRow>
								<template #toggleDay><ToggleButtonTextRight backgroundColor="bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500" translateXPosition="translate-x-0" text="Sun" /></template>
								<template #removeIcon>&nbsp;</template>
								<template #inputHours><InputFieldTimeDisabled class="w-input-sm mr-2" placeholder="Unavailable" /></template>
								<template #AddIcon><PlusIcon class="w-6 h-6 text-gray-500" aria-hidden="true" /></template>
							</DayOrTimeAvailabilityRow>
						</div>

						<div class="border-b border-gray-50">
							<DayOrTimeAvailabilityRow>
								<template #toggleDay><ToggleButtonTextRight backgroundColor="bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500" translateXPosition="translate-x-6" text="Mon" /></template>
								<template #removeIcon>&nbsp;</template>
								<template #inputHours><InputFieldTimeEnabled class="w-input-sm mr-2" value="09:00 - 11:00" /></template>
								<template #AddIcon><PlusIcon class="w-6 h-6 text-purple-500" aria-hidden="true" /></template>
							</DayOrTimeAvailabilityRow>
							<DayOrTimeAvailabilityRow>
								<template #toggleDay>&nbsp;</template>
								<template #removeIcon><XCircleIcon class="w-6 h-6 text-gray-500" aria-hidden="true" /></template>
								<template #inputHours><InputFieldTimeEnabled class="w-input-sm mr-2" value="13:00 - 17:00" /></template>
								<template #AddIcon><PlusIcon class="w-6 h-6 text-purple-500" aria-hidden="true" /></template>
							</DayOrTimeAvailabilityRow>
						</div>

						<div class="border-b border-gray-50">
							<DayOrTimeAvailabilityRow>
								<template #toggleDay><ToggleButtonTextRight backgroundColor="bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500" translateXPosition="translate-x-6" text="Tue" /></template>
								<template #removeIcon>&nbsp;</template>
								<template #inputHours><InputFieldTimeEnabled class="w-input-sm mr-2" value="09:00 - 11:00" /></template>
								<template #AddIcon><PlusIcon class="w-6 h-6 text-purple-500" aria-hidden="true" /></template>
							</DayOrTimeAvailabilityRow>
						</div>

						<div class="border-b border-gray-50">
							<DayOrTimeAvailabilityRow>
								<template #toggleDay><ToggleButtonTextRight backgroundColor="bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500" translateXPosition="translate-x-6" text="Wed" /></template>
								<template #removeIcon>&nbsp;</template>
								<template #inputHours><InputFieldTimeEnabled class="w-input-sm mr-2" value="09:00 - 11:00" /></template>
								<template #AddIcon><PlusIcon class="w-6 h-6 text-purple-500" aria-hidden="true" /></template>
							</DayOrTimeAvailabilityRow>
						</div>

						<div class="border-b border-gray-50">
							<DayOrTimeAvailabilityRow>
								<template #toggleDay><ToggleButtonTextRight backgroundColor="bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500" translateXPosition="translate-x-6" text="Thur" /></template>
								<template #removeIcon>&nbsp;</template>
								<template #inputHours><InputFieldTimeEnabled class="w-input-sm mr-2" value="09:00 - 11:00" /></template>
								<template #AddIcon><PlusIcon class="w-6 h-6 text-purple-500" aria-hidden="true" /></template>
							</DayOrTimeAvailabilityRow>
						</div>

						<div class="border-b border-gray-50">
							<DayOrTimeAvailabilityRow>
								<template #toggleDay><ToggleButtonTextRight backgroundColor="bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500" translateXPosition="translate-x-6" text="Fri" /></template>
								<template #removeIcon>&nbsp;</template>
								<template #inputHours><InputFieldTimeEnabled class="w-input-sm mr-2" value="09:00 - 11:00" /></template>
								<template #AddIcon><PlusIcon class="w-6 h-6 text-purple-500" aria-hidden="true" /></template>
							</DayOrTimeAvailabilityRow>
						</div>

						<div class="border-b border-gray-50">
							<DayOrTimeAvailabilityRow>
								<template #toggleDay><ToggleButtonTextRight backgroundColor="bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500" translateXPosition="translate-x-6" text="Sat" /></template>
								<template #removeIcon>&nbsp;</template>
								<template #inputHours><InputFieldTimeEnabled class="w-input-sm mr-2" value="09:00 - 11:00" /></template>
								<template #AddIcon><PlusIcon class="w-6 h-6 text-purple-500" aria-hidden="true" /></template>
							</DayOrTimeAvailabilityRow>
						</div>

					</div>

					<div class="mt-12">
						<h5 class="text-header-five font-semibold antialiased my-6">Preferred start and end date</h5>
						<div class="grid grid-cols-2 gap-4 gap-y-6 gap-x-2 mt-4">
							<div><InputField :hasLeadingIcon="true" inputIconType="calendar" text="Starting from" placeholder="DD/MM/YYYY" /></div>
							<div><InputField :hasLeadingIcon="true" inputIconType="calendar" text="Ending on" placeholder="DD/MM/YYYY" /></div>
						</div>
					</div>

					<div class="flex flex-col justify-center items-center mt-16">
						<ButtonPrimary text="Continue" class="w-button-lg text-xl py-4" />
					</div>
				</form>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../../components/navigation-and-tabs/TopNavigation.vue'
import ToggleButtonTextRight from '../../../../../../components/form/ToggleButtonTextRight.vue'
import DayOrTimeAvailabilityRow from '../../../../../../components/availability/DayOrTimeRow.vue'
import InputField from '../../../../../../components/form/InputField.vue'
import InputFieldTimeEnabled from '../../../../../../components/form/InputFieldTimeEnabled.vue'
import InputFieldTimeDisabled from '../../../../../../components/form/InputFieldTimeDisabled.vue'
import SelectMenu from '../../../../../../components/form/SelectMenu.vue'
import ButtonPrimary from '../../../../../../components/buttons/ButtonPrimary.vue'

import { ChevronLeftIcon, QuestionMarkCircleIcon, PlusIcon, XCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		ToggleButtonTextRight,
		DayOrTimeAvailabilityRow,
		InputField,
		InputFieldTimeEnabled,
		InputFieldTimeDisabled,
		SelectMenu,
		ButtonPrimary,
		ChevronLeftIcon,
		QuestionMarkCircleIcon,
		PlusIcon,
		XCircleIcon
	}
}
</script>