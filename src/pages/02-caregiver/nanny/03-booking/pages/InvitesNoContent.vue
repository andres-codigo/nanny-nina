<template>
	<div class="w-full h-full">
		<TopNavigation text="Booking">
			<template #iconLeft
				><router-link to="'/dashboard?tab=2"
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
			<div class="flex flex-col pb-28">
				<Tabs
					tab-one-classes="text-purple-900"
					tab-one-text="Invites"
					:tab-one-is-active="true"
					tab-two-classes="border-transparent text-gray-500 border-b-2 hover:text-gray-700 hover:border-gray-300"
					tab-two-text="Matches"
					:tab-two-is-active="false"
					:display-third-tab="true"
					tab-three-classes="border-transparent text-gray-500 border-b-2 hover:text-gray-700 hover:border-gray-300"
					tab-three-text="Applications"
					:tab-three-is-active="false"
				/>

				<div class="pt-6 mx-4">
					<h4 class="text-header-four font-semibold antialiased">
						Your Invites
					</h4>
				</div>

				<div class="flex flex-col items-center mt-44">
					<div class="grid grid-rows-2 gap-0">
						<div class="font-thin text-gray-500">
							You have no invites yet.
						</div>
						<div>
							<AnchorPrimary
								text="Start Applying"
								classes="w-button-sm py-4"
							/>
						</div>
					</div>
				</div>

				<div class="mt-44 text-center">
					<p class="inline-flex items-center text-gray-500 font-thin">
						<ImageComponent
							src="./assets/svg/other/lightbulb.svg"
						/>Tip:
						<a
							href="#"
							target="_self"
							class="anchor-blue anchor-with-underline ml-1"
							>Add more pictures</a
						>
					</p>
				</div>
			</div>
			<section
				class="section-sticky-bottom-menu min-w-360-for-dev-not-prod"
			>
				<FixedBottomAnchorPrimary
					:is-disabled="true"
					button-text="New Invites (0)"
				/>
			</section>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation-and-tabs/TopNavigation.vue'
import Tabs from '../../../../../components/navigation-and-tabs/Tabs.vue'
import ImageComponent from '../../../../../components/dom-elements/ImageComponent.vue'
import AnchorPrimary from '../../../../../components/dom-elements/AnchorPrimary.vue'

import FixedBottomAnchorPrimary from '../../../../../components/content/fixed/FixedBottomAnchorPrimary.vue'

import { ChevronLeftIcon, QuestionMarkCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		Tabs,
		ImageComponent,
		AnchorPrimary,
		FixedBottomAnchorPrimary,
		ChevronLeftIcon,
		QuestionMarkCircleIcon,
	},
}
</script>
