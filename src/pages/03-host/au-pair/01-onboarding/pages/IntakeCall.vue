<template>
	<div class="w-full h-full">
		<TopNavigation text="Intake Call">
			<template #iconLeft
				><router-link to="/dashboard?tab=3"
					><ChevronLeftIcon
						class="w-8 h-8 text-white"
						aria-hidden="true" /></router-link
			></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col justify-center pt-12 mx-4">
				<form class="w-full" action="#" method="POST">
					<div class="mb-2">
						<h5 class="text-header-five font-semibold antialiased">
							Finish your application: Book a call
						</h5>
					</div>

					<div class="mb-12">
						<IntakeCallCard
							background-color="bg-lilac-50"
							text-color-header="text-purple-500"
							header="Next Step: Intake"
						/>
					</div>

					<div class="mb-20">
						<h6
							class="text-header-six font-semibold antialiased mb-2"
						>
							Team Nanny Nina
						</h6>
						<p class="text-gray-500 mb-2">
							<a
								href="tel:+31 6844 8434"
								class="anchor-blue anchor-with-underline"
								>+31 6844 8434</a
							>
							or
							<!--
								FYI Tjardo/Aliu
								mailto 'subject' parameter is to change depending if from Netherlands or International

								Netherlands
								"Dutch Full Service: Intake Call" if it's from the Netherlands

								International
								"English Full Service: Intake Call" if it's International
							-->
							<a
								href="mailto:aupair@nannynina.nl?subject=Dutch Full Service: Intake Call"
								class="anchor-blue anchor-with-underline"
								>aupair@nannynina.nl</a
							>
						</p>
						<p>
							We would love to meet you and learn more about your
							family. After the call we will have all the
							information to start looking for your au pair. The
							call will only take about 10 mins and it's an old
							fashioned phone call!
						</p>
					</div>

					<div
						class="flex flex-col justify-center items-center mb-10"
					>
						<AnchorPrimary
							text="Plan a call"
							classes="w-button-xl text-xl py-4"
						/>
					</div>
				</form>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation-and-tabs/TopNavigation.vue'
import IntakeCallCard from '../../../../../components/cards/intake-call-card/IntakeCallCard.vue'
import AnchorPrimary from '../../../../../components/dom-elements/AnchorPrimary.vue'

import { ChevronLeftIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		IntakeCallCard,
		AnchorPrimary,
		ChevronLeftIcon,
	},
}
</script>
