<template>
	<div class="w-full h-full">
		<TopNavigation text="Matching Preference">
			<template #iconLeft><router-link to="/dashboard"><ChevronLeftIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col py-12 mx-4">
				<form class="w-full" action="#" method="POST">
					<div class="mb-10">
						<h5 class="text-header-five font-semibold antialiased mb-4">Childminder Type</h5>
						<p class="font-thin mb-4">Where can you look after the kids?</p>

						<RadioQuestion
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

					<div class="flex flex-col justify-center items-center mb-10">
						<ButtonPrimary text="Save" class="w-button-lg text-xl py-4" />
					</div>
				</form>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../../components/navigation-and-tabs/TopNavigation.vue'
import RadioQuestion from '../../../../../../components/form/RadioQuestion.vue'
import CheckboxRightWithContainerAndLabelLeft from '../../../../../../components/form/CheckboxRightWithContainerAndLabelLeft.vue'
import Textarea from '../../../../../../components/form/Textarea.vue'
import ButtonPrimary from '../../../../../../components/buttons/ButtonPrimary.vue'

import { ChevronLeftIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		RadioQuestion,
		CheckboxRightWithContainerAndLabelLeft,
		Textarea,
		ButtonPrimary,
		ChevronLeftIcon
	}
}
</script>