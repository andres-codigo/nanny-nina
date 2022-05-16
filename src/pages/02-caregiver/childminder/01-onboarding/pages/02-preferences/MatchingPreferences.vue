<template>
	<div class="w-full h-full">
		<TopNavigation text="Matching Preference">
			<template #iconLeft><router-link to="/dashboard?tab=2"><ChevronLeftIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<Steps text="Step 2 of 2">
				<template #step-one><CompletedStep /></template>
				<template #step-two><CurrentStep /></template>
			</Steps>
			<div class="flex flex-col py-6 mx-4">
				<form class="w-full" action="#" method="POST">
					<div class="mb-10">
						<h5 class="text-header-five font-semibold antialiased mb-4">Childminder Type</h5>
						<p class="font-thin mb-4">Where can you look after the kids?</p>

						<RadioQuestionsLabelLeftInputRight
							:screenReaderOnly="true"
							:sideBySideRadioButtons="false"
							:isQuestionOne="true"
							questionOneText="Own home or Parent's (Flexible)"
							questionOneSubText="You are a registered childcare professional, can host and work flexibly"
							:questionOneSubTextHidden="false"
							questionTwoText="Parent's home only"
							questionTwoSubText="You are unregistered with the government and can only work at parent's"
							:questionTwoSubTextHidden="false"
						/>
					</div>

					<div class="mb-10">
						<h5 class="text-header-five font-semibold antialiased mb-4">I am comfortable with</h5>
						<div class="mt-4">
							<CheckboxRightWithContainerAndLabelLeft checkboxName="checkout-2" text="Meal preparation" />
							<CheckboxRightWithContainerAndLabelLeft checkboxName="checkout-5" text="Pick up from school" />
							<CheckboxRightWithContainerAndLabelLeft checkboxName="checkout-6" text="Educational support" />
						</div>
					</div>

					<div class="mb-10">
						<h5 class="text-header-five font-semibold antialiased">Special Note to Parents</h5>

						<div class="mt-2">
							<label for="note-for-parents" class="sr-only">Special Note to Parents</label>
							<p	class="text-sm font-light text-gray-500">E.g Hey, I have a few requirements for caring for kids at my place. I need you to ensure that..</p>
							<div class="mt-8">
								<Textarea name="note-for-parents" id="note-for-parents" />
							</div>
						</div>
					</div>

					<div class="flex flex-col justify-center items-center mt-10">
						<div class="grid grid-rows-2 gap-2">
							<div><ButtonPrimary text="Save" class="w-button-lg text-xl py-4" /></div>
							<div class="inline-flex items-center justify-center"><AnchorTextOnly text="< Back to Checklist" /></div>
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
import UpcomingStep from '../../../../../../components/steps/types/UpcomingStep.vue'

import RadioQuestionsLabelLeftInputRight from '../../../../../../components/form/RadioQuestionsLabelLeftInputRight.vue'
import CheckboxRightWithContainerAndLabelLeft from '../../../../../../components/form/CheckboxRightWithContainerAndLabelLeft.vue'
import Textarea from '../../../../../../components/form/Textarea.vue'
import ButtonPrimary from '../../../../../../components/buttons/ButtonPrimary.vue'
import AnchorTextOnly from '../../../../../../components/dom-elements/AnchorTextOnly.vue'

import { ChevronLeftIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		Steps,
		CompletedStep,
		CurrentStep,
		UpcomingStep,
		RadioQuestionsLabelLeftInputRight,
		CheckboxRightWithContainerAndLabelLeft,
		Textarea,
		ButtonPrimary,
		AnchorTextOnly,
		ChevronLeftIcon
	}
}
</script>