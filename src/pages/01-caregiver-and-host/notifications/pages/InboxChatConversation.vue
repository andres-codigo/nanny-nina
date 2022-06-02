<template>
	<div class="w-full h-full">
		<TopNavigation text="Hannah">
			<template #iconLeft><router-link to="/dashboard?tab=2"><ChevronLeftIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
			<template #profileImage>
				<div class="flex-none w-8 mr-2">
					<img class="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
				</div>
			</template>
			<template #iconRight><a href="tel:+31 6844 8434"><Img src="./assets/svg/other/phone-white.svg" /></a></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col pt-16 mx-4 pb-60">
				<div class="grid grid-cols-1 gap-y-6">
					<SentMessage message="Hi this is Crystel, how can I help you today?" />
					<ReplyMessageItem message="Hi Crystsel" />
					<SentMessage message="Hi, How can I help you?" :showSentDate="true" />
					<ReplyMessageItem message="A parent is asking to pay me outside the platform" />
					<SentMessage message="And how is this a problem?" />
					<ReplyMessageItem message="One minute..." :showMessageReadSeen="true" />
					<SentMessage message="And how is this a problem?" />
					<ReplyMessageItem message="One minute... just checking the padding bottom... thanks" :showMessageReadSeen="true" messageReadSeen="Seen" />
				</div>
			</div>
			<section class="fixed inset-x-0 z-10 block w-full bg-white border-t bottom-20 border-gray">
				<div class="flex px-8 py-6">
					<div class="mr-4 grow">
						<label for="email" class="sr-only">Start a message</label>
						<input
							id="message"
							name="message"
							type="text"
							placeholder="Start a message"
							class="w-full px-4 py-2 text-sm text-gray-500 border border-gray-500 rounded-full appearance-none caret-blue-500 bg-gray-50 focus:outline-none focus:ring-0 focus:border focus:border-gray-500 focus:text-purple-900" />

					</div>
					<div class="grow-0">
						<ButtonPrimary class="px-1 py-1 rounded-10px">
							<template #leadingIcon>
								<Img src="./assets/svg/messages/send-message-button.svg" />
							</template>
						</ButtonPrimary>
					</div>
				</div>
			</section>
		</main>
		<footer>
			<CaregiverBottomMenu :isHomeSelected="false" :isInboxSelected="true" />
		</footer>
	</div>
</template>

<script>
import TopNavigation from '../../../../components/navigation-and-tabs/TopNavigation.vue'
import Img from '../../../../components/dom-elements/Img.vue'
import SentMessage from '../../../../components/messages/SentMessageItem.vue'
import ReplyMessageItem from '../../../../components/messages/ReplyMessageItem.vue'
import CaregiverBottomMenu from '../../../../components/menu/CaregiverBottomMenu.vue'
import ButtonPrimary from '../../../../components/buttons/ButtonPrimary.vue'

import { ChevronLeftIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		Img,
		SentMessage,
		ReplyMessageItem,
		CaregiverBottomMenu,
		ButtonPrimary,
		ChevronLeftIcon
	}
}
</script>