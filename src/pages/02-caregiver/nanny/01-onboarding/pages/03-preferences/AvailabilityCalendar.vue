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
						tab-one-classes="border-transparent text-gray-500 border-b-2 hover:text-gray-700 hover:border-gray-300"
						tab-one-text="Weekly Hours"
						:tab-one-is-active="false"
						tab-two-classes="text-purple-900"
						tab-two-text="Unavailability"
						:tab-two-is-active="true"
					/>

					<p class="mt-8 mx-10 font-thin text-center text-gray-500">
						Your unavailability on the specific dates, exceptions to
						the regular schedule
					</p>

					<div class="flex items-center justify-between my-8 mx-10">
						<span class="flex flex-col">
							<span
								id="availability-label"
								class="font-thin text-purple-900"
								>I'm selecting single days</span
							>
						</span>
						<!-- Enabled: "bg-purple-600", Not Enabled: "bg-gray-500" -->
						<button
							type="button"
							class="bg-gray-500 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							role="switch"
							aria-checked="false"
							aria-labelledby="availability-label"
							aria-describedby="availability-description"
						>
							<!-- Enabled: "translate-x-6", Not Enabled: "translate-x-0" -->
							<span
								aria-hidden="true"
								class="translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
							></span>
						</button>
					</div>

					<Calendar />

					<p class="text-purple-900 font-semibold mt-16">
						Workday &amp; time
					</p>
					<p class="font-thin mt-6">
						You haven't selected any specific day
					</p>

					<div class="grid grid-rows-2 gap-2">
						<div class="border-b border-gray-50">
							<div class="flex flex-row h-20">
								<div class="inline-flex grow items-center w-32">
									Sun, 10/02/2022
								</div>
								<div
									class="inline-flex justify-center items-center w-8"
								>
									<a href="#" target="_self"
										><XCircleIcon
											class="w-6 h-6 text-gray-500"
											aria-hidden="true"
									/></a>
								</div>
								<div class="inline-flex items-center w-32 px-4">
									<a
										href="#"
										target="_self"
										class="anchor-blue anchor-with-underline"
										>9:00 - 18:00</a
									>
								</div>
								<div
									class="inline-flex justify-center items-center w-10"
								>
									<PlusIcon
										class="w-6 h-6 text-purple-500"
										aria-hidden="true"
									/>
								</div>
							</div>
						</div>
						<div class="border-b border-gray-50">
							<div class="flex flex-row h-20">
								<div class="inline-flex grow items-center w-32">
									Mon, 11/02/2022
								</div>
								<div
									class="inline-flex justify-center items-center w-8"
								>
									<a href="#" target="_self"
										><XCircleIcon
											class="w-6 h-6 text-gray-500"
											aria-hidden="true"
									/></a>
								</div>
								<div class="inline-flex items-center w-32 px-4">
									<a
										href="#"
										target="_self"
										class="anchor-blue anchor-with-underline"
										>9:00 - 18:00</a
									>
								</div>
								<div
									class="inline-flex justify-center items-center w-10"
								>
									<PlusIcon
										class="w-6 h-6 text-purple-500"
										aria-hidden="true"
									/>
								</div>
							</div>
						</div>
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
import Calendar from '../../../../../../components/calendar/Calendar.vue'
import ButtonPrimary from '../../../../../../components/buttons/ButtonPrimary.vue'

import {
	ChevronLeftIcon,
	QuestionMarkCircleIcon,
	XCircleIcon,
	PlusIcon,
} from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		Steps,
		CompletedStep,
		CurrentStep,
		Tabs,
		Calendar,
		ButtonPrimary,
		ChevronLeftIcon,
		QuestionMarkCircleIcon,
		XCircleIcon,
		PlusIcon,
	},
}
</script>
