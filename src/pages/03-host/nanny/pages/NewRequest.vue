<template>
	<div class="bg-purple-500">
		<TopNavigation backgroundColor="bg-purple-500" :dropShadow="false">
			<template #iconRight><router-link to="/dashboard"><XIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<div class="h-screen flex flex-col items-center mx-8 bg-purple-500">
				<form class="w-full mb-2" action="#" method="POST">
					<div class="mb-44">
						<h2 class="text-center text-header-two text-green-500 antialiased mx-5">Hey Janne!</h2>
						<h5 class="text-lg text-center text-white font-thin mt-3">What are you looking for?</h5>
					</div>
					<div class="flex flex-col justify-center items-center">
						<ul role="list" class="w-full">
							<CheckListItem :hideStatusIcon="true" :hideContent="false" :hidePending="true" title="Au Pair" description="Live in nanny: 375 euro/ month" />
							<CheckListItem :hideStatusIcon="true" :hideContent="false" :hidePending="true" title="Nanny" description="Last minute,One-time, Recurring or Event nanny" />
							<CheckListItem :hideStatusIcon="true" :hideContent="false" :hidePending="true" title="Childminder" description="Nanny with subsidy: for full days" />
						</ul>
					</div>
					<div class="flex justify-center mt-4">
						<div class="flex-none"><p class="text-white text-center font-thin anchor-with-underline"><a href="#">Help me choose</a></p></div>
						<div class="inline-flex items-center justify-center pl-1"><ChevronRightIcon class="w-5 h-5 text-white" /></div>
					</div>
				</form>
			</div>
		</main>
	</div>
</template>

<script>
import CheckListItem from '../../../../components/checklist/ChecklistItem.vue'
import TopNavigation from '../../../../components/navigation/TopNavigation.vue'

import { XIcon, ChevronRightIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		CheckListItem,
		XIcon,
		ChevronRightIcon
	}
}
</script>