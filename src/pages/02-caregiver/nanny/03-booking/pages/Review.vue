<template>
	<div class="w-full h-full">
		<TopNavigation :display-border-bottom="false">
			<template #iconRight
				><router-link to="/dashboard?tab=2"
					><XIcon
						class="w-8 h-8 text-white"
						aria-hidden="true" /></router-link
			></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col pt-12 px-4">
				<form class="w-full" action="#" method="POST">
					<div class="flex flex-col mb-4">
						<h5
							class="inline-flex items-baseline text-header-five font-semibold antialiased mb-2"
						>
							Sanders<span class="mx-2">4/5</span
							><ImageComponent
								src="./assets/svg/stars/star-solid-gold.svg"
							/>
						</h5>
						<p class="font-sm font-light">
							What did you think of The Sanders?
						</p>
					</div>

					<div class="mb-10">
						<p class="text-sm text-gray-500 mb-3">
							Tap a start to rate
						</p>
						<div class="grid grid-cols-5 gap-2">
							<div>
								<ImageComponent
									src="./assets/svg/stars/star-solid-purple.svg"
									class="w-12 h-12 mb-6"
								/>
								<span
									class="inline-flex w-12 text-sm justify-center"
									>V.Bad</span
								>
							</div>
							<div>
								<ImageComponent
									src="./assets/svg/stars/star-solid-purple.svg"
									class="w-12 h-12"
								/>
							</div>
							<div>
								<ImageComponent
									src="./assets/svg/stars/star-outline-purple.svg"
									class="w-12 h-12"
								/>
							</div>
							<div>
								<ImageComponent
									src="./assets/svg/stars/star-outline-purple.svg"
									class="w-12 h-12"
								/>
							</div>
							<div>
								<ImageComponent
									src="./assets/svg/stars/star-outline-purple.svg"
									class="w-12 h-12 mb-6"
								/>
								<span
									class="inline-flex w-12 text-sm justify-center"
									>V.Good</span
								>
							</div>
						</div>
					</div>

					<div class="mb-20">
						<label for="review" class="sr-only"
							>Leave a review</label
						>
						<p class="text-sm font-light text-gray-500">
							Leave a review
						</p>
						<div class="mt-8">
							<TextareaComponent id="review" name="review" />
						</div>
					</div>

					<div class="flex justify-center mb-20">
						<ButtonPrimary
							text="Submit"
							classes="w-button-sm text-xl py-4"
						/>
					</div>
				</form>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation-and-tabs/TopNavigation.vue'
import ImageComponent from '../../../../../components/dom-elements/ImageComponent.vue'
import TextareaComponent from '../../../../../components/form/TextareaComponent.vue'
import ButtonPrimary from '../../../../../components/buttons/ButtonPrimary.vue'

import { XIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		ImageComponent,
		TextareaComponent,
		ButtonPrimary,
		XIcon,
	},
}
</script>
