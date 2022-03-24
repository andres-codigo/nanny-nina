<template>
	<div class="w-full h-full bg-lilac-500">
		<TopNavigation :hideHeader="true">
			<template #iconLeft><router-link to="/dashboard"><ChevronLeftIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col mx-4 mb-10">
				<div class="mt-16 mx-9">
					<h2 class="mb-6 text-header-two font-medium text-green-500 text-center">Congrats!<br /> You are all set</h2>
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
					<div class="mt-96">
						<ButtonSecondary text="Go to Explore" />
					</div>
					<p class="mt-8 font-thin text-white text-center"><a href="#" class="anchor-with-underline text-green-200">Learn more about being a Nanny</a></p>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation/TopNavigation.vue'
import ButtonSecondary from '../../../../../components/buttons/ButtonSecondary.vue'

import { ChevronLeftIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		ButtonSecondary,
		ChevronLeftIcon
	}
}
</script>