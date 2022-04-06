<template>
	<div class="w-full h-full">
		<TopNavigation text="Availability">
			<template #iconLeft><router-link to="/dashboard"><ChevronLeftIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
			<template #iconRight><QuestionMarkCircleIcon class="w-6 h-6 text-green-500" aria-hidden="true" /></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col px-4 py-6">
				<h5 class="text-left text-header-five font-semibold antialiased mt-8 mb-2">Availability</h5>
				<p	class="font-light">Set your weekly hours and add specific dates you may be unavailable</p>

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

				<div class="flex flex-col justify-center items-center mt-16">
					<ButtonPrimary text="Save Changes" class="w-button-lg text-xl py-4" />
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../../components/navigation/TopNavigation.vue'
import Tabs from '../../../../../../components/tabs/Tabs.vue'
import ToggleButton from '../../../../../../components/form/ToggleButton.vue'
import InputFieldTimeEnabled from '../../../../../../components/form/InputFieldTimeEnabled.vue'
import InputFieldTimeDisabled from '../../../../../../components/form/InputFieldTimeDisabled.vue'
import ButtonPrimary from '../../../../../../components/buttons/ButtonPrimary.vue'

import { ChevronLeftIcon, QuestionMarkCircleIcon, PlusIcon, XCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		Tabs,
		ToggleButton,
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