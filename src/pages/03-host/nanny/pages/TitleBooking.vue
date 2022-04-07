<template>
	<div>
		<TopNavigation text="Title Booking">
			<template #iconLeft><router-link to="/dashboard"><ChevronLeftIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
			<template #iconRight><QuestionMarkCircleIcon class="w-6 h-6 text-green-500" aria-hidden="true" /></template>
		</TopNavigation>
		<main>
			<div class="h-full flex flex-col pt-12 mx-4">
				<form class="w-full" action="#" method="POST">
					<h5 class="text-left text-header-five font-semibold antialiased">Before we begin your search!</h5>

					<div class="mt-2 mb-6">
						<label for="personalise-your-booking" class="sr-only">Personalize your booking</label>
						<p	class="text-sm font-light text-gray-500">Personalize your booking</p>
						<div class="mt-8">
							<Textarea rows="2" name="personalise-your-booking" id="personalise-your-booking" characterNumber="35" />
						</div>
					</div>

					<div class="flex flex-col justify-center items-center">
						<CheckboxLeftWithContainerAndLabelRight>
							<template #text>Use my address, <a href="#" target="_self" class="anchor-with-underline text-blue-500">update address</a>?</template>
						</CheckboxLeftWithContainerAndLabelRight>
					</div>

					<hr class="border-1 border-gray-50 my-6" />

					<h5 class="text-left text-header-five font-semibold antialiased mb-2">Verify account</h5>
					<p	class="text-sm font-light">We don't charge a fee for placing a booking but we require a mandatory €0.01  verification payment and a €35 monthly membership fee. This is to ensure that all our caregivers are paid for their services, you will only be charged if a match is found.</p>

					<div class="flex flex-col justify-center items-center mt-10 mb-20">
						<div class="grid grid-rows-2 gap-2">
							<div><ButtonPrimary text="Verify" class="w-button-lg text-xl py-4" /></div>
							<div><ButtonGhost text="Cancel" /></div>
						</div>
					</div>
				</form>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../components/navigation/TopNavigation.vue'
import Textarea from '../../../../components/form/Textarea.vue'
import CheckboxLeftWithContainerAndLabelRight from '../../../../components/form/CheckboxLeftWithContainerAndLabelRight.vue'
import ButtonPrimary from '../../../../components/buttons/ButtonPrimary.vue'
import ButtonGhost from '../../../../components/buttons/ButtonGhost.vue'

import { ChevronLeftIcon, QuestionMarkCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		Textarea,
		CheckboxLeftWithContainerAndLabelRight,
		ButtonPrimary,
		ButtonGhost,
		ChevronLeftIcon,
		QuestionMarkCircleIcon
	}
}
</script>
