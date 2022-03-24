<template>
	<div class="w-full h-full">
		<TopNavigation backgroundColor="bg-white" headerColor="text-black" text="New Request">
			<template #iconLeft><router-link to="/dashboard"><ChevronLeftIcon class="w-8 h-8 text-black" aria-hidden="true" /></router-link></template>
			<template #iconRight><DotsVerticalIcon class="w-6 h-6 text-black" aria-hidden="true" /></template>
		</TopNavigation>
		<main>
			<div class="h-screen flex flex-col mx-4">
				<ParentCard />

				<hr class="my-6" />

				<ParentNeeds />
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation/TopNavigation.vue'
import ParentCard from '../../../../../components/profile/parent-card/ParentCard.vue'
import ParentNeeds from '../../../../../components/profile/parent-needs/ParentNeeds.vue'

import { ChevronLeftIcon, DotsVerticalIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		ParentCard,
		ParentNeeds,
		ChevronLeftIcon,
		DotsVerticalIcon
	}
}
</script>
