<template>
	<div class="w-full">
		<TopNavigation background-color="bg-white">
			<template #iconLeft
				><router-link to="/dashboard?tab=2"
					><ChevronLeftIcon
						class="w-8 h-8 text-purple-900"
						aria-hidden="true" /></router-link
			></template>
		</TopNavigation>
		<main>
			<div class="h-full pt-12 mx-4">
				<div class="mb-10">
					<h5 class="text-header-five font-semibold antialiased mb-2">
						Become an au pair and experience your best adventure
						yet!
					</h5>
					<p class="font-light">
						Become an Au Pair 1 of 5 our different destinations.
					</p>
					<p class="font-light">Start your dream experience now.</p>
				</div>

				<div class="grid grid-rows-3 gap-4 mb-8">
					<div>
						<CountryCard
							src="https://images.unsplash.com/photo-1517736996303-4eec4a66bb17"
							country="Netherlands"
							content="Apply to Netherlands"
						/>
					</div>
					<div>
						<CountryCard
							src="https://images.unsplash.com/photo-1549144511-f099e773c147"
							country="Paris"
							content="Apply to Paris"
						/>
					</div>
					<div>
						<CountryCard
							src="https://images.unsplash.com/photo-1556918380-e1eea4592bb3"
							country="Zurich"
							content="Apply to Zurich"
						/>
					</div>
					<div>
						<CountryCard
							src="https://images.unsplash.com/photo-1529655683826-aba9b3e77383"
							country="London"
							content="Apply to London"
						/>
					</div>
				</div>

				<div class="flex justify-center my-10">
					<a
						href="#"
						target="_self"
						class="text-center font-thin anchor-blue anchor-with-underline"
						>Not sure where to go? ></a
					>
				</div>

				<div class="mb-10">
					<h3 class="text-header-five font-semibold antialiased mb-2">
						We are social!
					</h3>
					<JoinCard
						background-color="bg-purple-500"
						text-color-header="text-green-500"
						header="Join the Au pair community"
						content="Meet other Au Pairs, learn & share experiences"
					>
						<template #link
							><AnchorSecondary
								text="Join"
								classes="w-button-xl text-xl py-4"
						/></template>
					</JoinCard>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../../components/navigation-and-tabs/TopNavigation.vue'
import CountryCard from '../../../../../../components/cards/country-card/CountryCard.vue'
import JoinCard from '../../../../../../components/cards/join-card/JoinCard.vue'
import AnchorSecondary from '../../../../../../components/dom-elements/AnchorSecondary.vue'

import { ChevronLeftIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		CountryCard,
		JoinCard,
		AnchorSecondary,
		ChevronLeftIcon,
	},
}
</script>
