<template>
	<div class="w-full h-full">
		<TopNavigation text="Nanny Form">
			<template #iconLeft><router-link to="/dashboard"><ChevronLeftIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col pt-6 mx-4">
				<form class="w-full" action="#" method="POST">

					<div class="mt-4 mb-16">
						<div class="mb-2">
							<h5 class="text-header-five font-semibold antialiased mb-4">Personal Health <span class="text-base text-gray-500">(optional)</span></h5>
							<p class="font-thin mb-2">Do you have any health conditions?</p>
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
					</div>

					<div class="mt-4 mb-16">
						<div class="mb-8">
							<h5 class="text-header-five font-semibold antialiased mb-4">Allergies</h5>
							<p class="font-thin mb-2">Are you allergic to pets?</p>
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

					<div class="flex flex-col justify-center items-center mt-10">
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
import InputFieldBorderBottomOnly from '../../../../../../components/form/InputFieldBorderBottomOnly.vue'
import SelectMenu from '../../../../../../components/form/SelectMenu.vue'
import ButtonPrimary from '../../../../../../components/buttons/ButtonPrimary.vue'

import { ChevronLeftIcon, PlusIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		RadioQuestion,
		InputFieldBorderBottomOnly,
		SelectMenu,
		ButtonPrimary,
		ChevronLeftIcon,
		PlusIcon
	}
}
</script>