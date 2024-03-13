<template>
	<div class="w-full h-full">
		<TopNavigation text="Matching Preference">
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
			<div class="flex flex-col py-6 mx-4">
				<form class="w-full" action="#" method="POST">
					<div class="mb-10">
						<h5
							class="text-header-five font-semibold antialiased mb-4"
						>
							Childminder Type
						</h5>
						<p class="font-thin mb-4">
							Where can you look after the kids?
						</p>

						<RadioQuestionsLabelLeftInputRight
							:screen-reader-only="true"
							:side-by-side-radio-buttons="false"
							:is-question-one="true"
							question-one-text="Own home or Parent's (Flexible)"
							question-one-sub-text="You are a registered childcare professional, can host and work flexibly"
							:question-one-sub-text-hidden="false"
							question-two-text="Parent's home only"
							question-two-sub-text="You are unregistered with the government and can only work at parent's"
							:question-two-sub-text-hidden="false"
						/>
					</div>

					<div class="mb-10">
						<h5
							class="text-header-five font-semibold antialiased mb-4"
						>
							I am comfortable with
						</h5>
						<div class="mt-4">
							<CheckboxRightWithContainerAndLabelLeft
								checkbox-name="checkout-2"
								text="Meal preparation"
							/>
							<CheckboxRightWithContainerAndLabelLeft
								checkbox-name="checkout-5"
								text="Pick up from school"
							/>
							<CheckboxRightWithContainerAndLabelLeft
								checkbox-name="checkout-6"
								text="Educational support"
							/>
						</div>
					</div>

					<div class="mb-10">
						<h5 class="text-header-five font-semibold antialiased">
							Special Note to Parents
						</h5>

						<div class="mt-2">
							<label for="note-for-parents" class="sr-only"
								>Special Note to Parents</label
							>
							<p class="text-sm font-light text-gray-500">
								E.g Hey, I have a few requirements for caring
								for kids at my place. I need you to ensure
								that..
							</p>
							<div class="mt-8">
								<TextareaComponent
									id="note-for-parents"
									name="note-for-parents"
								/>
							</div>
						</div>
					</div>

					<div
						class="flex flex-col justify-center items-center mt-10"
					>
						<div class="grid grid-rows-2 gap-2">
							<div>
								<ButtonPrimary
									text="Save"
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

import RadioQuestionsLabelLeftInputRight from '../../../../../../components/form/RadioQuestionsLabelLeftInputRight.vue'
import CheckboxRightWithContainerAndLabelLeft from '../../../../../../components/form/CheckboxRightWithContainerAndLabelLeft.vue'
import TextareaComponent from '../../../../../../components/form/TextareaComponent.vue'
import ButtonPrimary from '../../../../../../components/buttons/ButtonPrimary.vue'
import AnchorTextOnly from '../../../../../../components/dom-elements/AnchorTextOnly.vue'

import { ChevronLeftIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		Steps,
		CompletedStep,
		CurrentStep,
		RadioQuestionsLabelLeftInputRight,
		CheckboxRightWithContainerAndLabelLeft,
		TextareaComponent,
		ButtonPrimary,
		AnchorTextOnly,
		ChevronLeftIcon,
	},
}
</script>
