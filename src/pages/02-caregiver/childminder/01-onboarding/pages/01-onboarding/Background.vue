<template>
	<div class="w-full h-full">
		<TopNavigation text="Childminder Form">
			<template #iconLeft><router-link to="/dashboard"><ChevronLeftIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<Steps text="Step 2 of 2">
				<template #step-one><CompletedStep /></template>
				<template #step-two><CurrentStep /></template>
			</Steps>
			<div class="flex flex-col py-6 mx-4">
				<form class="w-full" action="#" method="POST">
					<div class="mb-10">
						<h5 class="text-header-five font-semibold antialiased mb-4">Type of Childminder</h5>
						<p class="font-thin mb-4">What kind of childminder are you?</p>

						<RadioQuestion
							:screenReaderOnly="true"
							:sideBySideRadioButtons="false"
							:isQuestionOne="true"
							questionOneText="ZZP (Own home or Parent's)"
							questionOneSubText="You are a registered childcare professional, can host and work flexibly"
							:questionOneSubTextHidden="false"
							questionTwoText="Regeling dienstverlening aan huis"
							questionTwoSubText="You are unregistered with the government and can only work at parent's"
							:questionTwoSubTextHidden="false"
							:hasThirdQuestion="true"
							questionThreeText="I don't know yet"
							questionThreeSubText="I'll figure it out later"
							:questionThreeSubTextHidden="false"
						/>
					</div>

					<div class="mb-10">
						<div>
							<h5 class="text-header-five font-semibold antialiased mb-4">Safety Document</h5>
							<p class="font-thin mb-2">Do you have a VOG safety document?</p>
							<RadioQuestion :screenReaderOnly="true" legend="Are you First Aid certified?" questionOneText="Yes" questionTwoText="No" />
						</div>

						<div class="flex">
							<div class="grow">
								<div class="mt-4 grid grid-cols-2 justify-items-center gap-x-2">
									<div>
										<ButtonOutlineDark text="Upload file" class="w-button-sm py-2 text-sm font-semibold" />
										<p class="text-sm font-light text-center text-gray-500 mt-2">Size limit 3MB</p>
									</div>
									<div><span class="text-sm text-gray-500">(Optional)</span></div>
								</div>
							</div>
						</div>
					</div>

					<div class="mb-10">
						<h5 class="text-header-five font-semibold antialiased mb-4">Home Information</h5>

						<p class="font-thin">What type of home do you live in?</p>
						<p class="text-sm text-gray-500 font-thin mb-4">It is important for parents that you describe your home</p>
						<div class="mt-4 mr-4">
							<SelectMenu />
						</div>

						<p class="font-thin mt-8">Please add other specific details</p>

						<div class="mt-4">
							<Textarea :characterNumber="140" name="note-for-parents" id="note-for-parents" />
						</div>

						<div class="mt-12">
							<MultiplePhotoUploadFlex description="Add pictures of your home" />
						</div>
					</div>

					<div class="mb-10">
						<div>
							<p class="font-thin mb-2">Do you have pets?</p>
							<RadioQuestion :screenReaderOnly="true" legend="Do you have pets?" questionOneText="Yes" questionTwoText="No" />
						</div>

						<p>Select what pet(s) you have and how many?</p>
						<div class="flex flex-row">
							<div class="inline-flex items-center pr-4">
								<SelectMenu optionText="Select pet" class="w-select-sm" />
							</div>
							<div class="flex grow justify-center items-center px-4">
								<SelectMenu optionText="1" class="w-select-xs" />
							</div>
							<div class="inline-flex justify-center items-center w-14 h-14">
								<PlusIcon class="w-5 h-5 text-indigo-500" aria-hidden="true" />
							</div>
						</div>
					</div>

					<div class="mb-10">
						<div class="mb-4">
							<h5 class="text-header-five font-semibold antialiased mb-4">Allergies <span class="text-sm text-gray-500">(Optional)</span></h5>
							<p class="font-thin mb-2">Are you allergic to pets?</p>
							<RadioQuestion :screenReaderOnly="true" legend="Do you have any allergies?" questionOneText="Yes" questionTwoText="No" />
						</div>

						<div>
							<p class="font-thin mb-2">Please specify</p>
							<div class="mt-4 grid grid-cols-2 gap-y-6 gap-x-2">
								<div><SelectMenu /></div>
								<div class="grid grid-rows-2 grid-flow-col gap-x-0 justify-center">
									<div><BadgeRemove text="Cats" /></div>
									<div><BadgeRemove text="Dogs" /></div>
									<div><BadgeRemove text="Birds" /></div>
								</div>
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

import RadioQuestion from '../../../../../../components/form/RadioQuestion.vue'
import SelectMenu from '../../../../../../components/form/SelectMenu.vue'
import Textarea from '../../../../../../components/form/Textarea.vue'
import InputFieldBorderBottomOnly from '../../../../../../components/form/InputFieldBorderBottomOnly.vue'
import MultiplePhotoUploadFlex from '../../../../../../components/media/multiple-upload/MultiplePhotoUploadFlex.vue'
import BadgeRemove from '../../../../../../components/badge/BadgeRemove.vue'
import ButtonOutlineDark from '../../../../../../components/buttons/ButtonOutlineDark.vue'
import ButtonPrimary from '../../../../../../components/buttons/ButtonPrimary.vue'
import AnchorTextOnly from '../../../../../../components/dom-elements/AnchorTextOnly.vue'

import { ChevronLeftIcon, PlusIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		Steps,
		CompletedStep,
		CurrentStep,
		UpcomingStep,
		RadioQuestion,
		SelectMenu,
		Textarea,
		InputFieldBorderBottomOnly,
		MultiplePhotoUploadFlex,
		BadgeRemove,
		ButtonOutlineDark,
		ButtonPrimary,
		AnchorTextOnly,
		ChevronLeftIcon,
		PlusIcon,
	}
}
</script>