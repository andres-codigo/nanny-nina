<script setup>
import TopNavigation from '../../../../../../components/navigation/TopNavigation.vue'
import CheckListItem from '../../../../../../components/checklist/ChecklistItem.vue'
import RadioQuestion from '../../../../../../components/form/RadioQuestion.vue'
import ButtonPrimary from '../../../../../../components/buttons/ButtonPrimary.vue'
</script>

<template>
	<div class="w-full h-full">
		<TopNavigation routerLinkPath="/dashboard" text="Preferences" />
		<main>
			<div class="flex flex-col px-4 py-6 bg-slate-50">
				<h5 class="mb-2 text-left text-header-five font-normal text-gray-900">Let's help you find more jobs</h5>
				<p	class="text-sm font-light">You can change this later in your profile</p>

				<div class="flex flex-col mt-4">
					<ul role="list">
						<CheckListItem :hideContent="false" title="Availability" description="Choose the days &amp; time you want to work" />
						<CheckListItem :hideContent="false" title="Matching Preference" description="This will help us to find a good match" />
						<CheckListItem :hideContent="false" :showBadge="true" title="Price" description="What is your minimum asking price?" />
					</ul>
				</div>

				<div class="mt-24">
					<ButtonPrimary text="Save Changes" />
				</div>
			</div>
		</main>
	</div>
</template>