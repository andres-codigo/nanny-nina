<template>
	<div class="w-full h-full">
		<TopNavigation text="Basic Information">
			<template #iconLeft><router-link to="/dashboard"><ChevronLeftIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
			<template #iconRight><QuestionMarkCircleIcon class="w-6 h-6 text-green-500" aria-hidden="true" /></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col pt-6 mx-4">
				<form class="w-full" action="#" method="POST">
					<h5 class="text-left text-header-five font-semibold antialiased my-6">Basic Information</h5>

					<div class="mt-4 mb-2">
						<p class="font-thin mb-2">Are you expecting?</p>
						<RadioQuestion :screenReaderOnly="true" legend="Are you expecting" questionOneText="Yes" questionTwoText="No" />
					</div>

					<div class="mb-10">
						<div class="mt-2 grid grid-cols-2 gap-x-2">
							<div><InputField :hasLeadingIcon="true" inputIconType="calendar" text="Due date" /></div>
						</div>
					</div>

					<div class="mb-10">
						<p class="font-thin">How many kids do you have?</p>
						<div class="mt-4 grid grid-cols-2 gap-x-2">
							<div><SelectMenu optionText="- Select number -" /></div>
						</div>
					</div>

					<div class="flex flex-col mb-10">
						<p class="font-thin">Who needs a nanny?</p>
						<div class="grid grid-cols-2 gap-4 gap-y-6 gap-x-2 mt-4">
							<div><InputField text="First name" /></div>
							<div><InputField :hasLeadingIcon="true" inputIconType="calendar" placeholder="DD/MM/YYYY" text="Date of birth" /></div>

							<div><SelectMenu labelText="Gender" /></div>
						</div>
					</div>

					<div class="mb-10">
						<div class="mb-2">
							<p class="font-thin mb-2">Does this person have any health condition or require special attention?</p>
							<RadioQuestion :screenReaderOnly="true" legend="Does this person have any health condition or require special attention?" questionOneText="Yes" questionTwoText="No" />
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

					<hr class="border-1 border-gray-50 my-6" />

					<div class="flex">
						<div class="inline-flex items-center justify-center">
						<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
						</div>
						<div class="flex-none pl-2">
							<a href="#" target="_self" class="text-blue-500 anchor-with-underline">Add another child</a>
						</div>
					</div>

					<hr class="border-1 border-gray-50 my-6" />

					<div class="mb-10">
						<div class="mb-2">
							<p class="font-thin mb-2">Do you have pets?</p>
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

					<div class="flex flex-col justify-center items-center mt-20 mb-10">
						<ButtonPrimary text="Next" class="w-button-lg text-xl py-4" />
					</div>
				</form>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation/TopNavigation.vue'
import SelectMenu from '../../../../../components/form/SelectMenu.vue'
import RadioQuestion from '../../../../../components/form/RadioQuestion.vue'
import InputField from '../../../../../components/form/InputField.vue'
import InputFieldBorderBottomOnly from '../../../../../components/form/InputFieldBorderBottomOnly.vue'
import ButtonPrimary from '../../../../../components/form/buttons/ButtonPrimary.vue'

import { ChevronLeftIcon, PlusIcon, QuestionMarkCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		SelectMenu,
		RadioQuestion,
		InputField,
		InputFieldBorderBottomOnly,
		ButtonPrimary,
		ChevronLeftIcon,
		PlusIcon,
		QuestionMarkCircleIcon
	}
}
</script>