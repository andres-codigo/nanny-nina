<template>
	<div class="w-full h-full">
		<TopNavigation text="Personality">
			<template #iconLeft><router-link to="/dashboard?tab=3"><ChevronLeftIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col justify-center pt-12 mx-4">
				<form class="w-full" action="#" method="POST">
					<div class="mb-12">
						<h5 class="text-header-five font-semibold antialiased mb-2">Personality test</h5>
						<p class="text-sm font-light">Please choose 5 character traits that best describe you.</p>
					</div>

					<div class="grid grid-cols-2 gap-4 gap-y-6 gap-x-16 mb-10">
						<div><CheckboxRightWithContainerAndLabelLeft :checked="true" checkboxName="checkout-1" text="Introvert" /></div>
						<div><CheckboxRightWithContainerAndLabelLeft checkboxName="checkout-1" text="Creative" /></div>
						<div><CheckboxRightWithContainerAndLabelLeft checkboxName="checkout-1" text="Extrovert" /></div>
						<div><CheckboxRightWithContainerAndLabelLeft :checked="true" checkboxName="checkout-1" text="Tidy" /></div>
						<div><CheckboxRightWithContainerAndLabelLeft :checked="true" checkboxName="checkout-1" text="Playful" /></div>
						<div><CheckboxRightWithContainerAndLabelLeft checkboxName="checkout-1" text="Pro-active" /></div>
						<div><CheckboxRightWithContainerAndLabelLeft checkboxName="checkout-1" text="Serious" /></div>
						<div><CheckboxRightWithContainerAndLabelLeft :checked="true" checkboxName="checkout-1" text="Relaxed/Zen" /></div>
						<div><CheckboxRightWithContainerAndLabelLeft checkboxName="checkout-1" text="Independent" /></div>
						<div><CheckboxRightWithContainerAndLabelLeft checkboxName="checkout-1" text="Multitasking" /></div>
						<div><CheckboxRightWithContainerAndLabelLeft :checked="true" checkboxName="checkout-1" text="Family person" /></div>
						<div><CheckboxRightWithContainerAndLabelLeft checkboxName="checkout-1" text="Focused" /></div>
					</div>

					<div class="mb-10">
						<p class="font-thin">Which one is your strongest?</p>
						<p class="text-sm text-gray-500 font-thin mb-6">Parents will determine this later</p>
						<SelectMenu optionText="Select" class="w-select-sm" />
					</div>

					<div class="flex flex-col justify-center items-center">
						<ButtonPrimary text="Save &amp; Continue" class="w-button-lg text-xl py-4" />
					</div>
				</form>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation-and-tabs/TopNavigation.vue'
import CheckboxRightWithContainerAndLabelLeft from '../../../../../components/form/CheckboxRightWithContainerAndLabelLeft.vue'
import SelectMenu from '../../../../../components/form/SelectMenu.vue'
import ButtonPrimary from '../../../../../components/buttons/ButtonPrimary.vue'

import { ChevronLeftIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		CheckboxRightWithContainerAndLabelLeft,
		SelectMenu,
		ButtonPrimary,
		ChevronLeftIcon
	}
}
</script>