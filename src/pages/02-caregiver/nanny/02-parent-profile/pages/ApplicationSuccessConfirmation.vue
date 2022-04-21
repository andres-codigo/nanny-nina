<template>
	<div class="bg-purple-500">
		<TopNavigation :hideHeader="true">
			<template #iconLeft><router-link to="/dashboard"><ChevronLeftIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<div class="h-full flex flex-col mx-4 mb-10">
				<div class="mt-16 mx-12">
					<h2 class="text-header-two font-medium text-green-500 text-center antialiased mb-6">Congrats!<br /> You have applied to the Sanders!</h2>
				</div>

				<div class="flex items-center justify-center">
					<!--
						Image svg here
						<img src="*.svg" />
						* remove background color in div as visual placeholder
					-->
				</div>

				<div class="mt-80 mb-20 mx-12">
					<p class="font-thin text-white text-center py-12">You can now apply to jobs and receive booking requests in the bookings page</p>

					<div class="flex items-center justify-center">
						<ButtonSecondary text="Continue to explore" class="w-button-lg text-xl py-4" />
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation/TopNavigation.vue'
import ButtonSecondary from '../../../../../components/form/buttons/ButtonSecondary.vue'
import ButtonGhost from '../../../../../components/form/buttons/ButtonGhost.vue'

import { ChevronLeftIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		ButtonSecondary,
		ButtonGhost,
		ChevronLeftIcon
	}
}
</script>