<template>
	<div class="w-full h-full">
		<TopNavigation text="Availability">
			<template #iconLeft
				><router-link to="/dashboard?tab=2"
					><ChevronLeftIcon
						class="w-8 h-8 text-white"
						aria-hidden="true" /></router-link
			></template>
			<template #iconRight
				><QuestionMarkCircleIcon
					class="w-6 h-6 text-green-500"
					aria-hidden="true"
			/></template>
		</TopNavigation>
		<main>
			<Steps text="Step 2 of 2">
				<template #step-one><CompletedStep /></template>
				<template #step-two><CurrentStep /></template>
			</Steps>
			<div class="flex flex-col pt-6 px-4">
				<h5 class="text-header-five font-semibold antialiased mb-2">
					Availability
				</h5>
				<p class="font-light">
					Set your weekly hours and add specific dates you may be
					unavailable
				</p>

				<div class="mt-12">
					<Tabs
						tab-one-classes="text-purple-900"
						tab-one-text="Weekly Hours"
						:tab-one-is-active="true"
						tab-two-classes="border-transparent text-gray-500 border-b-2 hover:text-gray-700 hover:border-gray-300"
						tab-two-text="Unavailability"
						:tab-two-is-active="false"
					/>

					<div class="border-b border-gray-50">
						<DayOrTimeAvailabilityRow>
							<template #toggleDay
								><ToggleButtonTextRight
									background-color="bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
									translate-x-position="translate-x-0"
									text="Sun"
							/></template>
							<template #removeIcon>&nbsp;</template>
							<template #inputHours
								><InputFieldTimeDisabled
									classes="w-input-sm mr-2"
									placeholder="Unavailable"
							/></template>
							<template #AddIcon
								><PlusIcon
									class="w-6 h-6 text-gray-500"
									aria-hidden="true"
							/></template>
						</DayOrTimeAvailabilityRow>
					</div>

					<div class="border-b border-gray-50">
						<DayOrTimeAvailabilityRow>
							<template #toggleDay
								><ToggleButtonTextRight
									background-color="bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
									translate-x-position="translate-x-6"
									text="Mon"
							/></template>
							<template #removeIcon>&nbsp;</template>
							<template #inputHours
								><InputFieldTimeEnabled
									classes="w-input-sm mr-2"
									value="09:00 - 11:00"
							/></template>
							<template #AddIcon
								><PlusIcon
									classes="w-6 h-6 text-purple-500"
									aria-hidden="true"
							/></template>
						</DayOrTimeAvailabilityRow>
						<DayOrTimeAvailabilityRow>
							<template #toggleDay>&nbsp;</template>
							<template #removeIcon
								><XCircleIcon
									class="w-6 h-6 text-gray-500"
									aria-hidden="true"
							/></template>
							<template #inputHours
								><InputFieldTimeEnabled
									classes="w-input-sm mr-2"
									value="13:00 - 17:00"
							/></template>
							<template #AddIcon
								><PlusIcon
									class="w-6 h-6 text-purple-500"
									aria-hidden="true"
							/></template>
						</DayOrTimeAvailabilityRow>
					</div>

					<div class="border-b border-gray-50">
						<DayOrTimeAvailabilityRow>
							<template #toggleDay
								><ToggleButtonTextRight
									background-color="bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
									translate-x-position="translate-x-6"
									text="Tue"
							/></template>
							<template #removeIcon>&nbsp;</template>
							<template #inputHours
								><InputFieldTimeEnabled
									classes="w-input-sm mr-2"
									value="09:00 - 11:00"
							/></template>
							<template #AddIcon
								><PlusIcon
									class="w-6 h-6 text-purple-500"
									aria-hidden="true"
							/></template>
						</DayOrTimeAvailabilityRow>
					</div>

					<div class="border-b border-gray-50">
						<DayOrTimeAvailabilityRow>
							<template #toggleDay
								><ToggleButtonTextRight
									background-color="bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
									translate-x-position="translate-x-6"
									text="Wed"
							/></template>
							<template #removeIcon>&nbsp;</template>
							<template #inputHours
								><InputFieldTimeEnabled
									classes="w-input-sm mr-2"
									value="09:00 - 11:00"
							/></template>
							<template #AddIcon
								><PlusIcon
									class="w-6 h-6 text-purple-500"
									aria-hidden="true"
							/></template>
						</DayOrTimeAvailabilityRow>
					</div>

					<div class="border-b border-gray-50">
						<DayOrTimeAvailabilityRow>
							<template #toggleDay
								><ToggleButtonTextRight
									background-color="bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
									translate-x-position="translate-x-6"
									text="Thur"
							/></template>
							<template #removeIcon>&nbsp;</template>
							<template #inputHours
								><InputFieldTimeEnabled
									classes="w-input-sm mr-2"
									value="09:00 - 11:00"
							/></template>
							<template #AddIcon
								><PlusIcon
									class="w-6 h-6 text-purple-500"
									aria-hidden="true"
							/></template>
						</DayOrTimeAvailabilityRow>
					</div>

					<div class="border-b border-gray-50">
						<DayOrTimeAvailabilityRow>
							<template #toggleDay
								><ToggleButtonTextRight
									background-color="bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
									translate-x-position="translate-x-6"
									text="Fri"
							/></template>
							<template #removeIcon>&nbsp;</template>
							<template #inputHours
								><InputFieldTimeEnabled
									classes="w-input-sm mr-2"
									value="09:00 - 11:00"
							/></template>
							<template #AddIcon
								><PlusIcon
									class="w-6 h-6 text-purple-500"
									aria-hidden="true"
							/></template>
						</DayOrTimeAvailabilityRow>
					</div>

					<div class="border-b border-gray-50">
						<DayOrTimeAvailabilityRow>
							<template #toggleDay
								><ToggleButtonTextRight
									background-color="bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
									translate-x-position="translate-x-6"
									text="Sat"
							/></template>
							<template #removeIcon>&nbsp;</template>
							<template #inputHours
								><InputFieldTimeEnabled
									classes="w-input-sm mr-2"
									value="09:00 - 11:00"
							/></template>
							<template #AddIcon
								><PlusIcon
									class="w-6 h-6 text-purple-500"
									aria-hidden="true"
							/></template>
						</DayOrTimeAvailabilityRow>
					</div>
				</div>

				<div class="flex flex-col justify-center items-center mt-16">
					<ButtonPrimary
						text="Save changes"
						classes="w-button-lg text-xl py-4"
					/>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../../components/navigation-and-tabs/TopNavigation.vue'

