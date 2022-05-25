<template>
	<div class="w-full h-full">
		<TopNavigation :displayBorderBottom="false">
			<template #iconRight><router-link to="/dashboard?tab=3"><XIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col justify-center pt-12 mx-4">
				<h5 class="text-header-five font-semibold antialiased mb-">Subsidized childcare</h5>
				<div class="inline-flex pb-8">
					<LinkCard :showQuestionMark="true" :showPlaceholderSVG="true" to="dashboard" class="text-white bg-purple-500 hover:bg-purple-300 focus:bg-purple-600" title="One-time">
						<template #details><p class="text-white">Specialised nanny who comes to your address or receives children at her home with childcare allowance...</p></template>
					</LinkCard>
				</div>

				<div class="flex flex-col justify-center items-center mt-40">
					<div class="grid grid-rows-2 gap-2">
						<div><AnchorPrimary text="Continue" class="w-button-lg text-xl py-4" /></div>
						<div class="text-center mt-4">
							<AnchorTextOnly text="Learn more about Childminders >" textColorClass="anchor-blue" />
						</div>
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation-and-tabs/TopNavigation.vue'
import LinkCard from '../../../../../components/cards/link-card/LinkCard.vue'
import AnchorPrimary from '../../../../../components/dom-elements/AnchorPrimary.vue'
import AnchorTextOnly from '../../../../../components/dom-elements/AnchorTextOnly.vue'

import { XIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		LinkCard,
		AnchorPrimary,
		AnchorTextOnly,
		XIcon
	}
}
</script>