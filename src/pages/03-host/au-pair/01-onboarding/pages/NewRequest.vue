<template>
	<div class="w-full h-full">
		<TopNavigation backgroundColor="bg-white-500" :displayBorderBottom="false">
			<template #iconRight><router-link to="/dashboard?tab=3"><XIcon class="w-8 h-8 text-purple-900" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col justify-center pt-12 mx-4">
				<h5 class="text-header-five font-semibold antialiased mb-4">Select your plan</h5>
				<div class="inline-flex pb-8">
					<LinkCard :hasPrice="true" :showPlaceholderSVG="true" imageSrc="./assets/svg/illustrations/house-with-family-128-x-105.svg" to="dashboard" class="text-white bg-purple-500 hover:bg-purple-300 focus:bg-purple-600" title="Full Service">
						<template #details><p class="text-white pt-2">Nanny Nina finds and screens an au pair specially for you</p></template>
						<template #price>&euro;2,998</template>
					</LinkCard>
				</div>
				<div class="inline-flex pb-8">
					<LinkCard :hasPrice="true" :showPlaceholderSVG="true" imageSrc="./assets/svg/illustrations/house-with-family-128-x-105.svg" to="dashboard" class="text-purple-900 bg-green-500 hover:bg-green-400 focus:bg-green-600" title="Self Match" >
						<template #details><p class="pt-2">I already found an au pair, Nanny Nina helps me with the administration.</p></template>
						<template #price>&euro;999</template>
					</LinkCard>
				</div>

				<div class="flex flex-col justify-center items-center my-4">
					<a href="#" target="_self" class="anchor-black anchor-with-underline text-center font-medium">Learn more about a Host ></a>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation-and-tabs/TopNavigation.vue'
import LinkCard from '../../../../../components/cards/link-card/LinkCard.vue'

import { XIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		LinkCard,
		XIcon
	}
}
</script>