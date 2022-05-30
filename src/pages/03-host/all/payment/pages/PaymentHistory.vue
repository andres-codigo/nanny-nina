<template>
	<div class="w-full h-full">
		<TopNavigation text="Payment" />
		<main>
			<Tabs
				tabOneClasses="text-purple-900"
				tabOneText="Payment History"
				:tabOneIsActive="true"
				tabTwoClasses="border-transparent text-gray-500 border-b-2 hover:text-gray-700 hover:border-gray-300"
				tabTwoText="Reward"
				:tabTwoIsActive="false"
			/>

			<JobListingFilter>
				<template #filter-one><JobListingFilterItemSelected text="Service" /></template>
				<template #filter-two><JobListingFilterItem text="Booking type" /></template>
			</JobListingFilter>
			<div class="flex flex-col mx-4">
				<div class="flex flex-row pt-2">
					<SelectMenuNoBorder optionTextOne="Most Recent" />
				</div>

				<div class="mb-10">
					<ul role="list">
						<ChecklistItemWithBorderPaymentHistory />
						<ChecklistItemWithBorderPaymentHistory header="Jeffersons"><template #totalAmount>&euro;550</template></ChecklistItemWithBorderPaymentHistory>
						<ChecklistItemWithBorderPaymentHistory header="Lukes"><template #totalAmount>&euro;9.99</template></ChecklistItemWithBorderPaymentHistory>
					</ul>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation-and-tabs/TopNavigation.vue'
import Tabs from '../../../../../components/navigation-and-tabs/Tabs.vue'
import ChecklistItemWithBorderPaymentHistory from '../../../../../components/checklist/ChecklistItemWithBorderPaymentHistory.vue'

import JobListingFilter from '../../../../../components/filter/JobListingFilter.vue'
import JobListingFilterItem from '../../../../../components/filter/JobListingFilterItem.vue'
import JobListingFilterItemSelected from '../../../../../components/filter/JobListingFilterItemSelected.vue'

import SelectMenuNoBorder from '../../../../../components/form/SelectMenuNoBorder.vue'

export default {
	components: {
		TopNavigation,
		Tabs,
		ChecklistItemWithBorderPaymentHistory,
		JobListingFilter,
		JobListingFilterItem,
		JobListingFilterItemSelected,
		SelectMenuNoBorder
	}
}
</script>