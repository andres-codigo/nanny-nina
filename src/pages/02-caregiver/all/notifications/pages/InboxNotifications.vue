<template>
	<div class="w-full h-full">
		<TopNavigation text="Inbox">
			<template #iconRight><QuestionMarkCircleIcon class="w-6 h-6 text-green-500" aria-hidden="true" /></template>
		</TopNavigation>
		<main>
			<Tabs
				tabOneClasses="text-purple-900"
				tabOneText="Notifications"
				:tabOneIsActive="true"
				tabTwoClasses="border-transparent text-gray-500 border-b-2 hover:text-gray-700 hover:border-gray-300"
				tabTwoText="Chat"
				:tabTwoIsActive="false"
			/>

			<div class="flex flex-col">
				<InboxNotificationItem />
				<InboxNotificationItem src="./assets/svg/notifications/circle-green-heart-purple.svg">
					<template #notificationMessage>
						<p class="font-semibold antialiased">You received a tip from a parent</p>
						<p class="font-semibold antialiased">Say thanks!!</p>
						<p class="text-xs">31/11/2021 17:34</p>
					</template>
				</InboxNotificationItem>
				<InboxNotificationItem src="./assets/svg/notifications/circle-green-sticky-note-purple.svg" backgroundColor="bg-white">
					<template #notificationMessage>
						<p class="antialiased">Monthly Check up</p>
						<p class="text-xs text-gray-500">31/11/2021, 16:30</p>
					</template>
				</InboxNotificationItem>
				<InboxNotificationItem src="./assets/svg/notifications/circle-green-info-purple.svg" backgroundColor="bg-white">
					<template #notificationMessage>
						<p class="antialiased">How to get more matches with Nanny Nina?</p>
						<p class="antialiased">Get pro advise on how to make better matches</p>
						<p class="text-xs text-gray-500">31/11/2021</p>
					</template>
				</InboxNotificationItem>
				<InboxNotificationItem src="./assets/svg/notifications/circle-green-verified-purple.svg" backgroundColor="bg-white">
					<template #notificationMessage>
						<p class="antialiased">Whoop! You just got a match! Take a look</p>
						<p class="text-xs text-gray-500">31/11/2021</p>
					</template>
				</InboxNotificationItem>
				<InboxNotificationItem src="./assets/svg/notifications/circle-green-local-offer-purple.svg" backgroundColor="bg-white">
					<template #notificationMessage>
						<p class="antialiased">Don't miss out on tonight's promotion!</p>
						<p class="antialiased">Take a look</p>
						<p class="text-xs text-gray-500">31/11/2021</p>
					</template>
				</InboxNotificationItem>
				<InboxNotificationItem src="./assets/svg/notifications/circle-green-thumbs-up-purple.svg" backgroundColor="bg-white" :isLastNotificationItem="true">
					<template #notificationMessage>
						<p>The Johnson's are inviting you to apply for their babysitting job, Take a look!</p>
					</template>
				</InboxNotificationItem>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation-and-tabs/TopNavigation.vue'
import Tabs from '../../../../../components/navigation-and-tabs/Tabs.vue'
import InboxNotificationItem from '../../../../../components/notifications/InboxNotificationItem.vue'

import { QuestionMarkCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		Tabs,
		InboxNotificationItem,
		QuestionMarkCircleIcon
	}
}
</script>