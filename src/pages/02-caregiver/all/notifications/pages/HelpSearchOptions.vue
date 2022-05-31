<template>
	<div class="w-full h-full">
		<TopNavigation text="Help" />
		<main>
			<div class="pt-6">
				<div class="mx-8 pt-4 pb-8">
					<InputField :hasLeadingIcon="true" inputIconType="search" placeholder="What's the issue?" inputClasses="text-center" />
				</div>

				<div class="mb-40">
					<h5 class="text-header-five ml-8 mb-6">Answers</h5>
					<ul role="list">
						<ChecklistItemNoBorder :isHelpItem="true" :displaySubHeader="false" leftSvg="./assets/svg/help/circle-green-calendar-purple.svg" header="Help with booking" rightSvg="./assets/svg/other/chevron-right-gray.svg" />
						<ChecklistItemNoBorder :isHelpItem="true" :displaySubHeader="false" leftSvg="./assets/svg/help/circle-green-phone-link-setup-purple.svg" header="Account and app issues" rightSvg="./assets/svg/other/chevron-right-gray.svg" />
						<ChecklistItemNoBorder :isHelpItem="true" :displaySubHeader="false" leftSvg="./assets/svg/help/circle-green-payments-purple.svg" header="Payment issues" rightSvg="./assets/svg/other/chevron-right-gray.svg" />
						<ChecklistItemNoBorder :isHelpItem="true" :displaySubHeader="false" leftSvg="./assets/svg/help/circle-green-supervisor-account-purple.svg" header="Host/Parent issues" rightSvg="./assets/svg/other/chevron-right-gray.svg" />
						<ChecklistItemNoBorder :isHelpItem="true" :displaySubHeader="false" leftSvg="./assets/svg/help/circle-green-mask-purple.svg" header="Safety and Insurance" rightSvg="./assets/svg/other/chevron-right-gray.svg" />
					</ul>
				</div>

				<div class="mb-10">
					<h5 class="text-header-five ml-8 mb-2">Ask</h5>
					<ul role="list">
						<ChecklistItemNoBorder :isHelpItem="true" :displayBorderBottom="false" leftSvg="./assets/svg/help/message-purple.svg" header="Send us a message" subHeader="Other matters, disputes or conflicts?" rightSvg="./assets/svg/other/chevron-right-gray.svg" />
					</ul>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation-and-tabs/TopNavigation.vue'
import InputField from '../../../../../components/form/InputField.vue'
import ChecklistItemNoBorder from '../../../../../components/checklist/ChecklistItemNoBorder.vue'

export default {
	components: {
		TopNavigation,
		InputField,
		ChecklistItemNoBorder
	}
}
</script>