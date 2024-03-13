<template>
	<div class="w-full bg-lilac-100">
		<TopNavigation
			background-color="bg-lilac-100"
			:display-border-bottom="false"
		>
			<template #iconRight
				><router-link to="/dashboard?tab=3"
					><XIcon
						class="w-8 h-8 text-black"
						aria-hidden="true" /></router-link
			></template>
		</TopNavigation>
		<main>
			<div
				class="h-screen flex flex-col items-center justify-center mx-4"
			>
				<div class="grid grid-rows-3 grid-flow-col gap-0">
					<div>
						<div class="grid grid-rows-2 gap-0">
							<div>
								<h3
									class="font-semibold text-center text-header-three antialiased mb-6"
								>
									Ooops!
								</h3>
							</div>
							<div>
								<p class="text-center font-light mx-16">
									You have to place a new request to contact a
									nanny
								</p>
							</div>
						</div>
					</div>

					<div class="flex flex-col justify-center items-center">
						<!--
							Image svg here
							<img src="*.svg" />
							* remove background color in div as visual placeholder
						-->
						<ImageComponent
							src="./assets/svg/illustrations/jigsaw-people-green.svg"
						/>
					</div>

					<div
						class="flex flex-col justify-center items-center mt-20"
					>
						<div class="grid grid-rows-2 gap-2">
							<div>
								<AnchorSecondary
									text="Request Nanny"
									classes="w-button-lg text-xl py-4"
								/>
							</div>
							<div class="text-center mt-4">
								<AnchorTextOnly
									text="Learn more about Nannies >"
									text-color-class="anchor-black"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../../components/navigation-and-tabs/TopNavigation.vue'
import ImageComponent from '../../../../../../components/dom-elements/ImageComponent.vue'
import AnchorSecondary from '../../../../../../components/dom-elements/AnchorSecondary.vue'
import AnchorTextOnly from '../../../../../../components/dom-elements/AnchorTextOnly.vue'

import { XIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		ImageComponent,
		AnchorSecondary,
		AnchorTextOnly,
		XIcon,
	},
}
</script>
