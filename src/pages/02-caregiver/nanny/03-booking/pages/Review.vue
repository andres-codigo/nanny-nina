<template>
	<div class="w-full h-full">
		<TopNavigation backgroundColor="bg-white-500" :dropShadow="false">
			<template #iconRight><router-link to="/dashboard?tab=2"><XIcon class="w-8 h-8 text-purple-900" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col pt-12 px-4">
				<form class="w-full" action="#" method="POST">
					<div class="flex flex-col mb-4">
						<h5 class="inline-flex items-baseline text-header-five font-semibold antialiased mb-2">The Sanders<span class="text-4xl mx-1">4/5</span><Img src="./assets/svg/stars/star-solid-gold.svg" /></h5>
						<p class="font-sm">What did you think of The Sanders?</p>
					</div>

					<div class="mb-10">
						<p class="text-sm text-gray-500 mb-3">Tap a start to rate</p>
						<div class="grid grid-cols-5 gap-2">
							<div>
								<Img src="./assets/svg/stars/star-solid-purple.svg" class="w-12 h-12 mb-6" />
								<span class="inline-flex w-12 text-sm justify-center">V.Bad</span>
							</div>
							<div><Img src="./assets/svg/stars/star-solid-purple.svg" class="w-12 h-12" /></div>
							<div><Img src="./assets/svg/stars/star-outline-purple.svg" class="w-12 h-12" /></div>
							<div><Img src="./assets/svg/stars/star-outline-purple.svg" class="w-12 h-12" /></div>
							<div>
								<Img src="./assets/svg/stars/star-outline-purple.svg" class="w-12 h-12 mb-6" />
								<span class="inline-flex w-12 text-sm justify-center">V.Good</span>
							</div>
						</div>
					</div>

					<div class="mb-20">
						<label for="review" class="sr-only">Leave a review</label>
						<p	class="text-sm font-light text-gray-500">Leave a review</p>
						<div class="mt-8">
							<Textarea name="review" id="review" />
						</div>
					</div>

					<div class="flex justify-center mb-20">
						<ButtonPrimary text="Submit" class="w-button-sm text-xl py-4" />
					</div>
				</form>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation-and-tabs/TopNavigation.vue'
import Img from '../../../../../components/dom-elements/Img.vue'
import Textarea from '../../../../../components/form/Textarea.vue'
import ButtonPrimary from '../../../../../components/buttons/ButtonPrimary.vue'

import { XIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		Img,
		Textarea,
		ButtonPrimary,
		XIcon
	}
}
</script>