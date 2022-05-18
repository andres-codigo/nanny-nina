<template>
	<div class="w-full bg-purple-500">
		<TopNavigation backgroundColor="bg-purple-500" :dropShadow="false">
			<template #iconRight><router-link to="/dashboard?tab=3"><XIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<div class="h-screen flex flex-col items-center mt-8 mx-8 bg-purple-500">
				<div class="mb-44">
					<h2 class="text-center text-header-two text-green-500 font-semibold antialiased mx-5">Hey Janne!</h2>
					<h5 class="text-lg text-center text-white font-thin mt-3">What are you looking for?</h5>
				</div>
				<div class="flex flex-col justify-center items-center">
					<ul role="list" class="w-full">
						<ChecklistItem pageBackgroundColor="purple" :checkListItemIsHyperlink="true" :hideStatusIcon="true" :hideContent="false" :hidePending="true" :isHostOptionDescription="true" title="Au Pair" description="Live in nanny: 375 euro/ month" />
						<ChecklistItem pageBackgroundColor="purple" :checkListItemIsHyperlink="true" :hideStatusIcon="true" :hideContent="false" :hidePending="true" :isHostOptionDescription="true" title="Nanny" description="Last minute,One-time, Recurring or Event nanny" />
						<ChecklistItem pageBackgroundColor="purple" :checkListItemIsHyperlink="true" :hideStatusIcon="true" :hideContent="false" :hidePending="true" :isHostOptionDescription="true" title="Childminder" description="Nanny with subsidy: for full days" />
					</ul>
				</div>
				<div class="justify-center mt-4">
					<a href="#" target="_self" class="text-center font-thin anchor-white anchor-with-underline">Help me choose ></a>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import ChecklistItem from '../../../../../../components/checklist/ChecklistItem.vue'
import TopNavigation from '../../../../../../components/navigation-and-tabs/TopNavigation.vue'

import { XIcon, ChevronRightIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		ChecklistItem,
		XIcon,
		ChevronRightIcon
	}
}
</script>