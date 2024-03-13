<template>
	<div class="w-full h-full">
		<TopNavigation text="Preferences">
			<template #iconLeft
				><router-link to="'/dashboard?tab=1"
					><ChevronLeftIcon
						class="w-8 h-8 text-white"
						aria-hidden="true" /></router-link
			></template>
		</TopNavigation>
		<main>
			<Tabs
				tab-one-classes="border-transparent text-gray-500 border-b-2 hover:text-gray-700 hover:border-gray-300"
				tab-one-text="Personal"
				:tab-one-is-active="false"
				tab-two-classes="text-purple-900"
				tab-two-text="Preferences"
				:tab-two-is-active="true"
				:display-third-tab="true"
				tab-three-classes="border-transparent text-gray-500 border-b-2 hover:text-gray-700 hover:border-gray-300"
				tab-three-text="Badges"
				:tab-three-is-active="false"
			/>

			<div class="flex flex-col pt-12 mx-4">
				<h4 class="text-header-four font-semibold antialiased mb-6">
					Your Preferences
				</h4>
				<div class="mb-10">
					<ul role="list">
						<ChecklistItemWithBorderAndProfileImage />
						<ChecklistItemWithBorderAndProfileImage
							header="Availability"
							sub-header="Update your work hours"
						/>
						<ChecklistItemWithBorderAndProfileImage
							header="Matching preferences"
							sub-header="Update how you want to work"
						/>
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
		ChevronLeftIcon,
	},
}
</script>
