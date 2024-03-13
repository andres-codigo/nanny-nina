<template>
	<div class="w-full h-full bg-lilac-100">
		<TopNavigation background-color="bg-lilac-100" :hide-header="true">
			<template #iconLeft
				><router-link to="/dashboard?tab=2"
					><ChevronLeftIcon
						class="w-8 h-8 text-black"
						aria-hidden="true" /></router-link
			></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col mx-4 mb-10">
				<div class="mt-16 mx-9">
					<h2
						class="text-header-two font-semibold text-center antialiased mb-6"
					>
						Ready to start your Nanny journey?
					</h2>
					<p class="font-thin text-center">Let's get you setup!</p>
				</div>

				<div class="flex flex-col justify-center items-center mt-96">
					<div class="grid grid-rows-2 gap-2">
						<div>
							<AnchorOutlineDark
								text="Not now, I'm exploring"
								classes="w-button-xl text-xl border-purple-900 hover:text-gray-500 hover:border-gray-500 focus:text-purple-600 focus:border-purple-600 py-4"
							/>
						</div>
						<div>
							<AnchorSecondary
								text="Get Started"
								classes="w-button-xl text-xl py-4"
							/>
						</div>
					</div>
					<a
						href="#"
						target="_self"
						class="anchor-black anchor-with-underline text-center font-medium mt-8"
						>Learn more about being a Nanny</a
					>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../../components/navigation-and-tabs/TopNavigation.vue'
import AnchorOutlineDark from '../../../../../../components/dom-elements/AnchorOutlineDark.vue'
import AnchorSecondary from '../../../../../../components/dom-elements/AnchorSecondary.vue'

import { ChevronLeftIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		AnchorOutlineDark,
		AnchorSecondary,
		ChevronLeftIcon,
	},
}
</script>
