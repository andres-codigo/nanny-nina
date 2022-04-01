<template>
	<div class="w-full h-full bg-purple-500">
		<TopNavigation :hideHeader="true">
			<template #iconLeft><router-link to="/dashboard"><ChevronLeftIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col mx-4 mb-10">
				<div class="mt-16 mx-9">
					<h2 class="text-header-two font-medium text-green-500 text-center antialiased mb-6">Congrats!<br /> You are all set</h2>
					<p class="font-thin text-white text-center">You can now apply to jobs and receive booking requests in the bookings page</p>
				</div>
				<div class="flex items-center justify-center">
					<!--
						Image component for svg here
						<Image src="*.svg" />
						* remove background color in div as visual placeholder
					-->
				</div>
				<div>
					<div class="flex flex-col justify-center items-center mt-96">
						<ButtonSecondary text="Continue to apply" class="w-button-lg text-xl py-4" />
					</div>
					<p class="mt-8 font-medium text-white text-center"><a href="#" class="anchor-with-underline">Learn more about being a Nanny</a></p>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../../components/navigation/TopNavigation.vue'
import ButtonSecondary from '../../../../../../components/buttons/ButtonSecondary.vue'

import { ChevronLeftIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		ButtonSecondary,
		ChevronLeftIcon
	}
}
</script>