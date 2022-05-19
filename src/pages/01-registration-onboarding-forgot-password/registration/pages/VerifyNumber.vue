<template>
	<div class="w-full h-screen">
		<TopNavigation backgroundColor="bg-white" :displayBorderBottom="false">
			<template #iconLeft><router-link to="/dashboard?tab=1"><ChevronLeftIcon class="w-8 h-8 text-purple-900" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<div class="mt-20 mx-4">
				<form class="w-full" action="#" method="POST">
					<div class="mt-6">
						<h3 class="text-center text-header-three font-bold antialiased">Verify your number</h3>
						<p class="text-center font-light mt-6">We would like to confirm your contact detail</p>
						<p class="text-center font-light">We will send you an SMS with a verification code</p>
					</div>

					<div class="mt-6">
						<InputWithSelectInternationPhoneNumber :showButton="true" />
					</div>

					<div class="mt-6">
						<InputField text="Enter code" />
					</div>

					<div class="flex flex-col justify-center items-center mt-14">
						<ButtonPrimary text="Verify and Login" class="w-button-lg text-xl py-4" />
						<p class="text-sm  text-center font-light mt-6 mb-10">Didn't get a code? <a href="#" target="_self" class="anchor-blue anchor-with-underline">Resend code</a></p>
					</div>
				</form>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../components/navigation-and-tabs/TopNavigation.vue'
import InputWithSelectInternationPhoneNumber from '../../../../components/form/InputWithSelectInternationPhoneNumber.vue'
import InputField from '../../../../components/form/InputField.vue'
import ButtonPrimary from '../../../../components/buttons/ButtonPrimary.vue'

import { ChevronLeftIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		InputWithSelectInternationPhoneNumber,
		InputField,
		ButtonPrimary,
		ChevronLeftIcon
	}
}
</script>