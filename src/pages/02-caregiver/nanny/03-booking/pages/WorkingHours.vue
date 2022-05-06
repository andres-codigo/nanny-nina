<template>
	<div class="w-full h-full">
		<TopNavigation text="Working Hours (The Sanders)">
			<template #iconLeft><router-link to="/dashboard"><ChevronLeftIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
			<template #iconRight><DotsVerticalIcon class="w-6 h-6 text-white" aria-hidden="true" /></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col pt-12 px-4">
				<form class="w-full" action="#" method="POST">
					<h5 class="text-header-five font-semibold antialiased mb-2">Booking schedule</h5>
					<p class="font-light">Update your schedule if you have worked extra hours, you can update your hours worked here within 24hrs. All payments are made within 24hrs.</p>

					<div class="mt-12">

						<div class="border-b border-gray-50">
							<DayTimeAddUpdateRow>
								<template #toggleDay>Sun, 24/03</template>
								<template #removeIcon>&nbsp;</template>
								<template #inputHours><InputFieldTimeEnabled class="w-input-sm mr-2" value="09:00 - 11:00" /></template>
								<template #AddIcon><PlusIcon class="w-6 h-6 text-purple-500" aria-hidden="true" /></template>
								<template #button><ButtonPrimary text="Update" class="w-button-xs text-sm ml-2 py-3" /></template>
							</DayTimeAddUpdateRow>
						</div>

						<div class="border-b border-gray-50">
							<DayTimeAddUpdateRow>
								<template #toggleDay>Mon, 25/03</template>
								<template #removeIcon>&nbsp;</template>
								<template #inputHours><InputFieldTimeEnabled class="w-input-sm mr-2" value="09:00 - 11:00" /></template>
								<template #AddIcon>&nbsp;</template>
								<template #button>&nbsp;</template>
							</DayTimeAddUpdateRow>
							<DayTimeAddUpdateRow>
								<template #toggleDay>&nbsp;</template>
								<template #removeIcon><XCircleIcon class="w-6 h-6 text-gray-500" aria-hidden="true" /></template>
								<template #inputHours><InputFieldTimeEnabled class="w-input-sm mr-2" value="13:00 - 17:00" /></template>
								<template #AddIcon><PlusIcon class="w-6 h-6 text-purple-500" aria-hidden="true" /></template>
								<template #button><ButtonDisabled text="Update" class="w-button-xs text-sm ml-2 py-3" /></template>
							</DayTimeAddUpdateRow>
						</div>

					</div>

					<!-- <div class="flex flex-col justify-center items-center mt-16">
						<ButtonPrimary text="Save" class="w-button-lg text-xl py-4" />
					</div> -->
				</form>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation-and-tabs/TopNavigation.vue'

import DayTimeAddUpdateRow from '../../../../../components/availability/working-hours/DayTimeAddUpdateRow.vue'
import ToggleButtonTextRight from '../../../../../components/form/ToggleButtonTextRight.vue'
import InputFieldTimeEnabled from '../../../../../components/form/InputFieldTimeEnabled.vue'
import InputFieldTimeDisabled from '../../../../../components/form/InputFieldTimeDisabled.vue'
import ButtonPrimary from '../../../../../components/buttons/ButtonPrimary.vue'
import ButtonDisabled from '../../../../../components/buttons/ButtonDisabled.vue'

import { ChevronLeftIcon, DotsVerticalIcon, PlusIcon, XCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		DayTimeAddUpdateRow,
		ToggleButtonTextRight,
		InputFieldTimeEnabled,
		InputFieldTimeDisabled,
		ButtonPrimary,
		ButtonDisabled,
		ChevronLeftIcon,
		DotsVerticalIcon,
		PlusIcon,
		XCircleIcon
	}
}
</script>