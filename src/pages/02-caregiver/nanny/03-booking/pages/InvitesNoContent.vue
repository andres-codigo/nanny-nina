<template>
	<div class="w-full h-full">
		<TopNavigation text="Booking">
			<template #iconRight><QuestionMarkCircleIcon class="w-6 h-6 text-green-500" aria-hidden="true" /></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col pb-28">
				<Tabs
					tabOneClasses="text-purple-900"
					tabOneText="Invites"
					:tabOneIsActive="true"
					tabTwoClasses="border-transparent text-gray-500 border-b-2 hover:text-gray-700 hover:border-gray-300"
					tabTwoText="Matches"
					:tabTwoIsActive="false"
					:displayThirdTab="true"
					tabThreeClasses="border-transparent text-gray-500 border-b-2 hover:text-gray-700 hover:border-gray-300"
					tabThreeText="Applications"
					:tabThreeIsActive="false"
				/>

				<div class="pt-6 mx-4">
					<h4 class="text-header-four font-semibold antialiased">Your Invites</h4>
				</div>

				<div class="flex flex-col items-center mt-44">
					<div class="grid grid-rows-2 gap-0">
						<div class="font-thin text-gray-500">You have no invites yet.</div>
						<div><AnchorPrimary text="Start Applying" class="w-button-sm py-4" /></div>
					</div>
				</div>

				<div class="mt-44 text-center">
					<p class="inline-flex items-center text-gray-500 font-thin"><LightBulbIcon class="w-5 h-5" />Tip: <a href="#" target="_self" class="anchor-blue anchor-with-underline ml-1">Add more pictures</a></p>
				</div>
			</div>
			<section class="block fixed inset-x-0 w-full bottom-0 z-10 bg-white border-t border-gray min-w-360-for-dev-not-prod">
				<FixedBottomAnchorPrimary :isDisabled="true" />
			</section>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation-and-tabs/TopNavigation.vue'
import Tabs from '../../../../../components/navigation-and-tabs/Tabs.vue'
import AnchorPrimary from '../../../../../components/dom-elements/AnchorPrimary.vue'

import FixedBottomAnchorPrimary from '../../../../../components/content/fixed/FixedBottomAnchorPrimary.vue'

import { QuestionMarkCircleIcon, ClockIcon, LightBulbIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		Tabs,
		AnchorPrimary,
		FixedBottomAnchorPrimary,
		QuestionMarkCircleIcon,
		ClockIcon,
		LightBulbIcon
	}
}
</script>