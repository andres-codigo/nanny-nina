<template>
	<div class="w-full h-full">
		<TopNavigation backgroundColor="bg-white" :displayBorderBottom="false">
			<template #iconLeft><router-link to="/dashboard?tab=1"><ChevronLeftIcon class="w-8 h-8 text-purple-900" aria-hidden="true" /></router-link></template>
			<template #iconRight><router-link to="/dashboard?tab=1"><XIcon class="w-8 h-8 text-purple-900" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col justify-center pt-4 mx-4">
				<div class="pb-20">
					<Img src="./assets/svg/help-me-choose/hmc-04.svg" class="w-full" />
					<p class="text-sm text-gray-500 mt-10">Question 3</p>
					<h5 class="text-header-five font-semibold antialiased mt-2">How many hours do you need care?</h5>
					<div class="mt-4 items-center -m-1">
						<BadgeQuiz :badgeSelected="true" text="Full days" />
						<BadgeQuiz text="Less than 3 half days/wk" />
						<BadgeQuiz text="3 or more half days/wk " />
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../components/navigation-and-tabs/TopNavigation.vue'
import Img from '../../../../components/dom-elements/Img.vue'
import BadgeQuiz from '../../../../components/badge/BadgeQuiz.vue'

import { ChevronLeftIcon, XIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		Img,
		BadgeQuiz,
		ChevronLeftIcon,
		XIcon,
	}
}
</script>