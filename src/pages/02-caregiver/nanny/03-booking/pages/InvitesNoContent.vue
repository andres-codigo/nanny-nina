<template>
	<div class="w-full h-full">
		<TopNavigation text="Booking">
			<template #iconRight><QuestionMarkCircleIcon class="w-6 h-6 text-green-500" aria-hidden="true" /></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col">
				<Tabs
					tabOneClasses="text-purple-900"
					tabOneText="Invites"
					:tabOneIsActive="true"
					tabTwoClasses="border-transparent text-gray-500 border-b-2 hover:text-gray-700 hover:border-gray-300"
					tabTwoText="Matches"
					:tabTwoIsActive="false"
				/>

				<div class="flex flex-row pt-6 mx-4">
					<div class="basis-1/2">
						<h4 class="text-header-four font-semibold antialiased">Your Invites</h4>
					</div>
					<div class="basis-1/2">
						<div class="inline-flex float-right items-center"><Img src="./assets/svg/other/clock-outline.svg" /><a href="#" target="_self" class="anchor-blue anchor-with-underline ml-1">History</a></div>
					</div>
				</div>

				<div class="mt-44 mx-20 font-thin text-center">
					<p class="text-gray-500 mb-32">You have no invites yet. <a href="#" target="_blank" class="anchor-blue anchor-with-underline">Apply to vacancies</a></p>
					<p class="inline-flex items-center text-gray-500"><LightBulbIcon class="w-5 h-5" />Tip: <a href="#" target="_self" class="anchor-blue anchor-with-underline ml-1">Add more pictures</a></p>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation-and-tabs/TopNavigation.vue'
import Tabs from '../../../../../components/navigation-and-tabs/Tabs.vue'
import Img from '../../../../../components/dom-elements/Img.vue'

import { QuestionMarkCircleIcon, ClockIcon, LightBulbIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		Tabs,
		Img,
		QuestionMarkCircleIcon,
		ClockIcon,
		LightBulbIcon
	}
}
</script>