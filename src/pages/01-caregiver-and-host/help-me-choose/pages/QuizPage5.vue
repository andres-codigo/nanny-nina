<template>
	<div class="w-full h-full">
		<TopNavigation
			background-color="bg-white"
			:display-border-bottom="false"
		>
			<template #iconLeft
				><router-link to="/dashboard?tab=1"
					><ChevronLeftIcon
						class="w-8 h-8 text-purple-900"
						aria-hidden="true" /></router-link
			></template>
			<template #iconRight
				><router-link to="/dashboard?tab=1"
					><XIcon
						class="w-8 h-8 text-purple-900"
						aria-hidden="true" /></router-link
			></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col justify-center pt-4 mx-4">
				<div class="pb-20">
					<ImageComponent
						src="./assets/svg/help-me-choose/hmc-05.svg"
						class="w-full"
					/>
					<p class="text-sm text-gray-500 mt-10">Question 4</p>
					<h5 class="text-header-five font-semibold antialiased mt-2">
						Do you have a spare room?
					</h5>

					<div class="flex flex-row gap-2 py-4">
						<div>
							<ButtonPrimary
								text="Yes"
								classes="w-button-xs py-3"
							/>
						</div>
						<div>
							<ButtonGhost text="No" classes="w-button-xs py-3" />
						</div>
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../components/navigation-and-tabs/TopNavigation.vue'
import ImageComponent from '../../../../components/dom-elements/ImageComponent.vue'
import ButtonPrimary from '../../../../components/buttons/ButtonPrimary.vue'
import ButtonGhost from '../../../../components/buttons/ButtonOutlineDark.vue'

import { ChevronLeftIcon, XIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		ImageComponent,
		ButtonGhost,
		ButtonPrimary,
		ChevronLeftIcon,
		XIcon,
	},
}
</script>
