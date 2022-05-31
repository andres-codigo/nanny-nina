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
				<h6 class="text-header-six font-semibold antialiased">Need Assistance?</h6>

				<hr class="border-1 border-gray-50 mt-2 mb-4" />

				<InboxChatCard />

				<div class="flex flex-col pt-6">
					<h6 class="text-header-six font-semibold antialiased pb-4">Your conversations</h6>

					<hr class="border-1 border-gray-50" />

					<ul role="list">
						<ChatItem />
						<ChatItem user="The Johnsons" message="I just saw your time sheet, approved!" dateOrTime="Yesterday" numberOfMessages="10" />
						<ChatItem :userIsOnline="false" user="The Theos" message="Okay, Expecting you" dateOrTime="20/05/2022" isOldMessage="true" :hasMessages="false" />
					</ul>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation-and-tabs/TopNavigation.vue'
import Tabs from '../../../../../components/navigation-and-tabs/Tabs.vue'
import InboxChatCard from '../../../../../components/cards/inbox-chat-card/InboxChatCard.vue'
import ChatItem from '../../../../../components/chats/ChatItem.vue'

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