<template>
	<div class="w-full h-full">
		<TopNavigation text="Preferences">
			<template #iconLeft
				><router-link to="/dashboard?tab=2"
					><ChevronLeftIcon
						class="w-8 h-8 text-white"
						aria-hidden="true" /></router-link
			></template>
			<template #iconRight
				><QuestionMarkCircleIcon
					class="w-6 h-6 text-green-500"
					aria-hidden="true"
			/></template>
		</TopNavigation>
		<main>
			<Steps text="Step 2 of 2">
				<template #step-one><CompletedStep /></template>
				<template #step-two><CurrentStep /></template>
			</Steps>
			<div class="flex flex-col pt-6 mx-4">
				<form class="w-full" action="#" method="POST">
					<div class="flex flex-col">
						<h5
							class="text-header-five font-semibold antialiased mb-2"
						>
							Let's help you find more jobs
						</h5>
						<p class="font-light">
							You can always adjust this later in your profile
						</p>

						<ul role="list" class="mt-8">
							<ChecklistItemWithBorder
								:check-list-item-is-hyperlink="true"
								:hide-content="false"
								:hide-pending="true"
								:hide-mandatory-red-star="false"
								title="Availability"
								description="Choose the days &amp; time you want to work"
							>
								<template #iconLeft
									><CheckCircleIcon
										class="relative right-0 top-1 w-5 h-5 text-green-800"
										aria-hidden="true"
								/></template>
							</ChecklistItemWithBorder>
							<ChecklistItemWithBorder
								:check-list-item-is-hyperlink="true"
								:hide-content="false"
								:hide-pending="true"
								:hide-mandatory-red-star="false"
								title="Matching Preference"
								description="This will help us to find a good match"
							>
								<template #iconLeft
									><CheckCircleIcon
										class="relative right-0 top-1 w-5 h-5 text-gray-500"
										aria-hidden="true"
								/></template>
							</ChecklistItemWithBorder>
							<ChecklistItemWithBorder
								:check-list-item-is-hyperlink="true"
								:hide-content="false"
								:hide-pending="true"
								:hide-mandatory-red-star="false"
								title="Personality"
								description="So we know you even better than you know yourself"
							>
								<template #iconLeft
									><CheckCircleIcon
										class="relative right-0 top-1 w-5 h-5 text-gray-500"
										aria-hidden="true"
								/></template>
							</ChecklistItemWithBorder>
							<ChecklistItemWithBorder
								:hide-status-icon="true"
								:check-list-item-is-hyperlink="false"
								:hide-content="false"
								:hide-pending="true"
								:hide-mandatory-red-star="false"
								:show-badge="true"
								title="Price"
								description="What is your minimum asking price?"
								:hide-hyperlink-icon="true"
							>
								<template #iconLeft
									><CheckCircleIcon
										class="relative right-0 top-1 w-5 h-5 text-gray-500"
										aria-hidden="true"
								/></template>
							</ChecklistItemWithBorder>
						</ul>
					</div>

					<p class="text-center text-sm py-2">
						<a
							href="#"
							target="_self"
							class="anchor-blue anchor-with-underline"
							>Price advice</a
						>
						for Amsterdam: From &euro;10/hr
					</p>

					<div
						class="flex flex-col justify-center items-center mt-16"
					>
						<ButtonPrimary
							text="Save Changes"
							classes="w-button-lg text-xl py-4"
						/>
					</div>
				</form>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../../components/navigation-and-tabs/TopNavigation.vue'

import Steps from '../../../../../../components/steps/Steps.vue'
import CompletedStep from '../../../../../../components/steps/types/CompletedStep.vue'
import CurrentStep from '../../../../../../components/steps/types/CurrentStep.vue'

import ChecklistItemWithBorder from '../../../../../../components/checklist/ChecklistItemWithBorder.vue'
import ButtonPrimary from '../../../../../../components/buttons/ButtonPrimary.vue'

import {
	ChevronLeftIcon,
	CheckCircleIcon,
	QuestionMarkCircleIcon,
} from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		Steps,
		CompletedStep,
		CurrentStep,
		ChecklistItemWithBorder,
		ButtonPrimary,
		ChevronLeftIcon,
		CheckCircleIcon,
		QuestionMarkCircleIcon,
	},
	props: {
		checkListItemIsHyperlink: {
			type: Boolean,
			default: true,
		},
	},
}
</script>
