<template>
	<div class="w-full h-full bg-purple-500">
		<TopNavigation :displayBorderBottom="false">
			<template #iconRight><router-link to="/dashboard"><XIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<div class="h-full first-letter:flex flex-col items-center justify-center pt-12 mx-4">
				<div class="flex flex-col">
					<h4 class="font-semibold text-center text-header-four text-green-500 antialiased mb-1">Header Four</h4>
					<p class="font-medium antialiased text-white text-center pt-4">Paragraph</p>
				</div>

				<div class="flex flex-col justify-center items-center mb-10">
					<div class="grid grid-rows-2 gap-2">
						<div><ButtonSecondary text="Button Secondary" class="w-button-xl text-xl py-4" /></div>
						<div><ButtonOutlineLight text="Button Outline" class="w-button-xl text-xl py-4 text-white border-white hover:border-lilac-400 focus:border-green-500" /></div>
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../components/navigation-and-tabs/TopNavigation.vue'
import ButtonSecondary from '../../components/buttons/ButtonSecondary.vue'
import ButtonOutlineLight from '../../components/buttons/ButtonOutlineLight.vue'

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