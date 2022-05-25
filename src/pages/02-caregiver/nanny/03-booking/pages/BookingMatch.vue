<template>
	<div class="w-full h-full bg-lilac-100">
		<TopNavigation backgroundColor="bg-lilac-100" :displayBorderBottom="false">
			<template #iconRight><router-link to="/dashboard?tab=2"><XIcon class="w-8 h-8 text-black" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<div class="h-full first-letter:flex flex-col items-center justify-center pt-12 mx-4">
				<div class="flex flex-col">
					<h4 class="font-semibold text-center text-header-four antialiased mb-1">Woohoo!</h4>
					<h4 class="font-semibold text-center text-header-four antialiased">You have matched</h4>
					<p class="font-medium antialiased text-center pt-4">The Sanders have now been added to your chat</p>
				</div>

				<div class="flex flex-col justify-center items-center mx-14 py-24">
					<div class="inline-flex -space-x-3 pb-4">
						<div><img class="rounded-full ring-offset-4 ring-0 h-32 w-32 z-0" src="https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt=""></div>
						<div><img class="rounded-full ring-offset-4 ring-0 h-32 w-32 z-10" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt=""></div>
					</div>
					<p class="font-medium antialiased text-center pt-4">Let the parents know you are ready to start and will be on time for the booking</p>
				</div>

				<div class="flex flex-col justify-center items-center mb-10">
					<div class="grid grid-rows-2 gap-2">
						<div><ButtonSecondary text="Send A Message" class="w-button-xl text-xl py-4" /></div>
						<div><ButtonOutlineDark text="View Profile" class="w-button-xl text-xl border-purple-900 hover:border-lilac-900 focus:border-lilac-500 hover:bg-green-400 focus:bg-green-600 py-4" /></div>
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation-and-tabs/TopNavigation.vue'
import ButtonSecondary from '../../../../../components/buttons/ButtonSecondary.vue'
import ButtonOutlineDark from '../../../../../components/buttons/ButtonOutlineDark.vue'

import { XIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		ButtonSecondary,
		ButtonOutlineDark,
		XIcon
	}
}
</script>