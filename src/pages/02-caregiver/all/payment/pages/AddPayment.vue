<template>
	<div class="w-full h-full">
		<TopNavigation text="Account Setup">
			<template #iconLeft><router-link to="'/dashboard?tab=1"><ChevronLeftIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
			<template #iconRight><QuestionMarkCircleIcon class="w-6 h-6 text-green-500" aria-hidden="true" /></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col mx-4">
				<div class="flex flex-col pt-6 mb-6">
					<h4 class="text-header-four font-semibold antialiased mb-2">Connect account</h4>
					<p class="font-light antialiased">This account is linked to your payouts</p>
				</div>

				<div class="flex pb-12">
					<div class="grow h-14">
						<InputFieldBorderBottomOnly type="text" placeholder="Enter account no" />
					</div>
					<div class="inline-flex justify-center items-center w-14 h-14">
						<Img src="./assets/svg/other/edit-gray-pencil.svg" />
					</div>
				</div>

				<div class="flex flex-col justify-center items-center">
					<ButtonDisabled text="Update" class="w-button-sm text-xl py-4" />
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation-and-tabs/TopNavigation.vue'
import Img from '../../../../../components/dom-elements/Img.vue'
import InputFieldBorderBottomOnly from '../../../../../components/form/InputFieldBorderBottomOnly.vue'
import ButtonDisabled from '../../../../../components/buttons/ButtonDisabled.vue'

import { ChevronLeftIcon, QuestionMarkCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		Img,
		InputFieldBorderBottomOnly,
		ButtonDisabled,
		ChevronLeftIcon,
		QuestionMarkCircleIcon
	}
}
</script>