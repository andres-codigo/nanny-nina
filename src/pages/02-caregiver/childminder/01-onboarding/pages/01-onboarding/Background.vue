<template>
	<div class="w-full h-full">
		<TopNavigation text="Childminder Form">
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
							Type of Childminder
						</h5>
						<p class="font-thin mb-4">
							What kind of childminder are you?
						</p>

						<RadioQuestionsLabelLeftInputRight
							:screen-reader-only="true"
							:side-by-side-radio-buttons="false"
							:is-question-one="true"
							question-one-text="ZZP (Own home or Parent's)"
							question-one-sub-text="You are a registered childcare professional, can host and work flexibly"
							:question-one-sub-text-hidden="false"
							question-two-text="Regeling dienstverlening aan huis"
							question-two-sub-text="You are unregistered with the government and can only work at parent's"
							:question-two-sub-text-hidden="false"
							:has-third-question="true"
							question-three-text="I don't know yet"
							question-three-sub-text="I'll figure it out later"
							:question-three-sub-text-hidden="false"
						/>
					</div>

					<div class="mb-10">
						<div>
							<h5
								class="text-header-five font-semibold antialiased mb-4"
							>
								Safety Document
							</h5>
							<p class="font-thin mb-2">
								Do you have a VOG safety document?
							</p>
							<RadioQuestionsLabelLeftInputRight
								:screen-reader-only="true"
								legend="Are you First Aid certified?"
								question-one-text="Yes"
								question-two-text="No"
							/>
						</div>

						<div class="flex">
							<div class="grow">
								<div
									class="mt-4 grid grid-cols-2 justify-items-center gap-x-2"
								>
									<div>
										<ButtonOutlineDark
											text="Upload file"
											classes="w-button-sm text-sm font-semibold py-2"
										/>
										<p
											class="text-sm font-light text-center text-gray-500 mt-2"
										>
											Size limit 3MB
										</p>
									</div>
									<div>
										<span class="text-sm text-gray-500"
											>(Optional)</span
										>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="mb-10">
						<h5
							class="text-header-five font-semibold antialiased mb-4"
						>
							Home Information
						</h5>

						<p class="font-thin">
							What type of home do you live in?
						</p>
						<p class="text-sm text-gray-500 font-thin mb-4">
							It is important for parents that you describe your
							home
						</p>
						<div class="mt-4 mr-4">
							<SelectMenu />
						</div>

						<p class="font-thin mt-8">
							Please add other specific details
						</p>

						<div class="mt-4">
							<TextareaComponent
								id="note-for-parents"
								character-number="140"
								name="note-for-parents"
							/>
						</div>

						<div class="mt-12">
							<MultiplePhotoUploadFlex
								description="Add pictures of your home"
							/>
						</div>
					</div>

					<div class="mb-10">
						<div>
							<p class="font-thin mb-2">Do you have pets?</p>
							<RadioQuestionsLabelLeftInputRight
								:screen-reader-only="true"
								legend="Do you have pets?"
								question-one-text="Yes"
								question-two-text="No"
							/>
						</div>

						<p class="font-thin">
							Select what pet(s) you have and how many?
						</p>
						<div class="flex flex-row">
							<div class="inline-flex items-center pr-4">
								<SelectMenu
									option-text="Select pet"
									classes="w-select-sm"
								/>
							</div>
							<div
								class="flex grow justify-center items-center px-4"
							>
								<SelectMenu
									option-text="0"
									classes="w-select-xs"
								/>
							</div>
							<div
								class="inline-flex justify-center items-center w-14 h-14"
							>
								<PlusIcon
									class="w-5 h-5 text-indigo-500"
									aria-hidden="true"
								/>
							</div>
							<div
								class="inline-flex justify-center items-center w-14 h-14"
							>
								&nbsp;
							</div>
						</div>
						<div class="flex flex-row">
							<div class="inline-flex items-center pr-4">
								<SelectMenu
									option-text="Select pet"
									classes="w-select-sm"
								/>
							</div>
							<div
								class="flex grow justify-center items-center px-4"
							>
								<SelectMenu
									option-text="0"
									classes="w-select-xs"
								/>
							</div>
							<div
								class="inline-flex justify-center items-center w-14 h-14"
							>
								<PlusIcon
									class="w-5 h-5 text-indigo-500"
									aria-hidden="true"
								/>
							</div>
							<div
								class="inline-flex justify-center items-center w-14 h-14"
							>
								<XCircleIcon
									class="w-5 h-5 text-gray-500"
									aria-hidden="true"
								/>
							</div>
						</div>
					</div>

					<div class="mb-10">
						<div class="mb-4">
							<h5
								class="text-header-five font-semibold antialiased mb-4"
							>
								Allergies
								<span class="text-sm text-gray-500"
									>(Optional)</span
								>
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
						class="flex flex-col justify-center items-center mt-20"
					>
						<div class="grid grid-rows-2 gap-2">
							<div>
								<ButtonPrimary
									text="Next"
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
import SelectMenu from '../../../../../../components/form/SelectMenu.vue'
import TextareaComponent from '../../../../../../components/form/TextareaComponent.vue'
import MultiplePhotoUploadFlex from '../../../../../../components/media/multiple-upload/MultiplePhotoUploadFlex.vue'
import BadgeRemove from '../../../../../../components/badge/BadgeRemove.vue'
import ButtonOutlineDark from '../../../../../../components/buttons/ButtonOutlineDark.vue'
import ButtonPrimary from '../../../../../../components/buttons/ButtonPrimary.vue'
import AnchorTextOnly from '../../../../../../components/dom-elements/AnchorTextOnly.vue'

import { ChevronLeftIcon, PlusIcon, XCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		Steps,
		CompletedStep,
		CurrentStep,
		RadioQuestionsLabelLeftInputRight,
		SelectMenu,
		TextareaComponent,
		MultiplePhotoUploadFlex,
		BadgeRemove,
		ButtonOutlineDark,
		ButtonPrimary,
		AnchorTextOnly,
		ChevronLeftIcon,
		PlusIcon,
		XCircleIcon,
	},
}
</script>
