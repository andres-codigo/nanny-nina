<script setup>
import TopNavigation from '../../../../../components/navigation/TopNavigation.vue'
import Checkbox from '../../../../../components/form/Checkbox.vue'
import SelectMenu from '../../../../../components/form/SelectMenu.vue'
import CheckboxQuestion from '../../../../../components/form/CheckboxQuestion.vue'
import InputFieldBorderBottomOnly from '../../../../../components/form/InputFieldBorderBottomOnly.vue'
import ButtonPrimary from '../../../../../components/buttons/ButtonPrimary.vue'
</script>

<template>
	<div class="w-full h-full">
		<TopNavigation routerLinkPath="/dashboard" text="Nanny Form" hideIcon="true" />
		<main>
			<div class="flex flex-col pt-6 mx-4">
				<form action="#" method="POST">
					<h5 class="my-6 text-left text-header-five font-normal text-gray-900">Education <span class="text-base text-gray-500">(optional)</span></h5>

					<div class="mt-4 mb-8">
						<h6 class="text-header-six font-medium mb-4">Current Education Status</h6>
						<fieldset>
							<legend class="sr-only">Current Education Status</legend>
							<Checkbox text="Currently enrolled" />
							<Checkbox text="Completed" />
							<Checkbox text="I don't have a formal education" />
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

					<div class="mt-4 mb-8">
						<h6 class="text-header-six font-medium mb-4">Driver's License <span class=" text-gray-500">(optional)</span></h6>
						<p class="text-sm font-thin mb-4">Do you have a driver's license?</p>
						<CheckboxQuestion screenReaderOnly="true" legend="Do you have a driver's license?" QuestionOneText="Yes" QuestionTwoText="No" />
					</div>

					<div class="mt-10">
						<div class="my-6">
							<ButtonPrimary text="Save &amp; Continue" />
						</div>
					</div>
				</form>
			</div>
		</main>
	</div>
</template>

<script>
import { PlusIcon, QuestionMarkCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
		PlusIcon,
		QuestionMarkCircleIcon
	}
}
</script>