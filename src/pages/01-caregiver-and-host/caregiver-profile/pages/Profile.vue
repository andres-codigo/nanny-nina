<template>
	<div class="w-full h-full">
		<TopNavigation text="Profile">
			<template #iconLeft><router-link to="'/dashboard?tab=1"><ChevronLeftIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
			<template #iconRight><QuestionMarkCircleIcon class="w-6 h-6 text-green-500" aria-hidden="true" /></template>
		</TopNavigation>
		<main>
			<div class="w-full h-[240px] overflow-hidden">
				<Img src="https://images.unsplash.com/photo-1543721482-bc95ff1f1dea" />
			</div>

			<div class="flex flex-row mx-4 pt-6 mb-10">
				<div class="basis-1/2">
					<h2 class="text-header-two font-semibold antialiased mb-1">Brittany</h2>
					<p class="font-medium antialiased">Nanny / Amsterdam, NL</p>
				</div>
				<div class="basis-1/2 pt-2">
					<Img src="./assets/svg/other/profile-badge.svg" class="w-6 h-6" />
				</div>
			</div>

			<div class="mx-4 mb-6">
				<ul role="list">
					<ChecklistItemNoBorder :isHelpItem="true" :displaySubHeader="false" :displayLeftSvg="false" header="Help with booking" rightSvg="./assets/svg/other/chevron-right-black.svg" />
					<ChecklistItemNoBorder :displayBorderBottom="false" :isHelpItem="true" :displaySubHeader="false" :displayLeftSvg="false" header="Ratings & Review" rightSvg="./assets/svg/other/chevron-right-black.svg" />
				</ul>
			</div>

			<div class="flex mx-4">
				<div class="basis-1/3">
					<div class="text-sm mb-2">Ratings</div>
					<div class="text-2xl font-medium">
						<div class="flex">
							<div class="inline-flex items-center text-sm font-semibold leading-none">
								<span class="mr-1">4.5/5</span>
								<div class="grid grid-cols-5">
									<div><Img src="./assets/svg/stars/star-solid-gold.svg" class="w-2.5 h-2.5" /></div>
									<div><Img src="./assets/svg/stars/star-solid-gold.svg" class="w-2.5 h-2.5" /></div>
									<div><Img src="./assets/svg/stars/star-solid-gold.svg" class="w-2.5 h-2.5" /></div>
									<div><Img src="./assets/svg/stars/star-solid-gold.svg" class="w-2.5 h-2.5" /></div>
									<div><Img src="./assets/svg/stars/star-solid-gold.svg" class="w-2.5 h-2.5" /></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="basis-2/3 mr-1">
					<div class="text-sm mb-2">Reviews</div>
					<div class="text-sm font-semibold leading-none">34</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../components/navigation-and-tabs/TopNavigation.vue'
import Img from '../../../../components/dom-elements/Img.vue'
import ChecklistItemNoBorder from '../../../../components/checklist/ChecklistItemNoBorder.vue'

import { ChevronLeftIcon, QuestionMarkCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		Img,
		ChecklistItemNoBorder,
		ChevronLeftIcon,
		QuestionMarkCircleIcon
	}
}
</script>