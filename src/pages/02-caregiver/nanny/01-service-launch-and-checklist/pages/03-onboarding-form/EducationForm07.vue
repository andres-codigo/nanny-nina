<template>
	<div class="w-full h-full">
		<TopNavigation routerLinkPath="/dashboard" text="Nanny Form" />
		<main>
			<div class="flex flex-col pt-6 mx-4">
				<form action="#" method="POST">
					<h5 class="my-6 text-left text-header-five font-normal text-gray-900">Education <span class="text-base text-gray-500">(optional)</span></h5>

					<div class="mt-4 mb-8">
						<h6 class="text-header-six font-medium mb-4">Current Education Status</h6>
						<fieldset>
							<legend class="sr-only">Current Education Status</legend>
							<RadioWithContainerAndLabel text="Currently enrolled" />
							<RadioWithContainerAndLabel text="Completed" />
							<RadioWithContainerAndLabel text="I don't have a formal education" />
						</fieldset>
					</div>

					<div class="mb-20">
						<h6 class="text-header-six font-medium">What is your highest level of education?</h6>
						<p class="text-xs font-thin text-gray-500 mb-8">Please upload your certificate if you wish to verify yourself as a trained childcare professional or become a childminder.</p>
						<SelectMenu />
					</div>

					<div class="mb-20">
						<div class="flex mb-2">
							<div class="flex-none"><h6 class="text-header-six font-medium">Other Certifications</h6></div>
							<div class="flex-none inline-flex justify-center items-center pl-8"><QuestionMarkCircleIcon class="w-6 h-6 text-indigo-500" aria-hidden="true" /></div>
						</div>
						<p	class="text-sm font-thin mb-4">Please specify other relevant qualification(s)</p>

						<div class="flex">
							<div class="grow h-14">
								<InputFieldBorderBottomOnly type="text" />
							</div>
							<div class="flex-none inline-flex justify-center items-center w-14 h-14">
								<PlusIcon class="w-5 h-5 text-indigo-500" aria-hidden="true" />
							</div>
						</div>
					</div>

					<div class="mt-4">
						<h6 class="text-header-six font-medium mb-4">Driver's License <span class=" text-gray-500">(optional)</span></h6>
						<p class="text-xl font-thin mb-4">Do you have a driver's license?</p>
						<RadioQuestion :screenReaderOnly="true" legend="Do you have a driver's license?" questionOneText="Yes" questionTwoText="No" />
					</div>

					<div class="flex flex-col mt-4 mb-8">
						<p class="text-xl font-thin mb-4">If yes, are you willing to drive kids?</p>
						<RadioQuestion :screenReaderOnly="true" legend="Do you have any health conditions?" questionOneText="Yes" questionTwoText="No" />
					</div>

					<div class="mt-10">
						<ButtonPrimary text="Save &amp; Continue" />
					</div>
				</form>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../../components/navigation/TopNavigation.vue'
import RadioWithContainerAndLabel from '../../../../../../components/form/RadioWithContainerAndLabel.vue'
import SelectMenu from '../../../../../../components/form/SelectMenu.vue'
import RadioQuestion from '../../../../../../components/form/RadioQuestion.vue'
import InputFieldBorderBottomOnly from '../../../../../../components/form/InputFieldBorderBottomOnly.vue'
import ButtonPrimary from '../../../../../../components/buttons/ButtonPrimary.vue'
import { PlusIcon, QuestionMarkCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		RadioWithContainerAndLabel,
		SelectMenu,
		RadioQuestion,
		InputFieldBorderBottomOnly,
		ButtonPrimary,
		PlusIcon,
		QuestionMarkCircleIcon
	}
}
</script>