<template>
	<div class="w-full h-full">
		<TopNavigation routerLinkPath="/dashboard" backgroundColor="bg-white" iconColor="text-black" headerColor="text-black" text="Parent Profile Fold Content">
			<DotsVerticalIcon class="w-6 h-6 text-black" aria-hidden="true" />
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
import { DotsVerticalIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		ParentCard,
		ParentNeeds,
		FoldContainer,
		DotsVerticalIcon
	}
}
</script>
