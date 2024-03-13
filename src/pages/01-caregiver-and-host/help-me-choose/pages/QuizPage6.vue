<template>
	<div class="w-full h-full">
		<TopNavigation
			background-color="bg-white"
			:display-border-bottom="false"
		>
			<template #iconLeft
				><router-link to="/dashboard?tab=1"
					><ChevronLeftIcon
						class="w-8 h-8 text-purple-900"
						aria-hidden="true" /></router-link
			></template>
			<template #iconRight
				><router-link to="/dashboard?tab=1"
					><XIcon
						class="w-8 h-8 text-purple-900"
						aria-hidden="true" /></router-link
			></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col justify-center pt-4 mx-4">
				<div class="pb-20">
					<ImageComponent
						src="./assets/svg/help-me-choose/outcome-international/header-logo.svg"
					/>
					<h3
						class="text-header-three font-semibold antialiased mt-2"
					>
						Our Advice
					</h3>
					<p class="mt-2 mb-4">
						Based on your answers, we recommend:
					</p>

					<HelpMeChooseCard
						:show-completion-steps="false"
						header="Au Pair"
						content="From €375 per month for 30 hours of work/ week"
					/>

					<ul role="list" class="mt-4 mb-12">
						<li class="py-2 inline-flex w-full items-center">
							<ImageComponent
								src="./assets/svg/ticks-and-crosses/tick-white-green-background.svg"
							/>
							<div class="ml-3">
								<p class="text-sm leading-none font-thin">
									Flexible/Repeating days
								</p>
							</div>
						</li>
						<li class="py-2 inline-flex w-full items-center">
							<ImageComponent
								src="./assets/svg/ticks-and-crosses/tick-white-green-background.svg"
							/>
							<div class="ml-3">
								<p class="text-sm leading-none font-thin">
									Culture exchange
								</p>
							</div>
						</li>
						<li class="py-2 inline-flex w-full items-center">
							<ImageComponent
								src="./assets/svg/ticks-and-crosses/tick-white-green-background.svg"
							/>
							<div class="ml-3">
								<p class="text-sm leading-none font-thin">
									Up to 30hrs/wk care
								</p>
							</div>
						</li>
						<li class="py-2 inline-flex w-full items-center">
							<ImageComponent
								src="./assets/svg/ticks-and-crosses/tick-white-green-background.svg"
							/>
							<div class="ml-3">
								<p class="text-sm leading-none font-thin">
									Live in Nanny
								</p>
							</div>
						</li>
					</ul>

					<div
						class="flex flex-col w-full text-center justify-center gap-2"
					>
						<p class="font-thin mb-4">
							Not quite what you are looking for?
						</p>
						<div>
							<AnchorPrimary
								text="Chat with us"
								classes="w-button-base py-4"
							/>
						</div>
						<div>
							<ButtonGhost
								text="Restart quiz"
								classes="w-button-base py-4"
							/>
						</div>
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../components/navigation-and-tabs/TopNavigation.vue'
import ImageComponent from '../../../../components/dom-elements/ImageComponent.vue'
import HelpMeChooseCard from '../../../../components/cards/help-me-choose-card/HelpMeChooseCard.vue'
import AnchorPrimary from '../../../../components/dom-elements/AnchorPrimary.vue'
import ButtonGhost from '../../../../components/buttons/ButtonOutlineDark.vue'

import { ChevronLeftIcon, XIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		ImageComponent,
		HelpMeChooseCard,
		ButtonGhost,
		AnchorPrimary,
		ChevronLeftIcon,
		XIcon,
	},
}
</script>
