<template>
	<div class="w-full h-full bg-lilac-100">
		<TopNavigation
			background-color="bg-lilac-100"
			:display-border-bottom="false"
		>
			<template #iconRight
				><router-link to="/dashboard?tab=3"
					><ImageComponent
						src="./assets/svg/ticks-and-crosses/cross-remove-black.svg" /></router-link
			></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col mt-12 mx-8">
				<div class="mb-44">
					<h2
						class="text-center text-header-two font-semibold antialiased mx-5"
					>
						Hey Janne!
					</h2>
					<h5 class="text-2xl text-center font-thin mt-3">
						What are you looking for?
					</h5>
				</div>

				<div class="mb-10">
					<ul role="list">
						<ChecklistItemWithBorder
							page-background-color="purple"
							:check-list-item-is-hyperlink="true"
							:hide-status-icon="true"
							:hide-content="false"
							:hide-pending="true"
							:is-caregiver-host-option-description="true"
							title="Au Pair"
							description="Live in nanny: 375 euro/ month"
						/>
						<ChecklistItemWithBorder
							page-background-color="purple"
							:check-list-item-is-hyperlink="true"
							:hide-status-icon="true"
							:hide-content="false"
							:hide-pending="true"
							:is-caregiver-host-option-description="true"
							title="Nanny"
							description="Last minute,One-time, Recurring or Event nanny"
						/>
						<ChecklistItemWithBorder
							page-background-color="purple"
							:check-list-item-is-hyperlink="true"
							:hide-status-icon="true"
							:hide-content="false"
							:hide-pending="true"
							:is-caregiver-host-option-description="true"
							title="Childminder"
							description="Nanny with subsidy: for full days"
						/>
					</ul>
				</div>

				<div class="flex justify-center items-center ml-4 mb-10">
					<AnchorTextOnly
						text="Help me choose >"
						text-color-class="anchor-black"
					/>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../../components/navigation-and-tabs/TopNavigation.vue'
import ImageComponent from '../../../../../../components/dom-elements/ImageComponent.vue'
import ChecklistItemWithBorder from '../../../../../../components/checklist/ChecklistItemWithBorder.vue'
import AnchorTextOnly from '../../../../../../components/dom-elements/AnchorTextOnly.vue'

export default {
	components: {
		TopNavigation,
		ImageComponent,
		ChecklistItemWithBorder,
		AnchorTextOnly,
	},
}
</script>
