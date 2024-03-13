<template>
	<div class="w-full h-full">
		<TopNavigation text="Payment">
			<template #iconLeft
				><router-link to="'/dashboard?tab=1"
					><ChevronLeftIcon
						class="w-8 h-8 text-white"
						aria-hidden="true" /></router-link
			></template>
			<template #iconRight
				><QuestionMarkCircleIcon
					class="w-6 h-6 text-green-500"
					aria-hidden="true"
			/></template>
		</TopNavigation>
		<main>
			<Tabs
				tab-one-classes="border-transparent text-gray-500 border-b-2 hover:text-gray-700 hover:border-gray-300"
				tab-one-text="Account"
				:tab-one-is-active="false"
				tab-two-classes="text-purple-900"
				tab-two-text="Earnings"
				:tab-two-is-active="true"
				:display-third-tab="true"
				tab-three-classes="border-transparent text-gray-500 border-b-2 hover:text-gray-700 hover:border-gray-300"
				tab-three-text="History"
				:tab-three-is-active="false"
			/>

			<div class="flex flex-col mx-4">
				<div class="flex flex-col pt-6">
					<h4 class="text-header-four font-semibold antialiased mb-2">
						Total Earnings
					</h4>
				</div>

				<div class="flex flex-col">
					<div
						class="inline-flex justify-center w-28 h-16 rounded-md bg-lilac-50 text-purple-500 text-5xl leading-none p-4 my-8"
					>
						&euro;0.00
					</div>

					<p class="font-thin">
						You receive your earnings 24hrs after the host/parent
						pay you
					</p>

					<hr class="border-1 border-gray-50 my-6" />

					<div class="mb-10">
						<h4 class="text-header-four mb-2">Earn More</h4>
						<ul role="list">
							<ChecklistItemNoBorder />
							<ChecklistItemNoBorder
								left-svg="./assets/svg/other/card-giftcard.svg"
								header="Available Promotions"
								sub-header="Discover locations you can earn more"
							/>
						</ul>
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation-and-tabs/TopNavigation.vue'
import Tabs from '../../../../../components/navigation-and-tabs/Tabs.vue'
import ChecklistItemNoBorder from '../../../../../components/checklist/ChecklistItemNoBorder.vue'

import { ChevronLeftIcon, QuestionMarkCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		Tabs,
		ChecklistItemNoBorder,
		ChevronLeftIcon,
		QuestionMarkCircleIcon,
	},
}
</script>
