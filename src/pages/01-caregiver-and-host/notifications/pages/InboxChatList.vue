<template>
	<div class="w-full h-full">
		<TopNavigation text="Inbox">
			<template #iconRight><QuestionMarkCircleIcon class="w-6 h-6 text-green-500" aria-hidden="true" /></template>
		</TopNavigation>
		<main>
			<Tabs
				tabOneClasses="border-transparent text-gray-500 border-b-2 hover:text-gray-700 hover:border-gray-300"
				tabOneText="Notifications"
				:tabOneIsActive="false"
				tabTwoClasses="text-purple-900"
				tabTwoText="Chat"
				:tabTwoIsActive="true"
			/>

			<div class="pt-6 mx-4">
				<div class="pb-16">
					<h6 class="antialiased font-semibold text-header-six">Need Assistance?</h6>

					<hr class="mt-2 mb-4 border-1 border-gray-50" />

					<ul role="list">
						<ChatItem
							src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
							user="Hannah"
							message="Hey Brittany, how can I help you?"
							dateOrTime="12:13"
							numberOfMessages="1"
						/>
					</ul>
				</div>

				<div class="flex flex-col pt-6">
					<h6 class="pb-4 antialiased font-semibold text-header-six">Your conversations</h6>

					<hr class="border-1 border-gray-50" />

					<ul role="list">
						<ChatItem />
						<ChatItem user="Hannah" message="Hey Brittany, how can I help you?" dateOrTime="Yesterday" numberOfMessages="10" />
						<ChatItem :userIsOnline="false" user="The Theos" message="Okay, Expecting you" dateOrTime="20/05/2022" isOldMessage="true" :hasMessages="false" />
					</ul>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../components/navigation-and-tabs/TopNavigation.vue'
import Tabs from '../../../../components/navigation-and-tabs/Tabs.vue'
import InboxChatCard from '../../../../components/cards/inbox-chat-card/InboxChatCard.vue'
import ChatItem from '../../../../components/chats/ChatItem.vue'

import { QuestionMarkCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		Tabs,
		InboxChatCard,
		ChatItem,
		QuestionMarkCircleIcon
	}
}
</script>