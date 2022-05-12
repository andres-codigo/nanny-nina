<template>
	<div class="w-full h-full">
		<TopNavigation text="Booking">
			<template #iconRight><QuestionMarkCircleIcon class="w-6 h-6 text-green-500" aria-hidden="true" /></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col mx-4">
				<Tabs
					tabOneClasses="text-purple-900"
					tabOneText="Responses"
					:tabOneIsActive="true"
					tabTwoClasses="border-transparent text-gray-500 border-b-2 hover:text-gray-700 hover:border-gray-300"
					tabTwoText="Matches"
					:tabTwoIsActive="false"
				/>

				<div class="flex flex-row pt-6 mx-4 mb-4">
					<div class="basis-1/2">
						<h4 class="text-header-four font-semibold antialiased">Your Responses</h4>
					</div>
					<div class="basis-1/2">
						<div class="inline-flex float-right items-center"><Img src="./assets/svg/other/clock-outline.svg" /><a href="#" target="_self" class="anchor-blue anchor-with-underline ml-1">History</a></div>
					</div>
				</div>

				<div class="flex flex-col pb-8">
					<ResponsesCard
						class="text-purple-900 bg-lilac-50 hover:bg-lilac-100 focus:bg-lilac-200"
						badgeClass="bg-lilac-100 text-purple-900"
						badgeText="One-time"
						title="After School Nanny Needed...">
						<template #details><p class="text-xs text-purple-900 pt-1">Shared 5mins ago > 20+ responses</p></template>
						<template #chevron><ChevronRightIcon class="absolute right-2 top-28 w-8 h-8" aria-hidden="true" /></template>
					</ResponsesCard>

					<ResponsesCard
						class="text-purple-900 bg-green-500 hover:bg-green-400 focus:bg-green-600"
						badgeClass="bg-green-50 text-purple-900"
						badgeText="Recurring"
						title="Nanny needed every week..">
						<template #details><p class="text-xs text-purple-900 pt-1">Shared 5mins ago > 20+ responses</p></template>
						<template #chevron><ChevronRightIcon class="absolute right-2 top-28 w-8 h-8" aria-hidden="true" /></template>
					</ResponsesCard>

					<ResponsesCard
						class="text-white bg-purple-500 hover:bg-purple-300 focus:bg-purple-600"
						badgeClass="bg-lilac-100 text-purple-900"
						badgeText="Event"
						badgeSvg="./assets/svg/other/event.svg"
						title="Birthday party in Amsteveen">
						<template #details><p class="text-xs text-white pt-1">Shared 5mins ago > 20+ responses</p></template>
						<template #chevron><ChevronRightIcon class="absolute right-2 top-28 w-8 h-8" aria-hidden="true" /></template>
					</ResponsesCard>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation-and-tabs/TopNavigation.vue'
import Tabs from '../../../../../components/navigation-and-tabs/Tabs.vue'
import Img from '../../../../../components/dom-elements/Img.vue'
import ResponsesCard from '../../../../../components/cards/responses-card/ResponsesCard.vue'

import { QuestionMarkCircleIcon, ChevronRightIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		Tabs,
		Img,
		ResponsesCard,
		QuestionMarkCircleIcon,
		ChevronRightIcon
	}
}
</script>