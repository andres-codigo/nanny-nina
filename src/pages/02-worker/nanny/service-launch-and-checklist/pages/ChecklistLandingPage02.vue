<script setup>
import TopNavigation from '../../../../../components/navigation/TopNavigation.vue'
import CheckListItem from '../../../../../components/checklist/ChecklistItem.vue'
import ButtonDisabled from '../../../../../components/buttons/ButtonDisabled.vue'
</script>

<template>
	<div class="w-full h-full">
		<TopNavigation routerLinkPath="/dashboard" text="Nanny Checklist" />
		<main>
			<div class="flex flex-col px-4 py-6 bg-slate-50">
				<h5 class="mb-4 text-left text-header-five font-medium text-gray-900">Complete checklist to begin</h5>
				<div class="flex flex-col">
					<ul role="list" class="">
						<CheckListItem title="Media Upload" />
						<CheckListItem title="Residence Card/ID" />
						<CheckListItem title="Nanny Form" />
						<CheckListItem title="Preferences" />
					</ul>
				</div>

				<div class="mt-32">
					<ButtonDisabled text="Continue" />
				</div>
			</div>
		</main>
	</div>
</template>