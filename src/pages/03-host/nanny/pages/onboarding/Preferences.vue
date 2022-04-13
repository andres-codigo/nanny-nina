<template>
	<div class="w-full">
		<TopNavigation text="Preferences">
			<template #iconLeft><router-link to="/dashboard"><ChevronLeftIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
			<template #iconRight><QuestionMarkCircleIcon class="w-6 h-6 text-green-500" aria-hidden="true" /></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col pt-12 mx-4">
				<form class="w-full" action="#" method="POST">
					<h5 class="text-header-five font-semibold antialiased mb-6">Customise your preferences</h5>

					<div class="mb-4">
						<p class="font-thin mb-4">What kind of profile would you like to receive?</p>
						<RadioQuestion
							:screenReaderOnly="true"
							:sideBySideRadioButtons="false"
							questionOneText="Both nanny and childminder profiles"
							questionOneSubText="We'll invite childminders to your booking"
							:questionOneSubTextHidden="false"
							questionTwoText="Nannies only"
						/>
					</div>

					<h5 class="text-left text-header-five font-semibold antialiased mt-8 mb-4">I want a nanny comfortable with</h5>
					<p class="text-sm font-thin">This will help us find a nanny that's perfect for you very quickly. Don't worry you can change these preference anytime you want</p>

					<div class="mt-4">
						<CheckboxRightWithContainerAndLabelLeft checkboxName="checkout-1" text="Pets" />
						<CheckboxRightWithContainerAndLabelLeft checkboxName="checkout-2" text="Meal preparation" />
						<CheckboxRightWithContainerAndLabelLeft checkboxName="checkout-3" text="Housekeeping" />
						<CheckboxRightWithContainerAndLabelLeft :showSubText="true" checkboxName="checkout-4" text="Own transportation" subText="80% less chance of a match" />
						<CheckboxRightWithContainerAndLabelLeft checkboxName="checkout-5" text="Pick up from school" />
						<CheckboxRightWithContainerAndLabelLeft checkboxName="checkout-6" text="Educational support" />
						<CheckboxRightWithContainerAndLabelLeft checkboxName="checkout-7" text="More than 3 kids" />
						<CheckboxRightWithContainerAndLabelLeft checkboxName="checkout-8" text="Baby experience" />
					</div>

					<div class="flex flex-col justify-center items-center mt-16">
						<ButtonPrimary text="Save &amp; Continue" class="w-button-lg text-xl py-4" />
					</div>
				</form>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation/TopNavigation.vue'
import RadioQuestion from '../../../../../components/form/RadioQuestion.vue'
import CheckboxRightWithContainerAndLabelLeft from '../../../../../components/form/CheckboxRightWithContainerAndLabelLeft.vue'
import ButtonPrimary from '../../../../../components/buttons/ButtonPrimary.vue'

import { ChevronLeftIcon, QuestionMarkCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		RadioQuestion,
		CheckboxRightWithContainerAndLabelLeft,
		ButtonPrimary,
		ChevronLeftIcon,
		QuestionMarkCircleIcon
	}
}
</script>