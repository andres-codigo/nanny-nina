<template>
	<div class="w-full h-screen">
		<TopNavigation backgroundColor="bg-white" :dropShadow="false">
			<template #iconLeft><router-link to="/dashboard"><ChevronLeftIcon class="w-8 h-8 text-purple-900" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<div class="mt-20 mx-4">
				<form class="w-full" action="#" method="POST">
					<div class="mt-6">
						<h3 class="text-center text-header-three font-bold antialiased">Verify your number</h3>
						<p class="text-center font-light mt-6">A 6 digit code has been sent to</p>
						<p class="text-center text-purple-500 font-light">+31  6844 8440</p>
						<p class="text-center text-sm font-light mt-6">Enter the code we sent to +31 6844 84610 via SMS</p>
					</div>
					<div class="mt-6">
						<div class="flex justify-center space-x-2 slideshow-navigation">
							<input type="number" id="v1" name="v1" maxlength="1" class="dot no-add-remove-on-input text-center text-4xl h-11 w-11 rounded-full border border-purple-500 bg-none focus:outline-none focus:border focus:border-purple-500 focus:ring-0" />
							<input type="number" id="v2" name="v2" maxlength="1" class="dot no-add-remove-on-input text-center text-4xl h-11 w-11 rounded-full border border-red-500 bg-none focus:outline-none focus:border focus:border-red-500 focus:ring-0" />
							<input type="number" id="v3" name="v3" maxlength="1" class="dot no-add-remove-on-input text-center text-4xl h-11 w-11 rounded-full border border-gray-500 bg-none focus:outline-none focus:border focus:border-purple-500 focus:ring-0" />
							<input type="number" id="v4" name="v4" maxlength="1" class="dot no-add-remove-on-input text-center text-4xl h-11 w-11 rounded-full border border-gray-500 bg-none focus:outline-none focus:border focus:border-purple-500 focus:ring-0" />
							<input type="number" id="v5" name="v5" maxlength="1" class="dot no-add-remove-on-input text-center text-4xl h-11 w-11 rounded-full border border-gray-500 bg-none focus:outline-none focus:border focus:border-purple-500 focus:ring-0" />
							<input type="number" id="v6" name="v6" maxlength="1" class="dot no-add-remove-on-input text-center text-4xl h-11 w-11 rounded-full border border-gray-500 bg-none focus:outline-none focus:border focus:border-purple-500 focus:ring-0" />
						</div>
					</div>

					<div class="flex flex-col justify-center items-center mt-14">
						<p class="text-sm  text-center font-light mt-6 mb-10">Didn't get a code? <a href="#" target="_self" class="text-blue-500 anchor-with-underline">Resend code</a></p>
						<ButtonDisabled text="Continue" class="w-button-lg text-xl py-4" />
					</div>
				</form>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation/TopNavigation.vue'
import ButtonDisabled from '../../../../../components/buttons/ButtonDisabled.vue'

import { ChevronLeftIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		ButtonDisabled,
		ChevronLeftIcon
	}
}
</script>