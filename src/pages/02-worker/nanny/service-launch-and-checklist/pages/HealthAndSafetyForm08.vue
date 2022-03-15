<script setup>
import TopNavigation from '../../../../../components/navigation/TopNavigation.vue'
import Checkbox from '../../../../../components/form/Checkbox.vue'
import CheckboxQuestion from '../../../../../components/form/CheckboxQuestion.vue'
import SelectMenu from '../../../../../components/form/SelectMenu.vue'
import InputFieldBorderBottomOnly from '../../../../../components/form/InputFieldBorderBottomOnly.vue'
import ButtonOutlineDark from '../../../../../components/buttons/ButtonOutlineDark.vue'
import ButtonPrimary from '../../../../../components/buttons/ButtonPrimary.vue'
</script>

<template>
	<div class="h-full">
		<TopNavigation routerLinkPath="/dashboard" text="Nanny Form" />
		<main>
			<div class="flex flex-col pt-6 mx-4">
				<form action="#" method="POST">
					<h2 class="my-6 text-left text-2xl font-normal text-gray-900">Health and Safety Documents</h2>

					<div class="mt-4 mb-16">
						<div class="mb-2">
							<h3 class="text-lg font-medium mb-4">Personal Health</h3>
							<p class="text-sm font-thin mb-4">Do you have any health conditions?</p>
							<CheckboxQuestion screenReaderOnly="true" legend="Do you have any health conditions?" QuestionOneText="Yes" QuestionTwoText="No" />
						</div>

						<div>
							<h3	class="text-sm font-thin">If yes, please specify</h3>

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

					<div class="mt-4 mb-16">
						<div class="mb-8">
							<h3 class="text-lg font-medium mb-4">Allergies</h3>
							<p class="text-sm font-thin mb-4">Do you have any allergies?</p>
							<CheckboxQuestion screenReaderOnly="true" legend="Do you have any allergies?" QuestionOneText="Yes" QuestionTwoText="No" />
						</div>

						<div>
							<h3	class="text-sm font-thin">If yes, please specify</h3>

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

					<div class="mt-4 mb-16">
						<div class="mb-8">
							<h3 class="text-lg font-medium mb-4">Safety Document</h3>
							<p class="text-sm font-thin mb-4">Are you First Aid certified?</p>
							<CheckboxQuestion screenReaderOnly="true" legend="Are you First Aid certified?" QuestionOneText="Yes" QuestionTwoText="No" />
						</div>

						<div>
							<h3	class="text-sm font-thin mb-4">If yes, please upload</h3>

							<div class="flex">
								<div class="grow h-14">
									<ButtonOutlineDark text="Upload file" />
									<p class="text-sm font-light text-center text-gray-500 mt-2">Size limit 3MB</p>
								</div>
							</div>
						</div>
					</div>

					<div class="mt-4 mb-16">
						<div class="mb-4">
							<h3 class="text-lg font-medium mb-4">Other Relevant Safety Qualifications</h3>
							<p class="text-sm font-thin mb-4">Please specify other relevant qualifications?</p>
						</div>

						<div class="flex">
							<div class="grow h-14">
								<InputFieldBorderBottomOnly type="text" />
							</div>
							<div class="flex-none inline-flex justify-center items-center w-14 h-14">
								<PlusIcon class="w-5 h-5 text-indigo-500" aria-hidden="true" />
							</div>
						</div>
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