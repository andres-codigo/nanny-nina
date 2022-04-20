<template>
	<div class="w-full h-full">
		<TopNavigation text="Childminder Form">
			<template #iconLeft><router-link to="/dashboard"><ChevronLeftIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col py-12 mx-4">
				<form class="w-full" action="#" method="POST">
					<div class="mb-10">
						<h5 class="text-left text-header-five font-semibold antialiased mb-4">Type of Childminder</h5>
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

					<div class="mb-20">
						<div>
							<h5 class="text-header-five font-semibold antialiased mb-4">Safety Document <span class="text-sm text-gray-500">(optional)</span></h5>
							<p class="font-thin mb-4">Do you have a VOG safety document?</p>
							<RadioQuestion :screenReaderOnly="true" legend="Are you First Aid certified?" questionOneText="Yes" questionTwoText="No" />
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

					<div class="mb-10">
						<h5 class="text-header-five font-semibold antialiased mb-4">Home Information</h5>

						<p class="font-thin">What type of home do you live in?</p>
						<p class="text-sm text-gray-500 font-thin mb-4">It is important for parents that you describe your home</p>
						<div class="mt-4 mr-4">
							<SelectMenu />
						</div>

						<p class="font-thin mt-8 mb-4">Please add other specific details</p>

						<div class="flex">
							<div class="grow h-14">
								<InputFieldBorderBottomOnly type="text" />
							</div>
							<div class="flex-none inline-flex justify-center items-center w-14 h-14">
								<PlusIcon class="w-5 h-5 text-indigo-500" aria-hidden="true" />
							</div>
						</div>

						<div class="mt-12">
							<MultiplePhotoUpload description="Add pictures of your home" />
						</div>
					</div>

					<div class="mb-10">
						<div class="mb-2">
							<p class="font-thin mb-4">Do you have pets?</p>
							<RadioQuestion :screenReaderOnly="true" legend="Do you have pets?" questionOneText="Yes" questionTwoText="No" />
						</div>

						<div>
							<p class="font-thin">Please specify</p>

							<div class="flex">
								<div class="grow h-14">
									<InputFieldBorderBottomOnly type="text" />
								</div>
								<div class="flex-none inline-flex justify-center items-center w-14 h-14">
									<PlusIcon class="w-5 h-5 text-indigo-500" aria-hidden="true" />
								</div>
							</div>
						</div>
					</div>

					<div class="mb-10">
						<div class="mb-8">
							<h5 class="text-header-five font-semibold antialiased mb-4">Allergies</h5>
							<p class="font-thin mb-4">Are you allergic to pets?</p>
							<RadioQuestion :screenReaderOnly="true" legend="Do you have any allergies?" questionOneText="Yes" questionTwoText="No" />
						</div>

						<div>
							<p class="font-thin">Please specify</p>

							<div class="flex">
								<div class="grow h-14">
									<InputFieldBorderBottomOnly type="text" />
								</div>
								<div class="flex-none inline-flex justify-center items-center w-14 h-14">
									<PlusIcon class="w-5 h-5 text-indigo-500" aria-hidden="true" />
								</div>
							</div>
						</div>
					</div>

					<div class="flex flex-col justify-center items-center mt-20">
						<ButtonPrimary text="Next" class="w-button-lg text-xl py-4" />
					</div>
				</form>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../../components/navigation/TopNavigation.vue'
import RadioQuestion from '../../../../../../components/form/RadioQuestion.vue'
import SelectMenu from '../../../../../../components/form/SelectMenu.vue'
import InputFieldBorderBottomOnly from '../../../../../../components/form/InputFieldBorderBottomOnly.vue'
import MultiplePhotoUpload from '../../../../../../components/media/multiple-upload/MultiplePhotoUpload.vue'
import ButtonOutlineDark from '../../../../../../components/buttons/ButtonOutlineDark.vue'
import ButtonPrimary from '../../../../../../components/buttons/ButtonPrimary.vue'

import { ChevronLeftIcon, PlusIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		RadioQuestion,
		SelectMenu,
		InputFieldBorderBottomOnly,
		MultiplePhotoUpload,
		ButtonOutlineDark,
		ButtonPrimary,
		ChevronLeftIcon,
		PlusIcon,
	}
}
</script>