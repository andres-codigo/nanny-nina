<template>
	<div class="w-full h-full">
		<TopNavigation text="Preferences">
			<template #iconLeft><router-link to="/dashboard"><ChevronLeftIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
			<template #iconRight><QuestionMarkCircleIcon class="w-8 h-8 text-green-500" aria-hidden="true" /></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col px-4 pt-12">
				<h5 class="text-left text-header-five font-semibold antialiased mb-2">Let's help you find more jobs</h5>
				<p	class="font-light">You can always adjust this later in your profile</p>

				<div class="flex flex-col mt-8">
					<ul role="list">
						<CheckListItem :hideContent="false" title="Availability" description="Choose the days &amp; time you want to work">
							<template #iconLeft><CheckCircleIcon class="relative right-0 top-1 w-5 h-5 text-green-800" aria-hidden="true" /></template>
						</CheckListItem>
						<CheckListItem :hideContent="false" title="Matching Preference" description="This will help us to find a good match">
							<template #iconLeft><CheckCircleIcon class="relative right-0 top-1 w-5 h-5 text-gray-500" aria-hidden="true" /></template>
						</CheckListItem>
						<CheckListItem :hideContent="false" :showBadge="true" title="Price" description="What is your minimum asking price?">
							<template #iconLeft><CheckCircleIcon class="relative right-0 top-1 w-5 h-5 text-gray-500" aria-hidden="true" /></template>
						</CheckListItem>
					</ul>
				</div>

				<div class="flex flex-col justify-center items-center mt-16">
					<ButtonPrimary text="Save Changes" class="w-button-lg text-xl py-4" />
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../../components/navigation/TopNavigation.vue'
import CheckListItem from '../../../../../../components/checklist/ChecklistItem.vue'
import RadioQuestion from '../../../../../../components/form/RadioQuestion.vue'
import ButtonPrimary from '../../../../../../components/buttons/ButtonPrimary.vue'

import { ChevronLeftIcon, CheckCircleIcon, QuestionMarkCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		CheckListItem,
		RadioQuestion,
		ButtonPrimary,
		ChevronLeftIcon,
		CheckCircleIcon,
		QuestionMarkCircleIcon
	}
}
</script>