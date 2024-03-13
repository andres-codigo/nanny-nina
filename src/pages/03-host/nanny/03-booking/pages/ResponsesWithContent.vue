<template>
	<div class="w-full h-full">
		<TopNavigation text="Booking">
			<template #iconRight
				><QuestionMarkCircleIcon
					class="w-6 h-6 text-green-500"
					aria-hidden="true"
			/></template>
		</TopNavigation>
		<main>
			<Tabs
				tab-one-classes="text-purple-900"
				tab-one-text="Responses"
				:tab-one-is-active="true"
				tab-two-classes="border-transparent text-gray-500 border-b-2 hover:text-gray-700 hover:border-gray-300"
				tab-two-text="Matches"
				:tab-two-is-active="false"
				:display-third-tab="true"
				tab-three-classes="border-transparent text-gray-500 border-b-2 hover:text-gray-700 hover:border-gray-300"
				tab-three-text="History"
				:tab-three-is-active="false"
			/>

			<div class="flex flex-col mx-4">
				<div class="pt-6 mx-4 mb-4">
					<h4 class="text-header-four font-semibold antialiased mb-2">
						Your Responses
					</h4>
					<p class="font-thin">
						We are currently searching for new candidates for you.
						Choose booking type to view responses
					</p>
				</div>

				<div class="flex flex-col pb-8">
					<ResponsesCard
						classes="text-purple-900 bg-lilac-50 hover:bg-lilac-100 focus:bg-lilac-200"
						badge-class="bg-lilac-100 text-purple-900"
						badge-text="One-time nanny"
						title="After School Nanny Needed..."
					>
						<template #details
							><p
								class="text-xs text-purple-900 pt-1 leading-none"
							>
								Shared 5mins ago > 20+ responses
							</p></template
						>
						<template #chevron
							><ChevronRightIcon
								class="absolute right-4 top-28 w-8 h-8"
								aria-hidden="true"
						/></template>
					</ResponsesCard>

					<ResponsesCard
						classes="text-purple-900 bg-green-500 hover:bg-green-400 focus:bg-green-600"
						badge-class="bg-green-50 text-purple-900"
						badge-text="Recurring nanny"
						title="Nanny needed every week.."
					>
						<template #details
							><p
								class="text-xs text-purple-900 pt-1 leading-none"
							>
								Shared 5mins ago > 20+ responses
							</p></template
						>
						<template #chevron
							><ChevronRightIcon
								class="absolute right-4 top-28 w-8 h-8"
								aria-hidden="true"
						/></template>
					</ResponsesCard>

					<ResponsesCard
						classes="text-white bg-purple-500 hover:bg-purple-300 focus:bg-purple-600"
						badge-class="bg-lilac-100 text-purple-900"
						badge-text="Event nanny"
						badge-svg="./assets/svg/badges/event.svg"
						title="Birthday party in Amsteveen"
					>
						<template #details
							><p class="text-xs text-white pt-1">
								Shared 5mins ago > 20+ responses
							</p></template
						>
						<template #chevron
							><ChevronRightIcon
								class="absolute right-4 top-28 w-8 h-8"
								aria-hidden="true"
						/></template>
					</ResponsesCard>
				</div>

				<div class="mx-8 text-sm text-center">
					<p>No longer interested?</p>
					<p>
						Please
						<a
							href="#"
							target="_self"
							class="anchor-blue anchor-with-underline"
							>contact support</a
						>, so we define the best next step together
					</p>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation-and-tabs/TopNavigation.vue'
import Tabs from '../../../../../components/navigation-and-tabs/Tabs.vue'
import ResponsesCard from '../../../../../components/cards/responses-card/ResponsesCard.vue'

import { QuestionMarkCircleIcon, ChevronRightIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		Tabs,
		ResponsesCard,
		QuestionMarkCircleIcon,
		ChevronRightIcon,
	},
}
</script>
