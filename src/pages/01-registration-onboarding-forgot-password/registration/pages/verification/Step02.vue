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
						<p class="text-center font-light mt-6">A 6 digit code has been sent to</p>
						<p class="text-center text-lilac-500 font-light">+31  6844 8440</p>
						<p class="text-center text-sm font-light mt-6">Enter the code we sent to +31 6844 84610 via SMS</p>
					</div>
					<div class="mt-6">
						<div class="flex justify-center space-x-2 slideshow-navigation">
							<span class="dot cursor-pointer h-11 w-11 my-0 inline rounded-full border border-lilac-500 bg-none"></span>
							<span class="dot cursor-pointer h-11 w-11 my-0 inline rounded-full border border-red-500 bg-none"></span>
							<span class="dot cursor-pointer h-11 w-11 my-0 inline rounded-full border border-gray-500 bg-none"></span>
							<span class="dot cursor-pointer h-11 w-11 my-0 inline rounded-full border border-gray-500 bg-none"></span>
							<span class="dot cursor-pointer h-11 w-11 my-0 inline rounded-full border border-gray-500 bg-none"></span>
							<span class="dot cursor-pointer h-11 w-11 my-0 inline rounded-full border border-gray-500 bg-none"></span>
						</div>
					</div>

					<div class="flex flex-col justify-center items-center mt-14">
						<p class="text-sm  text-center font-light mt-6 mb-10">Didn't get a code? <a href="#" class="text-blue-500 anchor-with-underline">Resend code</a></p>
						<ButtonDisabled text="Continue" class="w-button-lg py-4" />
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