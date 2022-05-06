<template>
	<div class="w-full h-full bg-purple-500">
		<TopNavigation backgroundColor="bg-white-500" :dropShadow="false">
			<template #iconRight><router-link to="/dashboard"><XIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<div class="h-full first-letter:flex flex-col items-center justify-center pt-12 mx-4">
				<div class="flex flex-col pb-8">
					<h2 class="font-semibold text-center text-header-two text-green-500 antialiased">Yay!</h2>
					<h2 class="font-semibold text-center text-header-two text-green-500 antialiased mx-10">You have matched with The Sanders</h2>
					<p class="font-medium antialiased text-white text-center pt-4 mx-20">The Sanders have now been added to your chat</p>
				</div>

				<div class="flex flex-col justify-center items-center pb-12">
					<div class="inline-flex -space-x-3">
						<div><img class="rounded-full ring-offset-4 ring-0 h-32 w-32 z-0" src="https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt=""></div>
						<div><img class="rounded-full ring-offset-4 ring-0 h-32 w-32 z-10" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt=""></div>
					</div>
				</div>

				<div class="flex flex-col justify-center items-center mt-24 mb-10">
					<p class="font-medium antialiased text-white text-center pb-10 mx-8	">View and update your work hours under Matches in your booking page</p>
					<div class="grid grid-rows-2 gap-2">
						<div><ButtonSecondary text="Contact The Sanders" class="w-button-xl text-xl py-4" /></div>
						<div><ButtonOutlineLight text="Go to Matches" class="w-button-xl text-xl py-4 text-white border-white hover:border-lilac-400 focus:border-green-500" /></div>
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation-and-tabs/TopNavigation.vue'
import ButtonSecondary from '../../../../../components/buttons/ButtonSecondary.vue'
import ButtonOutlineLight from '../../../../../components/buttons/ButtonOutlineLight.vue'

import { XIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		ButtonSecondary,
		ButtonOutlineLight,
		XIcon
	}
}
</script>