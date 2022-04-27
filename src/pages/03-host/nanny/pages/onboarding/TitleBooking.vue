<template>
	<div class="w-full">
		<TopNavigation text="Title Booking">
			<template #iconLeft><router-link to="/dashboard"><ChevronLeftIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
			<template #iconRight><QuestionMarkCircleIcon class="w-6 h-6 text-green-500" aria-hidden="true" /></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col pt-12 mx-4">
				<form class="w-full" action="#" method="POST">
					<h5 class="text-left text-header-five font-semibold antialiased">Before we begin your search!</h5>

					<div class="mt-2 mb-6">
						<label for="personalise-your-booking" class="sr-only">Personalize your booking</label>
						<p	class="text-sm font-light text-gray-500">Personalize your booking</p>
						<div class="mt-8">
							<InputField text="Title of booking" />
						</div>
					</div>

					<div class="mb-10">
						<CheckboxLeftWithContainerAndLabelRight :checked="true" inputClass="h-5 w-5 text-purple-500" labelContainerClass="text-base">
							<template #text>Use my address</template>
						</CheckboxLeftWithContainerAndLabelRight>
					</div>

					<div class="flex flex-col">
						<div class="grid grid-cols-2 gap-4 gap-y-6 gap-x-2">
							<div><InputField value="Netherlands" text="Country" /></div>
							<div><InputField value="1012" text="Postcode" /></div>
						</div>

						<div class="grid grid-cols-1 gap-4 gap-y-6 gap-x-2 mt-6">
							<div><InputField value="Kalverstraat 66-72" text="Number, Home Address" /></div>
						</div>

						<div class="grid grid-cols-2 gap-4 gap-y-6 gap-x-2 mt-6">
							<div><InputField value="PG" text="Province" /></div>
							<div><InputField value="Amsterdam" text="State/City" /></div>
						</div>
					</div>

					<div class="flex flex-col justify-center items-center my-16">
						<ButtonPrimary text="Save &amp; Continue" class="w-button-lg text-xl py-4" />
					</div>
				</form>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation-and-tabs/TopNavigation.vue'
import Textarea from '../../../../../components/form/Textarea.vue'
import CheckboxLeftWithContainerAndLabelRight from '../../../../../components/form/CheckboxLeftWithContainerAndLabelRight.vue'
import InputField from '../../../../../components/form/InputField.vue'
import ButtonPrimary from '../../../../../components/buttons/ButtonPrimary.vue'
import ButtonGhost from '../../../../../components/buttons/ButtonGhost.vue'

import { ChevronLeftIcon, QuestionMarkCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		Textarea,
		CheckboxLeftWithContainerAndLabelRight,
		InputField,
		ButtonPrimary,
		ButtonGhost,
		ChevronLeftIcon,
		QuestionMarkCircleIcon
	}
}
</script>
