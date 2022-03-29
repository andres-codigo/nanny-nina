<template>
	<div class="w-full h-full bg-purple-500">
		<TopNavigation :hideHeader="true">
			<template #iconLeft><router-link to="/dashboard"><ChevronLeftIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col mx-4 mb-10">
				<div class="mt-16 mx-9">
					<h2 class="mb-6 text-header-two font-semibold text-green-500 text-center">Ready to start your Nanny journey?</h2>
					<p class="font-thin text-white text-center">Let's get you setup!</p>
				</div>

				<div class="flex flex-col justify-center items-center mt-96">
					<div class="grid grid-rows-2 gap-2">
						<div><ButtonOutlineLight text="Not now, I'm exploring" class="w-button-xl text-xl py-4" /></div>
						<div><ButtonSecondary text="Get Started" class="w-button-xl text-xl py-4" /></div>
					</div>
					<p class="mt-8 font-thin text-white text-center"><a href="#" class="anchor-with-underline text-green-200">Learn more about being a Nanny</a></p>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation/TopNavigation.vue'
import ButtonOutlineLight from '../../../../../components/buttons/ButtonOutlineLight.vue'
import ButtonSecondary from '../../../../../components/buttons/ButtonSecondary.vue'

import { ChevronLeftIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		ButtonOutlineLight,
		ButtonSecondary,
		ChevronLeftIcon
	}
}
</script>