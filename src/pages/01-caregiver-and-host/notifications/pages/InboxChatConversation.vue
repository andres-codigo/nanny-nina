<template>
	<div class="w-full h-full">
		<TopNavigation text="Hannah">
			<template #iconLeft
				><router-link to="/dashboard?tab=1"
					><ChevronLeftIcon
						class="w-8 h-8 text-white"
						aria-hidden="true" /></router-link
			></template>
			<template #profileImage>
				<div class="flex-none w-8 mr-2">
					<img
						class="w-8 h-8 rounded-full"
						src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
						alt=""
					/>
				</div>
			</template>
			<template #iconRight
				><a href="tel:+31 6844 8434"
					><ImageComponent
						src="./assets/svg/other/phone-white.svg" /></a
			></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col pt-16 mx-4 pb-60">
				<div class="grid grid-cols-1 gap-y-6">
					<SentMessage
						message="Hi this is Crystel, how can I help you today?"
					/>
					<ReplyMessageItem message="Hi Crystsel" />
					<SentMessage
						message="Hi, How can I help you?"
						:show-sent-date="true"
					/>
					<ReplyMessageItem
						message="A parent is asking to pay me outside the platform"
					/>
					<SentMessage message="And how is this a problem?" />
					<ReplyMessageItem
						message="One minute..."
						:show-message-read-seen="true"
					/>
					<SentMessage message="And how is this a problem?" />
					<ReplyMessageItem
						message="One minute... just checking the padding bottom... thanks"
						:show-message-read-seen="true"
						message-read-seen="Seen"
					/>
				</div>
			</div>
			<section
				class="fixed inset-x-0 z-10 block w-full bg-white border-t bottom-20 border-gray"
			>
				<form class="w-full" action="#" method="POST">
					<div class="flex px-8 py-6">
						<div class="mr-4 grow">
							<label for="email" class="sr-only"
								>Start a message</label
							>
							<input
								id="message"
								name="message"
								type="text"
								placeholder="Start a message"
								class="w-full px-4 py-2 text-sm text-gray-500 border border-gray-500 rounded-full appearance-none caret-blue-500 bg-gray-50 focus:outline-none focus:ring-0 focus:border focus:border-gray-500 focus:text-purple-900"
							/>
						</div>
						<div class="grow-0">
							<ButtonPrimary classes="px-1 py-0.5 rounded-10px">
								<template #leadingIcon>
									<ImageComponent
										src="./assets/svg/messages/send-message-button.svg"
									/>
								</template>
							</ButtonPrimary>
						</div>
					</div>
				</form>
			</section>
		</main>
		<footer>
			<CaregiverBottomMenu
				:is-home-selected="false"
				:is-inbox-selected="true"
			/>
		</footer>
	</div>
</template>

<script>
import TopNavigation from '../../../../components/navigation-and-tabs/TopNavigation.vue'
import ImageComponent from '../../../../components/dom-elements/ImageComponent.vue'
import SentMessage from '../../../../components/messages/SentMessageItem.vue'
import ReplyMessageItem from '../../../../components/messages/ReplyMessageItem.vue'
import CaregiverBottomMenu from '../../../../components/menu/CaregiverBottomMenu.vue'
import ButtonPrimary from '../../../../components/buttons/ButtonPrimary.vue'

import { ChevronLeftIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		ImageComponent,
		SentMessage,
		ReplyMessageItem,
		CaregiverBottomMenu,
		ButtonPrimary,
		ChevronLeftIcon,
	},
}
</script>
