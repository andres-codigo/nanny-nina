<template>
	<div class="w-full h-full">
		<TopNavigation backgroundColor="bg-white">
			<template #iconRight><router-link to="/dashboard"><XIcon class="w-8 h-8 text-purple-900" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col py-6 mx-4">
				<form class="w-full" action="#" method="POST">
					<div class="mb-10">
						<h5 class="text-header-five font-semibold antialiased mb-4">Reason for cancellation?</h5>
						<p class="font-thin mb-16">Your feedback is important to us to be able to better improve our service</p>

						<RadioQuestion
							:screenReaderOnly="true"
							:sideBySideRadioButtons="false"
							:isQuestionOne="true"
							questionOneText="I found another alternative"
							questionTwoText="I no longer want to be a nanny"
							:hasThirdQuestion="true"
							questionThreeText="It took too long to find a family"
							:hasFourthQuestion="true"
							questionFourText="I could not resolve an issue"
							:hasFifthQuestion="true"
							questionFiveText="Other"
						/>
					</div>

					<div class="flex flex-col justify-center items-center mt-20">
						<ButtonPrimary text="Submit" class="w-button-lg text-xl py-4" />
					</div>
				</form>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation-and-tabs/TopNavigation.vue'
import RadioQuestion from '../../../../../components/form/RadioQuestion.vue'
import InputFieldBorderBottomOnly from '../../../../../components/form/InputFieldBorderBottomOnly.vue'
import ButtonPrimary from '../../../../../components/buttons/ButtonPrimary.vue'

import { XIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		RadioQuestion,
		InputFieldBorderBottomOnly,
		ButtonPrimary,
		XIcon,
	}
}
</script>