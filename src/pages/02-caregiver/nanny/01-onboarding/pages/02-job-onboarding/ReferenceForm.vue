<template>
	<div class="w-full h-full">
		<TopNavigation text="Nanny Form">
			<template #iconLeft><router-link to="/dashboard?tab=2"><ChevronLeftIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<Steps text="Step 2 of 2">
				<template #step-one><CompletedStep /></template>
				<template #step-two><CurrentStep /></template>
			</Steps>
			<div class="flex flex-col pt-6 mx-4">
				<form class="w-full" action="#" method="POST">
					<div class="mb-16">
						<div class="mb-20">
							<h5 class="text-header-five font-medium antialiased mb-4">We would like to a check <span class="text-red">*</span></h5>
							<p class="font-thin mb-4">Please provide a reference, somebody that you have worked for (can also be family)that can tell us a little about you</p>

							<div class="mt-4 grid grid-cols-2 gap-x-2">
								<div><InputField text="First name" /></div>
							</div>
						</div>

						<div>
							<p class="font-thin">Please provide phone number or email address</p>

							<div class="mt-6">
								<InputWithSelectInternationPhoneNumber />
							</div>

							<div class="mt-6">
								<InputField text="Email address" />
							</div>

							<div class="mt-8">
								<div class="flex">
									<div class="inline-flex items-center justify-center">
									<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
										<path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
									</div>
									<div class="flex-none pl-2">
										<a href="#" target="_self" class="anchor-blue anchor-with-underline">Add another</a>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="flex flex-col justify-center items-center mt-20">
						<div class="grid grid-rows-2 gap-2">
							<div><ButtonPrimary text="Submit" class="w-button-lg text-xl py-4" /></div>
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
import InputField from '../../../../../../components/form/InputField.vue'
import InputWithSelectInternationPhoneNumber from '../../../../../../components/form/InputWithSelectInternationPhoneNumber.vue'
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
		InputField,
		InputWithSelectInternationPhoneNumber,
		ButtonPrimary,
		AnchorTextOnly,
		ChevronLeftIcon
	}
}
</script>