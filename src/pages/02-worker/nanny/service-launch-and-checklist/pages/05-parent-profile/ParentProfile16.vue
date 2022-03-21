<template>
	<div class="w-full h-full">
		<TopNavigation routerLinkPath="/dashboard" backgroundColor="bg-white" iconColor="text-black" headerColor="text-black" text="New Request">
			<DotsVerticalIcon class="w-6 h-6 text-black" aria-hidden="true" />
		</TopNavigation>
		<main>
			<div class="h-screen flex flex-col mx-4">
				<ParentCard />

				<hr class="bg-gray-500 my-6" />

				<Details />

				<FoldContainer />
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../../components/navigation/TopNavigation.vue'
import ParentCard from '../../../../../../components/profile/parent-card/ParentCard.vue'
import Details from '../../../../../../components/profile/Details.vue'
import FoldContainer from '../../../../../../components/profile/fold/_FoldContainer.vue'
import { DotsVerticalIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		ParentCard,
		Details,
		FoldContainer,
		DotsVerticalIcon
	}
}
</script>
