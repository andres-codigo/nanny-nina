<template>
	<div class="w-full h-full">
		<TopNavigation text="Notifications">
			<template #iconLeft
				><router-link to="'/dashboard?tab=1"
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
			<div class="flex flex-col pt-12 mx-4">
				<div class="mb-8">
					<h5 class="text-header-five font-semibold antialiased mb-2">
						Push Notifications
					</h5>
					<p class="text-gray-500 text-sm font-thin mb-3">
						Choose which push notifications you receive
					</p>
					<PushNotification />
					<PushNotification title="New Matches" />
					<PushNotification title="Messages" :toggle-off="true" />
					<PushNotification title="New Updates" />

					<hr class="border-1 border-gray-50 mt-10" />
				</div>

				<div class="mb-8">
					<h5 class="text-header-five font-semibold antialiased mb-2">
						SMS
					</h5>
					<p class="text-gray-500 text-sm font-thin mb-3">
						Choose which SMS notifications you receive
					</p>
					<PushNotification />
					<PushNotification title="New Matches" />

					<hr class="border-1 border-gray-50 mt-10 mb-8" />
				</div>

				<div class="mb-8">
					<h5 class="text-header-five font-semibold antialiased mb-2">
						Email
					</h5>
					<p class="text-gray-500 text-sm font-thin mb-3">
						Choose which email notifications you receive
					</p>
					<PushNotification />
					<PushNotification title="New Matches" />
					<PushNotification title="Messages" :toggle-off="true" />
					<PushNotification title="New Updates" :toggle-off="true" />
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../components/navigation-and-tabs/TopNavigation.vue'
import PushNotification from '../../../../components/notifications/PushNotification.vue'

import { ChevronLeftIcon, QuestionMarkCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		PushNotification,
		ChevronLeftIcon,
		QuestionMarkCircleIcon,
	},
}
</script>
