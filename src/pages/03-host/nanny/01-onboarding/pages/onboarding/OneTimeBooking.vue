<template>
	<div class="w-full h-full">
		<TopNavigation text="One-time Booking">
			<template #iconLeft
				><router-link to="/dashboard?tab=3"
					><ChevronLeftIcon
						class="w-8 h-8 text-white"
						aria-hidden="true" /></router-link
			></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col pt-12 px-4">
				<form class="w-full" action="#" method="POST">
					<h5 class="text-header-five font-semibold antialiased mb-2">
						Plan your booking
					</h5>
					<p class="font-light">
						We generally accept a maximum of 6 days per one-time
						booking.
					</p>

					<div class="mt-12">
						<div class="flex items-center justify-between">
							<span class="flex flex-col">
								<span
									id="availability-label"
									class="text-purple-900 font-semibold antialiased"
									>Last Minute Booking</span
								>
								<span
									class="text-sm text-gray-500 font-thin pr-10"
									>I need a nanny urgently</span
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

						<h4
							class="text-header-four font-semibold antialiased mt-12 mb-4"
						>
							Dates &amp; Time Needed
						</h4>

						<Calendar />

						<p class="text-purple-900 font-semibold mt-16">
							Workday &amp; time
						</p>
						<p class="font-thin mt-6">
							You haven't selected any specific day
						</p>

						<div>
							<div class="border-b border-gray-50 py-3">
								<div class="flex flex-row py-3">
									<div
										class="inline-flex grow items-center w-32"
									>
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
									<div
										class="inline-flex items-center w-32 px-4"
									>
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
							<div class="border-b border-gray-50 py-3">
								<div class="flex flex-row py-3">
									<div
										class="inline-flex grow items-center w-32"
									>
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
									<div
										class="inline-flex items-center w-32 px-4"
									>
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
								<div class="flex flex-row py-3">
									<div
										class="inline-flex grow items-center w-32"
									>
										&nbsp;
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
									<div
										class="inline-flex items-center w-32 px-4"
									>
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
										&nbsp;
									</div>
								</div>
							</div>
						</div>
					</div>

					<div
						class="flex flex-col justify-center items-center mt-16"
					>
						<ButtonPrimary
							text="Next"
							classes="w-button-lg text-xl py-4"
						/>
					</div>
				</form>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../../components/navigation-and-tabs/TopNavigation.vue'
import Calendar from '../../../../../../components/calendar/Calendar.vue'
import ButtonPrimary from '../../../../../../components/buttons/ButtonPrimary.vue'

import { ChevronLeftIcon, XCircleIcon, PlusIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		Calendar,
		ButtonPrimary,
		ChevronLeftIcon,
		XCircleIcon,
		PlusIcon,
	},
}
</script>
