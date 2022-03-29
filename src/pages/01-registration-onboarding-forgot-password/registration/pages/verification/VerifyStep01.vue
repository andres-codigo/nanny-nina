<template>
	<div class="w-full h-screen">
		<TopNavigation backgroundColor="bg-white" :dropShadow="false">
			<template #iconLeft><router-link to="/dashboard"><ChevronLeftIcon class="w-8 h-8 text-black" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<div class="mt-20 mx-4">
				<form class="w-full" action="#" method="POST">
					<div class="mt-6">
						<h3 class="text-center text-header-three text-gray-900 font-bold">Verify your number</h3>
						<p class="text-center font-light mt-6">We would like to confirm your contact detail</p>
					</div>
					<div class="mt-6">
						<InputWithSelectInternationPhoneNumber />
					</div>

					<div class="flex flex-col justify-center items-center mt-14">
						<ButtonPrimary text="Send" class="w-button-lg text-xl py-4" />
					</div>
				</form>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation/TopNavigation.vue'
import InputWithSelectInternationPhoneNumber from '../../../../../components/form/InputWithSelectInternationPhoneNumber.vue'
import ButtonPrimary from '../../../../../components/buttons/ButtonPrimary.vue'

import { ChevronLeftIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		InputWithSelectInternationPhoneNumber,
		ButtonPrimary,
		ChevronLeftIcon
	}
}
</script>