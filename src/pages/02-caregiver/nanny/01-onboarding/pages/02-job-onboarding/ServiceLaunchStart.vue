<template>
	<div class="w-full h-full bg-purple-500">
		<TopNavigation :hideHeader="true">
			<template #iconLeft><router-link to="/dashboard"><ChevronLeftIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col mx-4 mb-10">
				<div class="mt-16 mx-9">
					<h2 class="text-header-two font-semibold text-green-500 text-center antialiased mb-6">Ready to start your Nanny journey?</h2>
					<p class="font-thin text-white text-center">Let's get you setup!</p>
				</div>

				<div class="flex flex-col justify-center items-center mt-96">
					<div class="grid grid-rows-2 gap-2">
						<div><AnchorOutlineLight text="Not now, I'm exploring" class="w-button-xl text-xl py-4 text-white border-white hover:border-lilac-400 focus:border-green-500" /></div>
						<div><AnchorSecondary text="Get Started" class="w-button-xl text-xl py-4" /></div>
					</div>
					<a href="#" target="_self" class="anchor-white anchor-with-underline text-center font-medium mt-8">Learn more about being a Nanny</a>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../../components/navigation-and-tabs/TopNavigation.vue'
import AnchorOutlineLight from '../../../../../../components/dom-elements/AnchorOutlineLight.vue'
import AnchorSecondary from '../../../../../../components/dom-elements/AnchorSecondary.vue'

import { ChevronLeftIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		AnchorOutlineLight,
		AnchorSecondary,
		ChevronLeftIcon
	}
}
</script>