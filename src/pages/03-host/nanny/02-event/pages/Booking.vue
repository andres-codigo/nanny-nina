<template>
	<div class="w-full h-full">
		<TopNavigation text="Event Booking">
			<template #iconLeft
				><router-link to="/dashboard?tab=3"
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
			<div class="flex flex-col mt-12 mx-4">
				<form class="w-full" action="#" method="POST">
					<h5 class="text-header-five font-semibold antialiased pb-6">
						Event Booking
					</h5>

					<div class="flex flex-col mb-32">
						<p class="font-thin">
							Where is the event taking place?
						</p>

						<div
							class="grid grid-cols-2 gap-4 gap-y-6 gap-x-2 mt-6"
						>
							<div><InputField text="Postcode" /></div>
							<div>&nbsp;</div>
						</div>

						<div
							class="grid grid-cols-1 gap-4 gap-y-6 gap-x-2 mt-6"
						>
							<div><InputField text="Number, Address" /></div>
						</div>

						<div
							class="grid grid-cols-2 gap-4 gap-y-6 gap-x-2 mt-6"
						>
							<div><InputField text="Province" /></div>
							<div><InputField text="State/City" /></div>
						</div>
					</div>

					<div class="mx-8 mb-10">
						<CheckboxLeftWithContainerAndLabelRight
							label-container-class="text-xs"
							input-class="text-black"
						>
							<template #text
								>I would like to receive the free wedding
								surprise package for the little ones</template
							>
						</CheckboxLeftWithContainerAndLabelRight>
					</div>

					<div
						class="flex flex-col justify-center items-center mb-10"
					>
						<ButtonPrimary
							text="Next"
							classes="w-button-lg text-xl py-4"
						/>
					</div>
				</form>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation-and-tabs/TopNavigation.vue'
import InputField from '../../../../../components/form/InputField.vue'
import CheckboxLeftWithContainerAndLabelRight from '../../../../../components/form/CheckboxLeftWithContainerAndLabelRight.vue'
import ButtonPrimary from '../../../../../components/buttons/ButtonPrimary.vue'

import { ChevronLeftIcon, QuestionMarkCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		InputField,
		CheckboxLeftWithContainerAndLabelRight,
		ButtonPrimary,
		ChevronLeftIcon,
		QuestionMarkCircleIcon,
	},
}
</script>
