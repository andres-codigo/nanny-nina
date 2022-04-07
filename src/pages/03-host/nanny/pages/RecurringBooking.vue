<template>
	<div class="w-full h-full">
		<TopNavigation text="Recurring Booking">
			<template #iconLeft><router-link to="/dashboard"><ChevronLeftIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col px-4 py-6">
				<form class="w-full" action="#" method="POST">
					<h5 class="text-left text-header-five font-semibold antialiased mt-8 mb-2">Awesome</h5>
					<p	class="font-light">Select the day &amp; add time you need a nanny</p>

					<div class="mt-12">

							<div class="flex items-center justify-between">
								<span class="flex flex flex-col">
									<span class="text-purple-900 font-bold" id="availability-label">Last Minute Booking</span>
									<span class="text-sm text-gray-500 font-thin">I need a nanny urgently</span>
								</span>
								<!-- Enabled: "bg-purple-600", Not Enabled: "bg-gray-500" -->
								<button type="button" class="bg-gray-500 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" role="switch" aria-checked="false" aria-labelledby="availability-label" aria-describedby="availability-description">
									<!-- Enabled: "translate-x-6", Not Enabled: "translate-x-0" -->
									<span aria-hidden="true" class="translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"></span>
								</button>
							</div>

							<h4 class="text-left text-header-four font-semibold antialiased mt-12 mb-4">Week hours Needed</h4>

							<div class="border-y border-gray-50">
								<div class="flex flex-row  h-20">
									<div class="inline-flex justify-center items-center w-24">
										<ToggleButton backgroundColor="bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500" translateXPosition="translate-x-0" text="Sun" />
									</div>
									<div class="inline-flex justify-center items-center w-14">&nbsp;</div>
									<div class="inline-flex grow justify-center items-center px-4"><InputFieldTimeDisabled placeholder="Unavailable" /></div>
									<div class="inline-flex justify-center items-center w-10"><PlusIcon class="w-6 h-6 text-gray-500" aria-hidden="true" /></div>
								</div>
							</div>

							<div class="border-b border-gray-50">
								<div class="flex flex-row h-20">
									<div class="inline-flex justify-center items-center w-24">
										<ToggleButton backgroundColor="bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500" translateXPosition="translate-x-6" text="Mon" />
									</div>
									<div class="inline-flex justify-center items-center w-14">&nbsp;</div>
									<div class="inline-flex grow justify-center items-center px-4"><InputFieldTimeEnabled value="09:00 - 11:00" /></div>
									<div class="inline-flex justify-center items-center w-10"><PlusIcon class="w-6 h-6 text-purple-500" aria-hidden="true" /></div>
								</div>
								<div class="flex flex-row h-20">
									<div class="inline-flex justify-center items-center w-24">&nbsp;</div>
									<div class="inline-flex justify-center items-center w-14"><a href="#" target="_self"><XCircleIcon class="w-6 h-6 text-gray-500" aria-hidden="true" /></a></div>
									<div class="inline-flex grow justify-center items-center px-4"><InputFieldTimeEnabled value="13:00 - 17:00" /></div>
									<div class="inline-flex justify-center items-center w-10"><PlusIcon class="w-6 h-6 text-purple-500" aria-hidden="true" /></div>
								</div>
							</div>

							<div class="border-b border-gray-50">
								<div class="flex flex-row  h-20">
									<div class="inline-flex justify-center items-center w-24">
										<ToggleButton backgroundColor="bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500" translateXPosition="translate-x-6" text="Tue" />
									</div>
									<div class="inline-flex justify-center items-center w-14">&nbsp;</div>
									<div class="inline-flex grow justify-center items-center px-4"><InputFieldTimeEnabled value="09:00 - 17:00" /></div>
									<div class="inline-flex justify-center items-center w-10"><PlusIcon class="w-6 h-6 text-purple-500" aria-hidden="true" /></div>
								</div>
							</div>

							<div class="border-b border-gray-50">
								<div class="flex flex-row  h-20">
									<div class="inline-flex justify-center items-center w-24">
										<ToggleButton backgroundColor="bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500" translateXPosition="translate-x-6" text="Wed" />
									</div>
									<div class="inline-flex justify-center items-center w-14">&nbsp;</div>
									<div class="inline-flex grow justify-center items-center px-4"><InputFieldTimeEnabled value="09:00 - 17:00" /></div>
									<div class="inline-flex justify-center items-center w-10"><PlusIcon class="w-6 h-6 text-purple-500" aria-hidden="true" /></div>
								</div>
							</div>

							<div class="border-b border-gray-50">
								<div class="flex flex-row  h-20">
									<div class="inline-flex justify-center items-center w-24">
										<ToggleButton backgroundColor="bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500" translateXPosition="translate-x-6" text="Thur" />
									</div>
									<div class="inline-flex justify-center items-center w-14">&nbsp;</div>
									<div class="inline-flex grow justify-center items-center px-4"><InputFieldTimeEnabled value="09:00 - 17:00" /></div>
									<div class="inline-flex justify-center items-center w-10"><PlusIcon class="w-6 h-6 text-purple-500" aria-hidden="true" /></div>
								</div>
							</div>

							<div class="border-b border-gray-50">
								<div class="flex flex-row  h-20">
									<div class="inline-flex justify-center items-center w-24">
										<ToggleButton backgroundColor="bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500" translateXPosition="translate-x-6" text="Fri" />
									</div>
									<div class="inline-flex justify-center items-center w-14">&nbsp;</div>
									<div class="inline-flex grow justify-center items-center px-4"><InputFieldTimeEnabled value="09:00 - 17:00" /></div>
									<div class="inline-flex justify-center items-center w-10"><PlusIcon class="w-6 h-6 text-purple-500" aria-hidden="true" /></div>
								</div>
							</div>

							<div class="border-b border-gray-50">
								<div class="flex flex-row  h-20">
									<div class="inline-flex justify-center items-center w-24">
										<ToggleButton backgroundColor="bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500" translateXPosition="translate-x-6" text="Sat" />
									</div>
									<div class="inline-flex justify-center items-center w-14">&nbsp;</div>
									<div class="inline-flex grow justify-center items-center px-4"><InputFieldTimeEnabled value="09:00 - 17:00" /></div>
									<div class="inline-flex justify-center items-center w-10"><PlusIcon class="w-6 h-6 text-purple-500" aria-hidden="true" /></div>
								</div>
							</div>

					</div>

					<div class="mt-12">
						<h5 class="text-left text-header-five font-semibold antialiased my-6">Preferred Start Date</h5>
						<div class="mt-4 grid grid-cols-2 gap-x-2">
							<div><InputField text="Starting from" /></div>
						</div>
					</div>

					<div class="mt-12">
						<h5 class="text-left text-header-five font-semibold antialiased my-6">Duration</h5>
						<div class="mt-4 grid grid-cols-2 gap-x-2">
							<div><SelectMenu optionText="- No end -" labelText="How long?" /></div>
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
import TopNavigation from '../../../../components/navigation/TopNavigation.vue'
import ToggleButton from '../../../../components/form/ToggleButton.vue'
import InputField from '../../../../components/form/InputField.vue'
import InputFieldTimeEnabled from '../../../../components/form/InputFieldTimeEnabled.vue'
import InputFieldTimeDisabled from '../../../../components/form/InputFieldTimeDisabled.vue'
import SelectMenu from '../../../../components/form/SelectMenu.vue'
import ButtonPrimary from '../../../../components/buttons/ButtonPrimary.vue'

import { ChevronLeftIcon, QuestionMarkCircleIcon, PlusIcon, XCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		ToggleButton,
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