<template>
	<div class="w-full h-full">
		<TopNavigation text="Blocked">
			<template #iconLeft><router-link to="'/dashboard?tab=1"><ChevronLeftIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
			<template #iconRight><QuestionMarkCircleIcon class="w-6 h-6 text-green-500" aria-hidden="true" /></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col pt-12 mx-4">
				<h5 class="text-header-five font-semibold antialiased mb-2">Blocked Users</h5>

				<div class="flex flex-col pt-12 mx-4">
					<h4 class="text-header-four font-semibold antialiased mb-6">Your Preferences</h4>
					<div class="mb-10">
						<ul role="list">
							<ChecklistItemBlockedUser />
							<ChecklistItemBlockedUser :unblockUser="true" />
						</ul>
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../components/navigation-and-tabs/TopNavigation.vue'
import ChecklistItemBlockedUser from '../../../../components/checklist/ChecklistItemBlockedUser.vue'

import { ChevronLeftIcon, QuestionMarkCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		ChecklistItemBlockedUser,
		ChevronLeftIcon,
		QuestionMarkCircleIcon
	}
}
</script>