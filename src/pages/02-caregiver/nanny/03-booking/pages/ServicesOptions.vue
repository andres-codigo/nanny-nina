<template>
	<div class="w-full h-full bg-lilac-100">
		<TopNavigation
			background-color="bg-lilac-100"
			:display-border-bottom="false"
		>
			<template #iconRight
				><router-link to="/dashboard?tab=2"
					><ImageComponent
						src="./assets/svg/ticks-and-crosses/cross-remove-black.svg" /></router-link
			></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col pt-12 mx-8">
				<div class="flex flex-col">
					<h2
						class="font-semibold text-center text-header-two antialiased mb-2"
					>
						Your Bookings
					</h2>
					<p class="font-medium antialiased text-center">
						View your booking applications
					</p>
				</div>

				<div class="flex flex-col items-center py-16">
					<ImageComponent
						class="w-48 h-48"
						src="./assets/svg/illustrations/verification-moon-mail-figure.svg"
						alt=""
					/>
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
							title="Nanny(3)"
							description="One-time, Recurring or Event bookings"
						/>
						<ChecklistItemWithBorder
							page-background-color="purple"
							:check-list-item-is-hyperlink="true"
							:hide-status-icon="true"
							:hide-content="false"
							:hide-pending="true"
							:is-caregiver-host-option-description="true"
							title="Au Pair(2)"
							description="Live & care abroad"
						/>
					</ul>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation-and-tabs/TopNavigation.vue'
import ImageComponent from '../../../../../components/dom-elements/ImageComponent.vue'
import ChecklistItemWithBorder from '../../../../../components/checklist/ChecklistItemWithBorder.vue'

export default {
	components: {
		TopNavigation,
		ImageComponent,
		ChecklistItemWithBorder,
	},
}
</script>
