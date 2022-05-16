<template>
	<div class="w-full">
		<TopNavigation text="Verify Account">
			<template #iconLeft><router-link to="/dashboard?tab=3"><ChevronLeftIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
			<template #iconRight><QuestionMarkCircleIcon class="w-6 h-6 text-green-500" aria-hidden="true" /></template>
		</TopNavigation>
		<main>
			<div class="h-screen flex flex-col pt-12 mx-4">
				<h5 class="text-header-five font-semibold antialiased mb-2">Verify account</h5>
				<p	class="text-sm font-light">We don't charge a fee for placing a booking but we require a mandatory €0.01  verification payment and a €35 monthly membership fee. This is to ensure that all our caregivers are paid for their services, you will only be charged if a match is found.</p>

				<div class="flex flex-col justify-center items-center mt-40 mb-20">
					<div class="grid grid-rows-2 gap-2">
						<div><ButtonPrimary text="Verify" class="w-button-lg text-xl py-4" /></div>
						<div><ButtonGhost text="Cancel booking" /></div>
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../../components/navigation-and-tabs/TopNavigation.vue'
import ButtonPrimary from '../../../../../../components/buttons/ButtonPrimary.vue'
import ButtonGhost from '../../../../../../components/buttons/ButtonGhost.vue'

import { ChevronLeftIcon, QuestionMarkCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		ButtonPrimary,
		ButtonGhost,
		ChevronLeftIcon,
		QuestionMarkCircleIcon
	},
	props: {
		title: String,
		buttonText: String
	}
}
</script>