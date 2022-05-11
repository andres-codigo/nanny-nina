<template>
	<div class="w-full h-full">
		<TopNavigation text="Nanny Form">
			<template #iconLeft><router-link to="/dashboard"><ChevronLeftIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<Steps text="Step 2 of 2">
				<template #step-one><CompletedStep /></template>
				<template #step-two><CurrentStep /></template>
			</Steps>
			<div class="flex flex-col pt-6 mx-4">
				<form class="w-full" action="#" method="POST">
					<h5 class="text-header-five font-semibold antialiased mb-6">Education <span class="text-base text-gray-500">(Optional)</span></h5>

					<div class="mb-8">
						<p class="font-thin mb-4">What is your current education status?</p>
						<RadioQuestionsLabelLeftInputRight
							:screenReaderOnly="true"
							:sideBySideRadioButtons="false"
							:isQuestionOne="true"
							questionOneText="Currently enrolled"
							:questionOneSubTextHidden="true"
							questionTwoText="Completed"
							:questionTwoSubTextHidden="true"
							:hasThirdQuestion="true"
							questionThreeText="I don't have a formal education"
							:questionThreeSubTextHidden="true"
						/>
					</div>

					<div class="mb-10">
						<p>What is your highest level of education?</p>
						<div class="mt-4 grid grid-cols-2 gap-x-2">
							<div><SelectMenu /></div>
						</div>

						<p class="font-thin mt-8 mb-4">Please specify</p>

						<div class="flex">
							<div class="grow h-14">
								<InputFieldBorderBottomOnly type="text" />
							</div>
							<div class="inline-flex justify-center items-center w-14 h-14">
								<PlusIcon class="w-5 h-5 text-indigo-500" aria-hidden="true" />
							</div>
						</div>
					</div>

					<div class="mt-4 mb-16">
						<div>
							<h5 class="text-header-five font-semibold antialiased mb-4">Safety Document</h5>
							<p class="font-thin mb-2">Are you First Aid certified?</p>
							<RadioQuestionsLabelLeftInputRight :screenReaderOnly="true" legend="Are you First Aid certified?" questionOneText="Yes" questionTwoText="No" />
						</div>

						<div class="flex">
							<div class="grow h-14">
								<div class="mt-4 grid grid-cols-2 justify-items-center gap-x-2">
									<div>
										<ButtonOutlineDark text="Upload file" class="w-button-sm py-2 text-sm font-semibold" />
										<p class="text-sm font-light text-center text-gray-500 mt-2">Size limit 3MB</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="mt-28 mb-16">
						<div class="mb-4">
							<h5 class="text-header-five font-semibold antialiased mb-4">Other Relevant Safety Skills <span class="text-base text-gray-500 font-normal">(Optional)</span></h5>
							<p class="font-thin mb-4">Please specify, (If you have the VOG, it's a plus)</p>
						</div>

						<div class="flex">
							<div class="grow h-14">
								<InputFieldBorderBottomOnly type="text" />
							</div>
							<div class="inline-flex justify-center items-center w-14 h-14">
								<PlusIcon class="w-5 h-5 text-indigo-500" aria-hidden="true" />
							</div>
						</div>

						<div class="flex mt-4">
							<div class="grow h-14">
								<div class="mt-4 grid grid-cols-2 justify-items-center gap-x-2">
									<div>
										<ButtonOutlineDark text="Upload file" class="w-button-sm py-2 text-sm font-semibold" />
										<p class="text-sm font-light text-center text-gray-500 mt-2">Size limit 3MB</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="mt-4">
						<h5 class="text-header-five font-semibold antialiased mb-4">Travel <span class="text-base text-gray-500 font-normal">(Optional)</span></h5>
						<p class="font-thin mb-2">Do you have a driver's license?</p>
						<RadioQuestionsLabelLeftInputRight :screenReaderOnly="true" legend="Do you have a driver's license?" questionOneText="Yes" questionTwoText="No" />
					</div>

					<div class="flex flex-col my-10">
						<p class="font-thin mb-2">Are you willing to drive kids?</p>
						<RadioQuestionsLabelLeftInputRight :screenReaderOnly="true" legend="Do you have any health conditions?" questionOneText="Yes" questionTwoText="No" />
					</div>

					<div class="my-4">
						<h5 class="text-header-five font-semibold antialiased mb-4">Language</h5>
						<p class="font-thin mb-2">What language(s) do you speak?</p>
						<div class="mt-4 grid grid-cols-2 gap-y-6 gap-x-2">
							<div><SelectMenu /></div>
							<div class="grid grid-rows-2 grid-flow-col gap-x-0 justify-center">
								<div><BadgeRemove text="Dutch" /></div>
								<div><BadgeRemove text="English" /></div>
								<div><BadgeRemove text="Portuguese" /></div>
								<div><BadgeRemove text="Irish" /></div>
							</div>
						</div>
					</div>

					<div class="flex flex-col justify-center items-center mt-20">
						<div class="grid grid-rows-2 gap-2">
							<div><ButtonPrimary text="Next" class="w-button-lg text-xl py-4" /></div>
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

import RadioWithContainerLabelLeftInputRight from '../../../../../../components/form/RadioWithContainerLabelLeftInputRight.vue'
import SelectMenu from '../../../../../../components/form/SelectMenu.vue'
import RadioQuestionsLabelLeftInputRight from '../../../../../../components/form/RadioQuestionsLabelLeftInputRight.vue'
import InputFieldBorderBottomOnly from '../../../../../../components/form/InputFieldBorderBottomOnly.vue'
import ButtonOutlineDark from '../../../../../../components/buttons/ButtonOutlineDark.vue'
import BadgeRemove from '../../../../../../components/badge/BadgeRemove.vue'
import ButtonPrimary from '../../../../../../components/buttons/ButtonPrimary.vue'
import AnchorTextOnly from '../../../../../../components/dom-elements/AnchorTextOnly.vue'

import { ChevronLeftIcon, PlusIcon, QuestionMarkCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		Steps,
		CompletedStep,
		CurrentStep,
		UpcomingStep,
		RadioWithContainerLabelLeftInputRight,
		SelectMenu,
		RadioQuestionsLabelLeftInputRight,
		InputFieldBorderBottomOnly,
		ButtonOutlineDark,
		BadgeRemove,
		ButtonPrimary,
		AnchorTextOnly,
		ChevronLeftIcon,
		PlusIcon,
		QuestionMarkCircleIcon
	}
}
</script>