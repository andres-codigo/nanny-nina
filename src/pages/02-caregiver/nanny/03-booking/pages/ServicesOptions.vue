<template>
	<div class="w-full h-full bg-purple-500">
		<TopNavigation backgroundColor="bg-white-500" :displayBorderBottom="false">
			<template #iconRight><router-link to="/dashboard?tab=2"><Img src="./assets/svg/ticks-and-crosses/cross-remove-white.svg" /></router-link></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col pt-12 mx-8">
				<div class="flex flex-col">
					<h2 class="font-semibold text-center text-header-two text-green-500 antialiased mb-2">Your Bookings</h2>
					<p class="font-medium antialiased text-white text-center">View your booking applications</p>
				</div>

				<div class="flex flex-col items-center py-16">
					<Img class="w-48 h-48" src="./assets/svg/illustrations/verification-moon-mail-figure.svg" alt="" />
				</div>

				<div class="mb-10">
					<ul role="list">
						<ChecklistItemWithBorder pageBackgroundColor="purple" :checkListItemIsHyperlink="true" :hideStatusIcon="true" :hideContent="false" :hidePending="true" :isCaregiverHostOptionDescription="true" title="Nanny(3)" description="One-time, Recurring or Event bookings" />
						<ChecklistItemWithBorder pageBackgroundColor="purple" :checkListItemIsHyperlink="true" :hideStatusIcon="true" :hideContent="false" :hidePending="true" :isCaregiverHostOptionDescription="true" title="Au Pair(2)"  description="Live & care abroad" />
					</ul>
				</div>

				<div class="ml-4 mb-10">
					<AnchorTextOnly text="Preferences >" textColorClass="anchor-white" />
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation-and-tabs/TopNavigation.vue'
import ChecklistItemWithBorder from '../../../../../components/checklist/ChecklistItemWithBorder.vue'
import AnchorTextOnly from '../../../../../components/dom-elements/AnchorTextOnly.vue'

export default {
	components: {
		TopNavigation,
		ChecklistItemWithBorder,
		AnchorTextOnly
	}
}
</script>