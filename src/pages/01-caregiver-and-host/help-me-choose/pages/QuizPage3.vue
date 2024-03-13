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
						src="./assets/svg/help-me-choose/hmc-03.svg"
						class="w-full"
					/>
					<p class="text-sm text-gray-500 mt-10">Question 2</p>
					<h5 class="text-header-five font-semibold antialiased mt-2">
						How soon do you need care?
					</h5>
					<div class="mt-4 items-center -m-1">
						<BadgeQuiz text="Just this one time" />
						<BadgeQuiz text="Occasionally" />
						<BadgeQuiz text="Several times in a week" />
						<BadgeQuiz
							:badge-selected="true"
							text="On flexible/repeating days per week"
						/>
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../components/navigation-and-tabs/TopNavigation.vue'
import ImageComponent from '../../../../components/dom-elements/ImageComponent.vue'
import BadgeQuiz from '../../../../components/badge/BadgeQuiz.vue'

import { ChevronLeftIcon, XIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		ImageComponent,
		BadgeQuiz,
		ChevronLeftIcon,
		XIcon,
	},
}
</script>
