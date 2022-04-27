<template>
	<div class="w-full h-full">
		<TopNavigation text="Matching Preferences">
			<template #iconLeft><router-link to="/dashboard"><ChevronLeftIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col pt-12 px-4">
				<form class="w-full" action="#" method="POST">
					<h5 class="text-left text-header-five font-semibold antialiased mb-2">Your Preferences</h5>

					<div class="flex items-center justify-between mt-8 mb-10">
						<span class="flex flex flex-col">
							<span class="text-purple-900 font-semibold antialiased" id="availability-label">Available for last minute booking</span>
							<span class="text-sm text-gray-500 font-thin pr-10">You will be automatically invited to last minute bookings in your city. Learn more</span>
						</span>
						<!-- Enabled: "bg-purple-600", Not Enabled: "bg-gray-500" -->
						<button type="button" class="bg-gray-500 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" role="switch" aria-checked="false" aria-labelledby="availability-label" aria-describedby="availability-description">
							<!-- Enabled: "translate-x-6", Not Enabled: "translate-x-0" -->
							<span aria-hidden="true" class="translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"></span>
						</button>
					</div>

					<h5 class="text-left text-header-five font-semibold antialiased mb-2">I am comfortable with</h5>
					<div class="mt-4">
						<CheckboxRightWithContainerAndLabelLeft checkboxName="checkout-1" text="Pets" />
						<CheckboxRightWithContainerAndLabelLeft checkboxName="checkout-2" text="Meal preparation" />
						<CheckboxRightWithContainerAndLabelLeft checkboxName="checkout-3" text="Housekeeping" />
						<CheckboxRightWithContainerAndLabelLeft checkboxName="checkout-4" text="Comfortable driving kids" />
						<CheckboxRightWithContainerAndLabelLeft checkboxName="checkout-5" text="Pick up from school" />
						<CheckboxRightWithContainerAndLabelLeft checkboxName="checkout-6" text="Educational support" />
						<CheckboxRightWithContainerAndLabelLeft checkboxName="checkout-7" text="Available on short notice" />
						<CheckboxRightWithContainerAndLabelLeft checkboxName="checkout-8" text="Non-smoking" />
						<CheckboxRightWithContainerAndLabelLeft checkboxName="checkout-9" text="More than 2 kids" />
						<CheckboxRightWithContainerAndLabelLeft checkboxName="checkout-10" text="Bathing" />
					</div>

					<div class="flex flex-col justify-center items-center mt-16">
						<ButtonPrimary text="Save" class="w-button-lg text-xl py-4" />
					</div>
				</form>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../../components/navigation-and-tabs/TopNavigation.vue'
import CheckboxRightWithContainerAndLabelLeft from '../../../../../../components/form/CheckboxRightWithContainerAndLabelLeft.vue'
import ButtonPrimary from '../../../../../../components/buttons/ButtonPrimary.vue'

import { ChevronLeftIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		CheckboxRightWithContainerAndLabelLeft,
		ButtonPrimary,
		ChevronLeftIcon
	}
}
</script>