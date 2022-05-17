<template>
	<div class="w-full h-full">
		<TopNavigation backgroundColor="bg-white">
			<template #iconRight><router-link to="/dashboard?tab=2"><XIcon class="w-8 h-8 text-purple-900" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col py-6 mx-4">
				<form class="w-full" action="#" method="POST">
					<div class="mb-10">
						<h4 class="text-header-four font-semibold antialiased mb-4">Reason for cancellation?</h4>
						<p class="font-thin">Your feedback is important to us to be able to better improve our service</p>

						<div class="mt-4">
							<CheckboxRightWithContainerAndLabelLeft checkboxName="checkout-1" text="Sick/Unwell" />
							<CheckboxRightWithContainerAndLabelLeft checkboxName="checkout-2" text="I no longer want to be a nanny" />
							<CheckboxRightWithContainerAndLabelLeft checkboxName="checkout-3" text="Our personalities did not fit" />
							<CheckboxRightWithContainerAndLabelLeft checkboxName="checkout-4" text="I can no longer be available for schedule" />
						</div>
					</div>

					<div class="mb-20">
						<p class="font-thin">Please explain further</p>
						<InputFieldBorderBottomOnly type="text" />
					</div>

					<div class="flex flex-col items-center">
						<ButtonPrimary text="Submit" class="w-button-lg text-xl py-4" />
					</div>
				</form>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation-and-tabs/TopNavigation.vue'
import CheckboxRightWithContainerAndLabelLeft from '../../../../../components/form/CheckboxRightWithContainerAndLabelLeft.vue'
import InputFieldBorderBottomOnly from '../../../../../components/form/InputFieldBorderBottomOnly.vue'
import ButtonPrimary from '../../../../../components/buttons/ButtonPrimary.vue'

import { XIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		CheckboxRightWithContainerAndLabelLeft,
		InputFieldBorderBottomOnly,
		ButtonPrimary,
		XIcon,
	}
}
</script>