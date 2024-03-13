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
				tab-one-classes="border-transparent text-gray-500 border-b-2 hover:text-gray-700 hover:border-gray-300"
				tab-one-text="Invites"
				:tab-one-is-active="false"
				tab-two-classes="text-purple-900"
				tab-two-text="Matches"
				:tab-two-is-active="true"
			/>
			<div class="flex flex-col mx-4">
				<div class="flex flex-col pt-6 pb-12">
					<h4 class="text-header-four font-semibold antialiased mb-2">
						Your Matches
					</h4>
					<p class="font-light antialiased">
						All childminder bookings go to Portabase. To submit your
						hours &amp; process.
					</p>
				</div>

				<div class="flex flex-col pb-20 mx-4">
					<PortabaseCard
						background-color="bg-lilac-100"
						header="Portabase"
					>
						<template #link
							><AnchorOutlineDark
								text="Go to Portabase"
								classes="w-button-lg text-xl border-purple-900 hover:text-gray-500 hover:border-gray-500 focus:text-purple-600 focus:border-purple-600 py-4"
						/></template>
					</PortabaseCard>
				</div>

				<div class="flex justify-center mb-20">
					<ImageComponent
						src="./assets/svg/logo/portabase.svg"
						class="w-24 h-20"
					/>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation-and-tabs/TopNavigation.vue'
import Tabs from '../../../../../components/navigation-and-tabs/Tabs.vue'
import PortabaseCard from '../../../../../components/cards/portabase-card/PortabaseCard.vue'
import AnchorOutlineDark from '../../../../../components/dom-elements/AnchorOutlineDark.vue'
import ImageComponent from '../../../../../components/dom-elements/ImageComponent.vue'

import { QuestionMarkCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		Tabs,
		PortabaseCard,
		AnchorOutlineDark,
		ImageComponent,
		QuestionMarkCircleIcon,
	},
}
</script>
