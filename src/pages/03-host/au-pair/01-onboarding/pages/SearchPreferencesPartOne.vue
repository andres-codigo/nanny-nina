<template>
	<div class="w-full h-full">
		<TopNavigation text="Search Preferences">
			<template #iconLeft
				><router-link to="/dashboard?tab=3"
					><ChevronLeftIcon
						class="w-8 h-8 text-white"
						aria-hidden="true" /></router-link
			></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col justify-center pt-12 mx-4">
				<form class="w-full" action="#" method="POST">
					<div class="mb-12">
						<h5
							class="text-header-five font-semibold antialiased mb-2"
						>
							Let's talk about your wishes!
						</h5>
						<p class="text-sm font-light">
							In which region should we search for your au pair
						</p>
					</div>

					<div class="mb-10">
						<p class="inline-flex w-full font-thin mb-4">
							What are your main/preferred languages for your au
							pair?
						</p>

						<div class="flex flex-row">
							<div
								class="inline-flex justify-center items-center"
							>
								<SelectMenu
									label-text="Language"
									option-text="Select"
									classes="w-select-sm"
								/>
							</div>
							<div
								class="flex grow justify-center items-center px-4"
							>
								<SelectMenu
									label-text="Proficiency"
									option-text="Select"
									classes="w-select-sm"
								/>
							</div>
							<div
								class="inline-flex justify-center items-center w-14 h-14 pt-8"
							>
								<PlusIcon
									class="w-5 h-5 text-indigo-500"
									aria-hidden="true"
								/>
							</div>
						</div>
					</div>

					<div class="mb-10">
						<p class="font-thin mb-4">
							What is your preferred gender?
						</p>
						<RadioQuestionsLabelLeftInputRight
							:screen-reader-only="true"
							:side-by-side-radio-buttons="false"
							:is-question-one="true"
							question-one-text="Male"
							:question-one-sub-text-hidden="true"
							question-two-text="Female"
							:question-two-sub-text-hidden="true"
							:has-third-question="true"
							question-three-text="No preference"
							:question-three-sub-text-hidden="true"
						/>
					</div>
				</form>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation-and-tabs/TopNavigation.vue'
import SelectMenu from '../../../../../components/form/SelectMenu.vue'
import RadioQuestionsLabelLeftInputRight from '../../../../../components/form/RadioQuestionsLabelLeftInputRight.vue'

import { ChevronLeftIcon, PlusIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		SelectMenu,
		RadioQuestionsLabelLeftInputRight,
		ChevronLeftIcon,
		PlusIcon,
	},
}
</script>
