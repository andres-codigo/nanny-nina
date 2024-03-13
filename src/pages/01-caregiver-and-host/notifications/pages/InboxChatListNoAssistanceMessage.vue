<template>
	<div class="w-full h-full">
		<TopNavigation text="Inbox">
			<template #iconRight
				><QuestionMarkCircleIcon
					class="w-6 h-6 text-green-500"
					aria-hidden="true"
			/></template>
		</TopNavigation>
		<main>
			<Tabs
				tab-one-classes="border-transparent text-gray-500 border-b-2 hover:text-gray-700 hover:border-gray-300"
				tab-one-text="Notifications"
				:tab-one-is-active="false"
				tab-two-classes="text-purple-900"
				tab-two-text="Chat"
				:tab-two-is-active="true"
			/>

			<div class="pt-6 mx-4">
				<div class="pb-6">
					<h6 class="antialiased font-semibold text-header-six">
						Need Assistance?
					</h6>

					<hr class="mt-2 mb-4 border-1 border-gray-50" />

					<InboxChatCard />
				</div>

				<div class="pt-6">
					<h6 class="pb-4 antialiased font-semibold text-header-six">
						Your conversations
					</h6>

					<hr class="border-1 border-gray-50" />

					<ul role="list">
						<ChatItem />
						<ChatItem
							user="The Johnsons"
							message="I just saw your time sheet, approved!"
							date-or-time="Yesterday"
							number-of-messages="10"
						/>
						<ChatItem
							:user-is-online="false"
							user="The Theos"
							message="Okay, Expecting you"
							date-or-time="20/05/2022"
							:is-old-message="true"
							:has-messages="false"
						/>
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
		QuestionMarkCircleIcon,
	},
}
</script>
