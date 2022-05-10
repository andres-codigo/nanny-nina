<template>
	<div class="w-full h-full">
		<TopNavigation text="Match Details">
			<template #iconLeft><router-link to="/dashboard"><ChevronLeftIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
			<template #iconRight><DotsVerticalIcon class="w-6 h-6 text-white" aria-hidden="true" /></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col pt-12 px-4">
				<form class="w-full" action="#" method="POST">
					<h5 class="text-header-five font-semibold antialiased mb-2">Parent Information</h5>

					<div class="flex flex-col">
						<div class="inline-flex mb-3">
							<div class="flex-none w-6 h-6"><LocationMarkerIcon class="w-5 h-5" /></div>
							<div class="font-thin">86A, Prins Hendrikkade, Amsterdam</div>
						</div>
						<div class="inline-flex mb-3">
							<div class="flex-none w-6 h-6"><CalendarIcon class="w-5 h-5" /></div>
							<div class="font-thin">6 months</div>
						</div>
						<div class="inline-flex mb-3">
							<div class="flex-none w-6 h-6"><UserIcon class="w-5 h-5" /></div>
							<div class="font-thin">2 children (John 2yr, Jessica 3yr) </div>
						</div>
					</div>

					<div class="flex flex-row pt-6 mb-2">
						<div class="basis-1/2">
							<h5 class="text-header-five font-semibold antialiased">Update booking</h5>
						</div>
						<div class="basis-1/2">
							<div class="inline-flex float-right items-center"><Img src="./assets/svg/other/clock-outline.svg" /><a href="#" target="_self" class="anchor-blue anchor-with-underline ml-1">Payment History</a></div>
						</div>
					</div>
					<p class="font-light">Update your schedule if you have worked extra hours within 24hrs. payments are made within 24hrs.</p>

					<div class="mt-6">

						<div class="border-b border-gray-50">
							<DayOrTimeBookingRow>
								<template #toggleDay><ToggleButtonTextRight backgroundColor="bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500" translateXPosition="translate-x-0" text="Sun" /></template>
								<template #removeIcon>&nbsp;</template>
								<template #inputHours><InputFieldTimeDisabled class="w-full mr-2" placeholder="Unavailable" /></template>
								<template #AddIcon><PlusIcon class="w-6 h-6 text-gray-500" aria-hidden="true" /></template>
							</DayOrTimeBookingRow>
						</div>

						<div class="border-b border-gray-50">
							<DayOrTimeBookingRow>
								<template #toggleDay><ToggleButtonTextRight backgroundColor="bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500" translateXPosition="translate-x-6" text="Mon" /></template>
								<template #removeIcon>&nbsp;</template>
								<template #inputHours><InputFieldTimeEnabled class="w-full mr-2" value="09:00 - 11:00" /></template>
								<template #AddIcon><PlusIcon class="w-6 h-6 text-purple-500" aria-hidden="true" /></template>
							</DayOrTimeBookingRow>
							<DayOrTimeBookingRow>
								<template #toggleDay>&nbsp;</template>
								<template #removeIcon><XCircleIcon class="w-6 h-6 text-gray-500" aria-hidden="true" /></template>
								<template #inputHours><InputFieldTimeEnabled class="w-full mr-2" value="13:00 - 17:00" /></template>
								<template #AddIcon><PlusIcon class="w-6 h-6 text-purple-500" aria-hidden="true" /></template>
							</DayOrTimeBookingRow>
						</div>

						<div class="border-b border-gray-50">
							<DayOrTimeBookingRow>
								<template #toggleDay><ToggleButtonTextRight backgroundColor="bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500" translateXPosition="translate-x-6" text="Tue" /></template>
								<template #removeIcon>&nbsp;</template>
								<template #inputHours><InputFieldTimeEnabled class="w-full mr-2" value="09:00 - 11:00" /></template>
								<template #AddIcon><PlusIcon class="w-6 h-6 text-purple-500" aria-hidden="true" /></template>
							</DayOrTimeBookingRow>
						</div>

						<div class="border-b border-gray-50">
							<DayOrTimeBookingRow>
								<template #toggleDay><ToggleButtonTextRight backgroundColor="bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500" translateXPosition="translate-x-6" text="Wed" /></template>
								<template #removeIcon>&nbsp;</template>
								<template #inputHours><InputFieldTimeEnabled class="w-full mr-2" value="09:00 - 11:00" /></template>
								<template #AddIcon><PlusIcon class="w-6 h-6 text-purple-500" aria-hidden="true" /></template>
							</DayOrTimeBookingRow>
						</div>

						<div class="border-b border-gray-50">
							<DayOrTimeBookingRow>
								<template #toggleDay><ToggleButtonTextRight backgroundColor="bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500" translateXPosition="translate-x-6" text="Thur" /></template>
								<template #removeIcon>&nbsp;</template>
								<template #inputHours><InputFieldTimeEnabled class="w-full mr-2" value="09:00 - 11:00" /></template>
								<template #AddIcon><PlusIcon class="w-6 h-6 text-purple-500" aria-hidden="true" /></template>
							</DayOrTimeBookingRow>
						</div>

						<div class="border-b border-gray-50">
							<DayOrTimeBookingRow>
								<template #toggleDay><ToggleButtonTextRight backgroundColor="bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500" translateXPosition="translate-x-6" text="Fri" /></template>
								<template #removeIcon>&nbsp;</template>
								<template #inputHours><InputFieldTimeEnabled class="w-full mr-2" value="09:00 - 11:00" /></template>
								<template #AddIcon><PlusIcon class="w-6 h-6 text-purple-500" aria-hidden="true" /></template>
							</DayOrTimeBookingRow>
						</div>

						<div class="border-b border-gray-50">
							<DayOrTimeBookingRow>
								<template #toggleDay><ToggleButtonTextRight backgroundColor="bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500" translateXPosition="translate-x-6" text="Sat" /></template>
								<template #removeIcon>&nbsp;</template>
								<template #inputHours><InputFieldTimeEnabled class="w-full mr-2" value="09:00 - 11:00" /></template>
								<template #AddIcon><PlusIcon class="w-6 h-6 text-purple-500" aria-hidden="true" /></template>
							</DayOrTimeBookingRow>
						</div>
					</div>

					<div class="flex flex-col justify-center items-center mt-16">
						<div class="grid grid-rows-2 gap-2">
							<div><ButtonPrimary text="Update" class="w-button-lg text-xl py-4" /></div>
							<div class="inline-flex items-center justify-center"><AnchorTextOnly text="Unmatch" /></div>
						</div>
					</div>
				</form>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation-and-tabs/TopNavigation.vue'
import Img from '../../../../../components/dom-elements/Img.vue'

import DayOrTimeBookingRow from '../../../../../components/availability/DayOrTimeRow.vue'
import ToggleButtonTextRight from '../../../../../components/form/ToggleButtonTextRight.vue'
import InputFieldTimeEnabled from '../../../../../components/form/InputFieldTimeEnabled.vue'
import InputFieldTimeDisabled from '../../../../../components/form/InputFieldTimeDisabled.vue'
import ButtonPrimary from '../../../../../components/buttons/ButtonPrimary.vue'
import AnchorTextOnly from '../../../../../components/dom-elements/AnchorTextOnly.vue'

import { ChevronLeftIcon, DotsVerticalIcon, LocationMarkerIcon, CalendarIcon, UserIcon, ClockIcon, PlusIcon, XCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		Img,
		DayOrTimeBookingRow,
		ToggleButtonTextRight,
		InputFieldTimeEnabled,
		InputFieldTimeDisabled,
		ButtonPrimary,
		AnchorTextOnly,
		ChevronLeftIcon,
		DotsVerticalIcon,
		LocationMarkerIcon,
		CalendarIcon,
		UserIcon,
		ClockIcon,
		PlusIcon,
		XCircleIcon
	}
}
</script>