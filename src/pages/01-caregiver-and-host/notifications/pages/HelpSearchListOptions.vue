<template>
	<div class="w-full h-full">
		<TopNavigation text="Help" />
		<main>
			<div class="pt-6">
				<div class="pt-4 pb-8 mx-8">
					<InputField
						:has-leading-icon="true"
						input-icon-type="search"
						placeholder="What's the issue?"
					/>
				</div>

				<div class="mb-40">
					<h5
						class="mb-6 ml-8 antialiased font-semibold text-header-five"
					>
						Answers
					</h5>
					<ul role="list">
						<ChecklistItemNoBorder
							:is-help-item="true"
							:display-sub-header="false"
							left-svg="./assets/svg/help/circle-green-calendar-purple.svg"
							header="Help with booking"
							right-svg="./assets/svg/other/chevron-right-gray.svg"
						/>
						<ChecklistItemNoBorder
							:is-help-item="true"
							:display-sub-header="false"
							left-svg="./assets/svg/help/circle-green-phone-link-setup-purple.svg"
							header="Account and app issues"
							right-svg="./assets/svg/other/chevron-right-gray.svg"
						/>
						<ChecklistItemNoBorder
							:is-help-item="true"
							:display-sub-header="false"
							left-svg="./assets/svg/help/circle-green-payments-purple.svg"
							header="Payment issues"
							right-svg="./assets/svg/other/chevron-right-gray.svg"
						/>
						<ChecklistItemNoBorder
							:is-help-item="true"
							:display-sub-header="false"
							left-svg="./assets/svg/help/circle-green-supervisor-account-purple.svg"
							header="Host/Parent issues"
							right-svg="./assets/svg/other/chevron-right-gray.svg"
						/>
						<ChecklistItemNoBorder
							:is-help-item="true"
							:display-sub-header="false"
							left-svg="./assets/svg/help/circle-green-mask-purple.svg"
							header="Safety and Insurance"
							right-svg="./assets/svg/other/chevron-right-gray.svg"
						/>
					</ul>
				</div>

				<div class="mb-10">
					<h5
						class="mb-2 ml-8 antialiased font-semibold text-header-five"
					>
						Ask
					</h5>
					<ul role="list">
						<ChecklistItemNoBorder
							:is-help-item="true"
							:display-border-bottom="false"
							left-svg="./assets/svg/help/message-purple.svg"
							header="Send us a message"
							sub-header="Other matters, disputes or conflicts?"
							right-svg="./assets/svg/other/chevron-right-gray.svg"
						/>
					</ul>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../components/navigation-and-tabs/TopNavigation.vue'
import InputField from '../../../../components/form/InputField.vue'
import ChecklistItemNoBorder from '../../../../components/checklist/ChecklistItemNoBorder.vue'

export default {
	components: {
		TopNavigation,
		InputField,
		ChecklistItemNoBorder,
	},
}
</script>
