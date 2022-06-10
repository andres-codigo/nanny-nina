<template>
	<div class="w-full h-full bg-lilac-100">
		<TopNavigation backgroundColor="bg-lilac-100" :displayBorderBottom="false">
			<template #iconRight><router-link to="/dashboard?tab=3"><Img src="./assets/svg/ticks-and-crosses/cross-remove-black.svg" /></router-link></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col mt-12 mx-8">
				<div class="mb-44">
					<h2 class="text-center text-header-two font-semibold antialiased mx-5">Hey Janne!</h2>
					<h5 class="text-2xl text-center font-thin mt-3">What are you looking for?</h5>
				</div>

				<div class="mb-10">
					<ul role="list">
						<ChecklistItemWithBorder pageBackgroundColor="purple" :checkListItemIsHyperlink="true" :hideStatusIcon="true" :hideContent="false" :hidePending="true" :isCaregiverHostOptionDescription="true" title="Au Pair" description="Live in nanny: 375 euro/ month" />
						<ChecklistItemWithBorder pageBackgroundColor="purple" :checkListItemIsHyperlink="true" :hideStatusIcon="true" :hideContent="false" :hidePending="true" :isCaregiverHostOptionDescription="true" title="Nanny" description="Last minute,One-time, Recurring or Event nanny" />
						<ChecklistItemWithBorder pageBackgroundColor="purple" :checkListItemIsHyperlink="true" :hideStatusIcon="true" :hideContent="false" :hidePending="true" :isCaregiverHostOptionDescription="true" title="Childminder" description="Nanny with subsidy: for full days" />
					</ul>
				</div>

				<div class="flex justify-center items-center ml-4 mb-10">
					<AnchorTextOnly text="Help me choose >" textColorClass="anchor-black" />
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../../components/navigation-and-tabs/TopNavigation.vue'
import Img from '../../../../../../components/dom-elements/Img.vue'
import ChecklistItemWithBorder from '../../../../../../components/checklist/ChecklistItemWithBorder.vue'
import AnchorTextOnly from '../../../../../../components/dom-elements/AnchorTextOnly.vue'

export default {
	components: {
		TopNavigation,
		Img,
		ChecklistItemWithBorder,
		AnchorTextOnly
	}
}
</script>