<template>
	<div class="w-full h-full">
		<TopNavigation backgroundColor="bg-white-500" :displayBorderBottom="false">
			<template #iconRight><router-link to="/dashboard?tab=3"><XIcon class="w-8 h-8 text-purple-900" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col justify-center pt-12 mx-4">
				<h5 class="text-header-five font-semibold antialiased mb-4">Subsidized childcare</h5>
				<div class="inline-flex pb-8">
					<LinkCard :showQuestionMark="true" :showPlaceholderSVG="true" to="dashboard" class="text-white bg-purple-500 hover:bg-purple-300 focus:bg-purple-600" title="One-time">
						<template #details><p class="text-white pt-2">Urgent nanny for single or multiple days. Maximum 12days </p></template>
					</LinkCard>
				</div>

				<div class="flex flex-col justify-center items-center mt-40">
					<div class="grid grid-rows-2 gap-2">
						<div><AnchorPrimary text="Continue" class="w-button-lg text-xl py-4" /></div>
						<div class="text-center">
							<a href="#" target="_self" class="anchor-blue anchor-with-underline font-medium mt-4">Learn more about Childminders</a>
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

import { XIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		LinkCard,
		AnchorPrimary,
		XIcon
	}
}
</script>