import Steps from '../../../../../../components/steps/Steps.vue'
import CompletedStep from '../../../../../../components/steps/types/CompletedStep.vue'
import CurrentStep from '../../../../../../components/steps/types/CurrentStep.vue'

import Tabs from '../../../../../../components/navigation-and-tabs/Tabs.vue'
import DayOrTimeAvailabilityRow from '../../../../../../components/availability/DayOrTimeRow.vue'
import ToggleButtonTextRight from '../../../../../../components/form/ToggleButtonTextRight.vue'
import InputFieldTimeEnabled from '../../../../../../components/form/InputFieldTimeEnabled.vue'
import InputFieldTimeDisabled from '../../../../../../components/form/InputFieldTimeDisabled.vue'
import ButtonPrimary from '../../../../../../components/buttons/ButtonPrimary.vue'

import {
	ChevronLeftIcon,
	QuestionMarkCircleIcon,
	PlusIcon,
	XCircleIcon,
} from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		Steps,
		CompletedStep,
		CurrentStep,
		Tabs,
		DayOrTimeAvailabilityRow,
		ToggleButtonTextRight,
		InputFieldTimeEnabled,
		InputFieldTimeDisabled,
		ButtonPrimary,
		ChevronLeftIcon,
		QuestionMarkCircleIcon,
		PlusIcon,
		XCircleIcon,
	},
}
</script>
