<template>
	<div class="w-full bg-purple-500">
		<TopNavigation backgroundColor="bg-purple-500" :dropShadow="false">
			<template #iconRight><router-link to="/dashboard"><XIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<div class="h-screen flex flex-col items-center justify-center mx-4">
				<div class="grid grid-rows-3 grid-flow-col gap-0">

					<div>
						<div class="grid grid-rows-2 gap-0">
							<div><h3 class="font-semibold text-center text-header-three text-green-500 antialiased mb-6">Ooops!</h3></div>
							<div><p class="text-white text-center font-light">You have to place a new request to contact a nanny</p></div>
						</div>
					</div>

					<div class="flex flex-col justify-center items-center">
						<!--
							Image svg here
							<img src="*.svg" />
							* remove background color in div as visual placeholder
						-->
					</div>

					<div class="flex flex-col justify-center items-center mt-20">
						<div class="grid grid-rows-2 gap-2">
							<div><AnchorSecondary text="Request Nanny" class="w-button-lg text-xl py-4" /></div>
							<div class="text-center">
								<a href="#" target="_self" class="inline-flex anchor-with-underline text-white font-medium mt-4">Learn more about Nannies</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation-and-tabs/TopNavigation.vue'
import AnchorSecondary from '../../../../../components/dom-elements/AnchorSecondary.vue'

import { XIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		AnchorSecondary,
		XIcon
	}
}
</script>