<template>
	<div class="w-full h-full">
		<TopNavigation text="Nanny Form">
			<template #iconLeft><router-link to="/dashboard"><ChevronLeftIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col px-4 py-6">
				<form action="#" method="POST">
					<h5 class="mt-8 mb-2 text-left text-header-five text-gray-900">I am comfortable with</h5>
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
import TopNavigation from '../../../../../../components/navigation/TopNavigation.vue'
import CheckboxRightWithContainerAndLabelLeft from '../../../../../../components/form/CheckboxRightWithContainerAndLabelLeft.vue'
import ButtonPrimary from '../../../../../../components/buttons/ButtonPrimary.vue'

import { ChevronLeftIcon, PlusIcon, QuestionMarkCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		CheckboxRightWithContainerAndLabelLeft,
		ButtonPrimary,
		ChevronLeftIcon,
		PlusIcon,
		QuestionMarkCircleIcon
	}
}
</script>