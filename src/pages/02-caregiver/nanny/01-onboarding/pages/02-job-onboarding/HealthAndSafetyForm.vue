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
					<div class="mb-16">
						<div class="mb-2">
							<h5
								class="text-header-five font-semibold antialiased mb-4"
							>
								Personal Health
								<span class="text-base text-gray-500"
									>(Optional)</span
								>
							</h5>
							<p class="font-thin mb-2">
								Do you have any health conditions?
							</p>
							<RadioQuestionsLabelLeftInputRight
								:screen-reader-only="true"
								legend="Do you have any health conditions?"
								question-one-text="Yes"
								question-two-text="No"
							/>
						</div>

						<div>
							<p class="font-thin">Please specify</p>

							<div class="flex">
								<div class="grow h-14">
									<InputFieldBorderBottomOnly type="text" />
								</div>
								<div
									class="inline-flex justify-center items-center w-14 h-14"
								>
									<PlusIcon
										class="w-5 h-5 text-indigo-500"
										aria-hidden="true"
									/>
								</div>
							</div>
						</div>
					</div>

					<div class="mt-4 mb-16">
						<div class="mb-8">
							<h5
								class="text-header-five font-semibold antialiased mb-4"
							>
								Allergies
							</h5>
							<p class="font-thin mb-2">
								Are you allergic to pets?
							</p>
							<RadioQuestionsLabelLeftInputRight
								:screen-reader-only="true"
								legend="Do you have any allergies?"
								question-one-text="Yes"
								question-two-text="No"
							/>
						</div>

						<div>
							<p class="font-thin mb-2">Please specify</p>
							<div class="mt-4 grid grid-cols-2 gap-y-6 gap-x-2">
								<div><SelectMenu /></div>
								<div
									class="grid grid-rows-2 grid-flow-col gap-x-0 justify-center"
								>
									<div><BadgeRemove text="Cats" /></div>
									<div><BadgeRemove text="Dogs" /></div>
									<div><BadgeRemove text="Birds" /></div>
								</div>
							</div>
						</div>
					</div>

					<div
						class="flex flex-col justify-center items-center mt-10"
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

import RadioQuestionsLabelLeftInputRight from '../../../../../../components/form/RadioQuestionsLabelLeftInputRight.vue'
import InputFieldBorderBottomOnly from '../../../../../../components/form/InputFieldBorderBottomOnly.vue'
import SelectMenu from '../../../../../../components/form/SelectMenu.vue'
import BadgeRemove from '../../../../../../components/badge/BadgeRemove.vue'
import ButtonPrimary from '../../../../../../components/buttons/ButtonPrimary.vue'
import AnchorTextOnly from '../../../../../../components/dom-elements/AnchorTextOnly.vue'

import { ChevronLeftIcon, PlusIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		Steps,
		CompletedStep,
		CurrentStep,
		RadioQuestionsLabelLeftInputRight,
		InputFieldBorderBottomOnly,
		SelectMenu,
		BadgeRemove,
		ButtonPrimary,
		AnchorTextOnly,
		ChevronLeftIcon,
		PlusIcon,
	},
}
</script>
