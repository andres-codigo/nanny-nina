<template>
	<div class="w-full">
		<TopNavigation backgroundColor="bg-white">
			<template #iconLeft><router-link to="/dashboard"><ChevronLeftIcon class="w-8 h-8 text-purple-900" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<div class="h-full flex flex-col pt-12 mx-4">
				<div class="mb-10">
					<h5 class="text-left text-header-five font-semibold antialiased mb-2">Become an au pair and experience your best adventure yet!</h5>
					<p class="font-light">Become an Au Pair 1 of 5 our different destinations.</p>
					<p class="font-light">Start your dream experience now.</p>
				</div>

				<div class="grid grid-rows-3 gap-4 mb-8">
					<div><CountryCard tempBackgroundColor="bg-purple-100" country="Netherlands" content="Apply to Netherlands" /></div>
					<div><CountryCard tempBackgroundColor="bg-purple-100" country="Paris" content="Apply to Paris" /></div>
					<div><CountryCard tempBackgroundColor="bg-purple-100" country="Zurich" content="Apply to Zurich" /></div>
				</div>

				<div class="flex justify-center">
					<div class="flex-none"><a href="#" target="_self" class="text-center text-blue-500 font-thin anchor-with-underline">Not sure where to go?</a></div>
					<div class="inline-flex items-center pl-1"><ChevronRightIcon class="w-5 h-5 text-blue-500" /></div>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation-and-tabs/TopNavigation.vue'
import HomeTemplate from '../../../../00-duplicate-pages/home/HomeTemplate.vue'
import UserProgress from '../../../../../components/progress/UserProgress.vue'
import CountryCard from '../../../../../components/cards/country-card/CountryCard.vue'

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		HomeTemplate,
		UserProgress,
		CountryCard,
		ChevronLeftIcon,
		ChevronRightIcon
	}
}
</script>