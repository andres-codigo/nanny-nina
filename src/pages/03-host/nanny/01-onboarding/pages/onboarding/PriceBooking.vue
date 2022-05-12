<template>
	<div class="w-full">
		<TopNavigation text="Price">
			<template #iconLeft><router-link to="/dashboard"><ChevronLeftIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
			<template #iconRight><QuestionMarkCircleIcon class="w-6 h-6 text-green-500" aria-hidden="true" /></template>
		</TopNavigation>
		<main>
			<div class="h-screen flex flex-col pt-12 mx-4">
				<form class="w-full" action="#" method="POST">
					<h5 class="text-header-five font-semibold antialiased mb-2">What's your budget?</h5>
					<p class="text-left font-thin antialiased">How much is your budget for this booking?</p>

					<div class="mt-12">
						<PriceRange />
					</div>

					<div class="mb-10">
						<p class="text-center text-sm text-gray-500">Only nannies that accept this fee will be shown</p>
						<p class="text-center text-sm py-2"><a href="#" target="_self" class="anchor-blue anchor-with-underline">Price advice</a> for Amsterdam: From &euro;10/hr</p>
					</div>

					<hr class="border-1 border-gray-50 my-6" />

					<div class="flex mx-4 mb-4">
						<div class="basis-1/2">
							<p class="text-lg font-medium antialiased">Estimated  Cost</p>
						</div>
						<div class="basis-1/2 text-purple-500 text-right font-semibold">
							<span class="inline-flex">&euro;60-90/week</span>
							<span class="inline-flex text-xs text-gray-500 font-thin">€35 Search fee included</span>
						</div>
					</div>

					<p class="mx-4">This estimate is based on average pricing and availability of nannies in this period. We will not search or suggest nannies beyond your limit.</p>

					<div class="flex flex-col justify-center items-center mt-20 mb-32">
						<ButtonPrimary text="Continue" class="w-button-lg text-xl py-4" />
					</div>
				</form>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../../components/navigation-and-tabs/TopNavigation.vue'
import PriceRange from '../../../../../../components/form/price-range/PriceRange.vue'
import ButtonPrimary from '../../../../../../components/buttons/ButtonPrimary.vue'

import { ChevronLeftIcon, QuestionMarkCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		PriceRange,
		ButtonPrimary,
		ChevronLeftIcon,
		QuestionMarkCircleIcon
	}
}
</script>
