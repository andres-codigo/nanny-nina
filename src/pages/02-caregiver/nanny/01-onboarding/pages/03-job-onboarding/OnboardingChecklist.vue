<template>
	<div class="w-full h-full">
		<TopNavigation text="Nanny Checklist">
			<template #iconLeft><router-link to="/dashboard"><ChevronLeftIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
			<template #iconRight><QuestionMarkCircleIcon class="w-6 h-6 text-green-500" aria-hidden="true" /></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col px-4 pt-12">
				<h5 class="text-left text-header-five font-semibold antialiased mb-6">Complete checklist to begin</h5>
				<div class="flex flex-col">
					<ul role="list" class="">
						<CheckListItem title="Media Upload">
							<template #iconLeft><CheckCircleIcon class="relative right-0 top-1 w-5 h-5 text-green-800" aria-hidden="true" /></template>
						</CheckListItem>
						<CheckListItem title="Residence Card/ID">
							<template #iconLeft><CheckCircleIcon class="relative right-0 top-1 w-5 h-5 text-gray-500" aria-hidden="true" /></template>
						</CheckListItem>
						<CheckListItem title="Nanny Form">
							<template #iconLeft><CheckCircleIcon class="relative right-0 top-1 w-5 h-5 text-gray-500" aria-hidden="true" /></template>
						</CheckListItem>
						<CheckListItem title="Preferences">
							<template #iconLeft><CheckCircleIcon class="relative right-0 top-1 w-5 h-5 text-gray-500" aria-hidden="true" /></template>
						</CheckListItem>
					</ul>
				</div>

				<div class="flex flex-col justify-center items-center mt-32">
					<ButtonDisabled text="Continue" class="w-button-lg text-xl py-4" />
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../../components/navigation/TopNavigation.vue'
import CheckListItem from '../../../../../../components/checklist/ChecklistItem.vue'
import ButtonDisabled from '../../../../../../components/buttons/ButtonDisabled.vue'

import { CheckCircleIcon, ChevronLeftIcon, QuestionMarkCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		CheckListItem,
		ButtonDisabled,
		ChevronLeftIcon,
		QuestionMarkCircleIcon,
		CheckCircleIcon
	}
}
</script>