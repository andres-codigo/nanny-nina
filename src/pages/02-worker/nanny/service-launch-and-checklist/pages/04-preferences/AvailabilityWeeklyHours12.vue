<script setup>
import TopNavigation from '../../../../../../components/navigation/TopNavigation.vue'
import Tabs from '../../../../../../components/tabs/Tabs.vue'
import BadgeEnabled from '../../../../../../components/form/BadgeEnabled.vue'
import BadgeNotEnabled from '../../../../../../components/form/BadgeNotEnabled.vue'
import InputFieldTimeEnabled from '../../../../../../components/form/InputFieldTimeEnabled.vue'
import InputFieldTimeDisabled from '../../../../../../components/form/InputFieldTimeDisabled.vue'
import ButtonPrimary from '../../../../../../components/buttons/ButtonPrimary.vue'
</script>

<template>
	<div class="w-full h-full">
		<TopNavigation routerLinkPath="/dashboard" text="Availability" />
		<main>
			<div class="flex flex-col px-4 py-6">
				<h5 class="mt-8 mb-2 text-left text-header-five font-normal text-gray-900">Availability</h5>
				<p	class="font-light">Set your weekly hours and add specific dates you may be unavailable</p>

				<div class="mt-12">
					<Tabs
						tabOneClasses="border-b-2 border-purple-500 text-black"
						tabOneText="Weekly Hours"
						tabTwoClasses="border-transparent text-gray-500 border-b-2 hover:text-gray-700 hover:border-gray-300"
						tabTwoText="Unavailability"
					/>

					<div class="border-b border-gray-50">
						<div class="flex h-20">
							<div class="inline-flex justify-center items-center w-24"><BadgeNotEnabled text="Sun" /></div>
							<div class="flex-none inline-flex justify-center items-center w-14">&nbsp;</div>
							<div class="inline-flex grow justify-center items-center px-4"><InputFieldTimeDisabled placeholder="Unavailable" /></div>
							<div class="flex-none inline-flex justify-center items-center w-10"><PlusIcon class="w-5 h-5 text-indigo-500" aria-hidden="true" /></div>
						</div>
					</div>

					<div class="border-b border-gray-50">
						<div class="flex h-20">
							<div class="inline-flex justify-center items-center w-24"><BadgeEnabled text="Mon" /></div>
							<div class="flex-none inline-flex justify-center items-center w-14">&nbsp;</div>
							<div class="inline-flex grow justify-center items-center px-4"><InputFieldTimeEnabled placeholder="09:00 - 11:00" /></div>
							<div class="flex-none inline-flex justify-center items-center w-10">&nbsp;</div>
						</div>
						<div class="flex h-20">
							<div class="inline-flex justify-center items-center w-24">&nbsp;</div>
							<div class="flex-none inline-flex justify-center items-center w-14"><XCircleIcon class="w-5 h-5 text-gray-500" aria-hidden="true" /></div>
							<div class="inline-flex grow justify-center items-center px-4"><InputFieldTimeEnabled placeholder="13:00 - 17:00" /></div>
							<div class="flex-none inline-flex justify-center items-center w-10"><PlusIcon class="w-5 h-5 text-indigo-500" aria-hidden="true" /></div>
						</div>
					</div>

					<div class="border-b border-gray-50">
						<div class="flex h-20">
							<div class="inline-flex justify-center items-center w-24"><BadgeEnabled text="Tue" /></div>
							<div class="flex-none inline-flex justify-center items-center w-14"><XCircleIcon class="w-5 h-5 text-gray-500" aria-hidden="true" /></div>
							<div class="inline-flex grow justify-center items-center px-4"><InputFieldTimeEnabled placeholder="09:00 - 17:00" /></div>
							<div class="flex-none inline-flex justify-center items-center w-10"><PlusIcon class="w-5 h-5 text-indigo-500" aria-hidden="true" /></div>
						</div>
					</div>

				</div>

				<div class="mt-24">
					<ButtonPrimary text="Save" />
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import { PlusIcon, XCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
		PlusIcon,
		XCircleIcon
	}
}
</script>