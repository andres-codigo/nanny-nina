<template>
	<div class="w-full h-full">
		<TopNavigation text="Nanny Form">
			<template #iconLeft><router-link to="/dashboard"><ChevronLeftIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col pt-6 mx-4">
				<form class="w-full" action="#" method="POST">
					<h5 class="text-left text-header-five font-semibold antialiased my-6">Education <span class="text-base text-gray-500">(optional)</span></h5>

					<div class="mt-4 mb-8">
						<h6 class="text-header-six font-medium mb-4">Current Education Status</h6>
						<fieldset>
							<legend class="sr-only">Current Education Status</legend>
							<RadioWithContainerAndLabel text="Currently enrolled" />
							<RadioWithContainerAndLabel text="Completed" />
							<RadioWithContainerAndLabel text="I don't have a formal education" />
						</fieldset>
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
							<div class="flex-none inline-flex justify-center items-center w-14 h-14">
								<PlusIcon class="w-5 h-5 text-indigo-500" aria-hidden="true" />
							</div>
						</div>
					</div>

					<div class="mt-4 mb-16">
						<div>
							<h5 class="text-header-five font-semibold antialiased mb-4">Safety Document</h5>
							<p class="font-thin mb-4">Are you First Aid certified?</p>
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

					<!-- <div class="mt-4 mb-16">
						<div class="mb-2">
							<h6 class="text-header-six font-medium mb-4">Personal Health</h6>
							<p class="font-thin mb-4">Do you have any health conditions?</p>
							<RadioQuestion :screenReaderOnly="true" legend="Do you have any health conditions?" questionOneText="Yes" questionTwoText="No" />
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
					</div> -->

					<div class="mt-28 mb-16">
						<div class="mb-4">
							<h5 class="text-header-five font-semibold antialiased mb-4">Other Relevant Safety Skills <span class="text-base text-gray-500 font-normal">(optional)</span></h5>
							<p class="font-thin mb-4">Please specify other relevant qualification(s)?</p>
						</div>

						<div class="flex">
							<div class="grow h-14">
								<InputFieldBorderBottomOnly type="text" />
							</div>
							<div class="flex-none inline-flex justify-center items-center w-14 h-14">
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
						<h5 class="text-header-five font-semibold antialiased mb-4">Travel <span class="text-base text-gray-500 font-normal">(optional)</span></h5>
						<p class="font-thin mb-2">Do you have a driver's license?</p>
						<RadioQuestion :screenReaderOnly="true" legend="Do you have a driver's license?" questionOneText="Yes" questionTwoText="No" />
					</div>

					<div class="flex flex-col my-10">
						<p class="font-thin mb-2">Are you willing to drive kids?</p>
						<RadioQuestion :screenReaderOnly="true" legend="Do you have any health conditions?" questionOneText="Yes" questionTwoText="No" />
					</div>

					<div class="my-4">
						<h5 class="text-header-five font-semibold antialiased">Language</h5>
						<div class="mt-4 grid grid-cols-2 gap-y-6 gap-x-2">
							<div><SelectMenu text="Language(s)" /></div>
							<div class="flex flex-wrap justify-center items-center mt-4">
								<BadgeRemove text="Dutch" />
								<BadgeRemove text="English" />
								<BadgeRemove text="Portuguese" />
								<BadgeRemove text="Irish" />
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
import RadioWithContainerAndLabel from '../../../../../../components/form/RadioWithContainerAndLabel.vue'
import SelectMenu from '../../../../../../components/form/SelectMenu.vue'
import RadioQuestion from '../../../../../../components/form/RadioQuestion.vue'
import InputFieldBorderBottomOnly from '../../../../../../components/form/InputFieldBorderBottomOnly.vue'
import ButtonOutlineDark from '../../../../../../components/buttons/ButtonOutlineDark.vue'
import BadgeRemove from '../../../../../../components/badge/BadgeRemove.vue'
import ButtonPrimary from '../../../../../../components/buttons/ButtonPrimary.vue'

import { ChevronLeftIcon, PlusIcon, QuestionMarkCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		RadioWithContainerAndLabel,
		SelectMenu,
		RadioQuestion,
		InputFieldBorderBottomOnly,
		ButtonOutlineDark,
		BadgeRemove,
		ButtonPrimary,
		ChevronLeftIcon,
		PlusIcon,
		QuestionMarkCircleIcon
	}
}
</script>