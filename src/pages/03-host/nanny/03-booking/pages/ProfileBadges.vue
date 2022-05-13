<template>
	<div class="w-full h-full">
		<TopNavigation backgroundColor="bg-white-500" :dropShadow="false">
			<template #iconRight><router-link to="/dashboard"><XIcon class="w-8 h-8 text-purple-900" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col pt-12 mx-4">
				<h5 class="text-header-five font-semibold antialiased mb-2">Brittany's Badges (6)</h5>
				<p class="font-thin mb-4">This is what other parents thought of Brittany</p>

				<div class="flex flex-wrap gap-1 justify-center mt-4">
					<BadgeProfile />
					<BadgeProfile svg="./assets/svg/badges/zen.svg" title="Zen" />
					<BadgeProfile svg="./assets/svg/badges/playful.svg" title="Playful" />
					<BadgeProfile />
					<BadgeProfile svg="./assets/svg/badges/zen.svg" title="Zen" />
					<BadgeProfile svg="./assets/svg/badges/playful.svg" title="Playful" />
				</div>

				<div class="flex flex-col items-center mt-40 mb-8">
					<div><ButtonPrimary text="Got It" class="w-button-sm text-xl py-4" /></div>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation-and-tabs/TopNavigation.vue'
import BadgeProfile from '../../../../../components/badge/BadgeProfile.vue'
import ButtonPrimary from '../../../../../components/buttons/ButtonPrimary.vue'

import { XIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		BadgeProfile,
		ButtonPrimary,
		XIcon
	}
}
</script>