<template>
	<div class="w-full h-full">
		<TopNavigation text="Nanny Form">
			<template #iconLeft
				><router-link to="/dashboard?tab=2"
					><ChevronLeftIcon
						class="w-8 h-8 text-white"
						aria-hidden="true" /></router-link
			></template>
		</TopNavigation>
		<main>
			<Steps text="Step 2 of 2">
				<template #step-one><CompletedStep /></template>
				<template #step-two><CurrentStep /></template>
			</Steps>
			<div class="flex flex-col pt-6 mx-4">
				<form class="w-full" action="#" method="POST">
					<h5 class="text-header-five font-semibold antialiased mb-6">
						Experience
					</h5>

					<div class="mt-4 mb-8">
						<div>
							<p class="font-thin">
								Have you cared for children or elderly before?
							</p>
							<p class="text-sm text-gray-500 font-thin mb-2">
								This doesn't have to be a professional
								experience
							</p>
							<RadioQuestionsLabelLeftInputRight
								:screen-reader-only="true"
								legend="Have you cared for children or elderly before?"
								question-one-text="Yes"
								question-two-text="No"
							/>
						</div>
					</div>

					<div class="mb-10">
						<p class="font-thin">
							How many years of experience do you have as a nanny?
						</p>
						<div class="mt-4 grid grid-cols-2 gap-x-2">
							<div>
								<SelectMenu option-text="1" classes="w-1/2" />
							</div>
						</div>
					</div>

					<div class="mt-4 mb-16">
						<h5
							class="text-header-five font-semibold antialiased mt-8 mb-2"
						>
							Caring For
						</h5>
						<p class="font-thin">
							What age range have you cared for in the past?
						</p>
						<div class="mt-4">
							<CheckboxRightWithContainerAndLabelLeft
								:show-sub-text="true"
								checkbox-name="checkout-1"
								text="Newborns"
								sub-text="2 months old or less"
							/>
							<CheckboxRightWithContainerAndLabelLeft
								:show-sub-text="true"
								checkbox-name="checkout-2"
								text="Infants"
								sub-text="From birth-2yrs"
							/>
							<CheckboxRightWithContainerAndLabelLeft
								:show-sub-text="true"
								checkbox-name="checkout-3"
								text="Toddlers"
								sub-text="3-6yrs"
							/>
							<CheckboxRightWithContainerAndLabelLeft
								:show-sub-text="true"
								checkbox-name="checkout-4"
								text="Older Children"
								sub-text="7yrs &amp; above"
							/>
						</div>
					</div>

					<div
						class="flex flex-col justify-center items-center mt-20"
					>
						<div class="grid grid-rows-2 gap-2">
							<div>
								<ButtonPrimary
									text="Save & Continue"
									classes="w-button-lg text-xl py-4"
								/>
							</div>
							<div
								class="inline-flex items-center justify-center"
							>
								<AnchorTextOnly text="< Back to Checklist" />
							</div>
						</div>
					</div>
				</form>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../../components/navigation-and-tabs/TopNavigation.vue'

import Steps from '../../../../../../components/steps/Steps.vue'
import CompletedStep from '../../../../../../components/steps/types/CompletedStep.vue'
import CurrentStep from '../../../../../../components/steps/types/CurrentStep.vue'

import SelectMenu from '../../../../../../components/form/SelectMenu.vue'
import RadioQuestionsLabelLeftInputRight from '../../../../../../components/form/RadioQuestionsLabelLeftInputRight.vue'
import CheckboxRightWithContainerAndLabelLeft from '../../../../../../components/form/CheckboxRightWithContainerAndLabelLeft.vue'
import ButtonPrimary from '../../../../../../components/buttons/ButtonPrimary.vue'
import AnchorTextOnly from '../../../../../../components/dom-elements/AnchorTextOnly.vue'

import { ChevronLeftIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		Steps,
		CompletedStep,
		CurrentStep,
		SelectMenu,
		RadioQuestionsLabelLeftInputRight,
		CheckboxRightWithContainerAndLabelLeft,
		ButtonPrimary,
		AnchorTextOnly,
		ChevronLeftIcon,
	},
}
</script>
