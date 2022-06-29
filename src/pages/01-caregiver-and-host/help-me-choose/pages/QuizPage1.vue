<template>
	<div class="w-full h-full">
		<TopNavigation backgroundColor="bg-white" :displayBorderBottom="false">
			<template #iconRight><router-link to="/dashboard?tab=1"><XIcon class="w-8 h-8 text-purple-900" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col justify-center pt-4 mx-4">
				<div class="pb-20">
					<Img src="./assets/svg/help-me-choose/hmc-01.svg" class="w-full" />
					<h5 class="text-header-five font-semibold antialiased mt-10">Need help deciding what childcare option is perfect for you?</h5>
					<p class="mt-2">Let's  figure it out together! Ready? This will only take a minute</p>
				</div>

				<div class="flex flex-col justify-center items-center">
					<ButtonPrimary text="Take the quiz >" class="w-button-sm text-xl min-h-[42px] py-2" />
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../components/navigation-and-tabs/TopNavigation.vue'
import Img from '../../../../components/dom-elements/Img.vue'
import ButtonPrimary from '../../../../components/buttons/ButtonPrimary.vue'

import { XIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		Img,
		XIcon,
		ButtonPrimary
	}
}
</script>