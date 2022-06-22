<template>
	<div class="w-full h-full">
		<TopNavigation text="Preferences">
			<template #iconLeft><router-link to="'/dashboard?tab=1"><ChevronLeftIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<Tabs
				tabOneClasses="border-transparent text-gray-500 border-b-2 hover:text-gray-700 hover:border-gray-300"
				tabOneText="Personal"
				:tabOneIsActive="false"
				tabTwoClasses="text-purple-900"
				tabTwoText="Preferences"
				:tabTwoIsActive="true"
				:displayThirdTab="true"
				tabThreeClasses="border-transparent text-gray-500 border-b-2 hover:text-gray-700 hover:border-gray-300"
				tabThreeText="Badges"
				:tabThreeIsActive="false"
			/>

			<div class="flex flex-col pt-12 mx-4">
				<h4 class="text-header-four font-semibold antialiased mb-6">Your Preferences</h4>
				<div class="mb-10">
					<ul role="list">
						<ChecklistItemWithBorderAndProfileImage />
						<ChecklistItemWithBorderAndProfileImage header="Availability" subHeader="Update your work hours" />
						<ChecklistItemWithBorderAndProfileImage header="Matching preferences" subHeader="Update how you want to work" />
					</ul>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../components/navigation-and-tabs/TopNavigation.vue'
import Tabs from '../../../../components/navigation-and-tabs/Tabs.vue'
import ChecklistItemWithBorderAndProfileImage from '../../../../components/checklist/ChecklistItemWithBorderAndProfileImage.vue'

import { ChevronLeftIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		Tabs,
		ChecklistItemWithBorderAndProfileImage,
		ChevronLeftIcon
	}
}
</script>