<template>
	<div class="w-full h-full">
		<TopNavigation backgroundColor="bg-white" :dropShadow="true" headerColor="text-black" text="Parent Profile Fold Content">
			<template #iconLeft><router-link to="/dashboard"><ChevronLeftIcon class="w-8 h-8 text-black" aria-hidden="true" /></router-link></template>
			<template #iconRight><DotsVerticalIcon class="w-6 h-6 text-black" aria-hidden="true" /></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col mx-4">
				<FoldContainer class="mt-10" />
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation/TopNavigation.vue'
import ParentCard from '../../../../../components/profile/parent-card/ParentCard.vue'
import ParentNeeds from '../../../../../components/profile/parent-needs/ParentNeeds.vue'
import FoldContainer from '../../../../../components/profile/fold/_FoldContainer.vue'

import { ChevronLeftIcon, DotsVerticalIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		ParentCard,
		ParentNeeds,
		FoldContainer,
		ChevronLeftIcon,
		DotsVerticalIcon
	}
}
</script>
