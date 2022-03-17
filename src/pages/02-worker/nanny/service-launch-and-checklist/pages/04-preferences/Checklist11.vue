<script setup>
import TopNavigation from '../../../../../../components/navigation/TopNavigation.vue'
import CheckListItem from '../../../../../../components/checklist/ChecklistItem.vue'
import CheckboxQuestion from '../../../../../../components/form/CheckboxQuestion.vue'
import ButtonPrimary from '../../../../../../components/buttons/ButtonPrimary.vue'
</script>

<template>
	<div class="w-full h-full">
		<TopNavigation routerLinkPath="/dashboard" text="Preferences" />
		<main>
			<div class="flex flex-col px-4 py-6 bg-slate-50">
				<h5 class="mb-4 text-left text-header-five font-medium text-gray-900"><span class="text-red-500">Title here for consistency?</span></h5>
				<div class="flex flex-col">
					<ul role="list">
						<CheckListItem :hideContent="false" title="Availability" description="Choose the days &amp; time you want to work" />
						<CheckListItem :hideContent="false" :showBadge="true" title="Price" description="What is your minimum asking price?" />
						<CheckListItem :hideContent="false" title="Matching Preference" description="This will help us to find a good match" />
					</ul>
				</div>

				<div class="flex flex-col mt-8">
					<h6 class="text-header-six font-medium mb-4">Transport <span class="text-red-500">Drivers license follow up question?</span></h6>
					<p class="text-xl font-thin mb-4">Are you willing to drive kids?</p>
					<CheckboxQuestion screenReaderOnly="true" legend="Do you have any health conditions?" QuestionOneText="Yes" QuestionTwoText="No" />
				</div>

				<div class="mt-24">
					<ButtonPrimary text="Save &amp; Continue" />
				</div>
			</div>
		</main>
	</div>
</template>