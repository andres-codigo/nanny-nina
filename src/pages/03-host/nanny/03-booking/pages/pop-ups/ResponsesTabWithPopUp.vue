<template>
	<!--
	PART ONE OF THREE
	When calling a pop-up you'll need to add a 'relative' class to the parent
-->
	<div class="relative w-full h-full">
		<TopNavigation text="Booking">
			<template #iconRight
				><QuestionMarkCircleIcon
					class="w-6 h-6 text-green-500"
					aria-hidden="true"
			/></template>
		</TopNavigation>
		<main>
			<Tabs
				tab-one-classes="text-purple-900"
				tab-one-text="Responses"
				:tab-one-is-active="true"
				tab-two-classes="border-transparent text-gray-500 border-b-2 hover:text-gray-700 hover:border-gray-300"
				tab-two-text="Matches"
				:tab-two-is-active="false"
				:display-third-tab="true"
				tab-three-classes="border-transparent text-gray-500 border-b-2 hover:text-gray-700 hover:border-gray-300"
				tab-three-text="History"
				:tab-three-is-active="false"
			/>

			<div class="flex flex-col mx-4 z-0">
				<div class="pt-6 mx-4 mb-4">
					<h4 class="text-header-four font-semibold antialiased">
						Your Responses
					</h4>
				</div>

				<div class="flex flex-col">
					<ResponsesCard
						classes="text-purple-900 bg-lilac-50 hover:bg-lilac-100 focus:bg-lilac-200"
						badge-class="bg-lilac-100 text-purple-900"
						badge-text="One-time nanny"
						title="After School Nanny Needed..."
					>
						<template #details
							><p
								class="text-xs text-purple-900 pt-1 leading-none"
							>
								Shared 5mins ago > 20+ responses
							</p></template
						>
						<template #chevron
							><ChevronRightIcon
								class="absolute right-4 top-28 w-8 h-8"
								aria-hidden="true"
						/></template>
					</ResponsesCard>

					<ResponsesCard
						classes="text-purple-900 bg-green-500 hover:bg-green-400 focus:bg-green-600"
						badge-class="bg-green-50 text-purple-900"
						badge-text="Recurring nanny"
						title="Nanny needed every week.."
					>
						<template #details
							><p
								class="text-xs text-purple-900 pt-1 leading-none"
							>
								Shared 5mins ago > 20+ responses
							</p></template
						>
						<template #chevron
							><ChevronRightIcon
								class="absolute right-4 top-28 w-8 h-8"
								aria-hidden="true"
						/></template>
					</ResponsesCard>

					<ResponsesCard
						classes="text-white bg-purple-500 hover:bg-purple-300 focus:bg-purple-600"
						badge-class="bg-lilac-100 text-purple-900"
						badge-text="Event nanny"
						badge-svg="./assets/svg/badges/event.svg"
						title="Birthday party in Amsteveen"
					>
						<template #details
							><p class="text-xs text-white pt-1">
								Shared 5mins ago > 20+ responses
							</p></template
						>
						<template #chevron
							><ChevronRightIcon
								class="absolute right-4 top-28 w-8 h-8"
								aria-hidden="true"
						/></template>
					</ResponsesCard>
				</div>
			</div>
		</main>
		<!--
			PART TWO OF THREE
			I've wrapped the pop-up around a <section> HTML tag below for ease of separation of code for you
		-->
		<section>
			<div
				class="absolute inset-x-0 bottom-0 h-3/4 z-index-10 w-full rounded-t-30px bg-white border border-gray-500 px-4 pt-6"
			>
				<div class="flex flex-col pt-12">
					<!--
						PART THREE OF THREE
						The below DOM will naturally vary depending on what is been displayed, whereas everything above is by and large necessary
					-->
					<h5 class="text-header-five font-semibold antialiased mb-6">
						Invite to:
					</h5>
					<div class="flex flex-col">
						<ul role="list">
							<NotificationItem
								title="Need Nanny Near Sloterdijk tomorrow"
								description=""
							>
								<template #iconLeft
									><ImageComponent
										src="./assets/svg/ticks-and-crosses/tick-blue-background.svg"
								/></template>
								<template #description>
									<div
										class="flex flex-wrap gap-0 gap-y-2 mt-4"
									>
										<div class="inline-flex items-center">
											<span class="text-sm leading-none"
												>One-time booking</span
											><Dot color="bg-gray-500" />
										</div>
										<div class="inline-flex items-center">
											<span class="text-sm leading-none"
												>3 days</span
											>
										</div>
										<div class="inline-flex items-center">
											<Dot color="bg-gray-500" />
											<span class="text-sm leading-none"
												>&euro;13-&euro;16</span
											>
										</div>
									</div>
								</template>
							</NotificationItem>
							<NotificationItem
								title="Need Nanny Near Sloterdijk tomorrow"
								background-color="bg-lilac-50"
							>
								<template #iconLeft
									><ImageComponent
										src="./assets/svg/ticks-and-crosses/tick-blue-background.svg"
								/></template>
								<template #description>
									<div
										class="flex flex-wrap gap-0 gap-y-2 mt-4"
									>
										<div class="inline-flex items-center">
											<span class="text-sm leading-none"
												>One-time booking</span
											><Dot color="bg-gray-500" />
										</div>
										<div class="inline-flex items-center">
											<span class="text-sm leading-none"
												>3 days</span
											>
										</div>
										<div class="inline-flex items-center">
											<Dot color="bg-gray-500" />
											<span class="text-sm leading-none"
												>&euro;13-&euro;16</span
											>
										</div>
									</div>
								</template>
							</NotificationItem>
						</ul>
					</div>

					<div
						class="flex flex-col justify-center items-center mt-32"
					>
						<ButtonPrimary
							text="Invite"
							classes="w-button-base text-xl py-4"
						/>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import TopNavigation from '../../../../../../components/navigation-and-tabs/TopNavigation.vue'
import Tabs from '../../../../../../components/navigation-and-tabs/Tabs.vue'
import ImageComponent from '../../../../../../components/dom-elements/ImageComponent.vue'
import Dot from '../../../../../../components/dom-elements/Dot.vue'
import ResponsesCard from '../../../../../../components/cards/responses-card/ResponsesCard.vue'
import NotificationItem from '../../../../../../components/notifications/pop-up/NotificationItem.vue'
import ButtonPrimary from '../../../../../../components/buttons/ButtonPrimary.vue'

import { QuestionMarkCircleIcon, ChevronRightIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		Tabs,
		ImageComponent,
		Dot,
		ResponsesCard,
		NotificationItem,
		ButtonPrimary,
		QuestionMarkCircleIcon,
		ChevronRightIcon,
	},
}
</script>
