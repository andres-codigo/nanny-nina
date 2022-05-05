<template>
	<div class="w-full h-full">
		<TopNavigation text="Intake Call">
			<template #iconLeft><router-link to="/dashboard"><ChevronLeftIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col justify-center pt-12 mx-4">
				<form class="w-full" action="#" method="POST">
					<div class="mb-12">
						<h5 class="text-header-five font-semibold antialiased">Finish your application: Book a call</h5>
					</div>

					<div class="mb-12">
						<IntakeCallCard backgroundColor="bg-lilac-50" textColorHeader="text-purple-500" header="Next Step: Intake" />
					</div>

					<div class="mb-20">
						<h6 class="text-header-six font-semibold antialiased mb-2">Team Nanny Nina</h6>
						<p class="text-gray-500 mb-2">
							<a href="tel:+31 6844 8434" class="anchor-blue anchor-with-underline">+31 6844 8434</a>
							or
							<a href="mailto:aupair@nannynina.nl?subject=Waiting on subject wording" class="anchor-blue anchor-with-underline">aupair@nannynina.nl</a>
						</p>
						<p>We would love to meet you  and learn more about your family. After the call we will have all the information to start looking for your au pair. The call will only take about 10 mins and it's an old fashioned phone call!</p>
					</div>

					<div class="flex flex-col justify-center items-center mb-10">
						<AnchorPrimary text="Plan a call" class="w-button-xl text-xl py-4" />
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

export default {
	components: {
		TopNavigation,
		IntakeCallCard,
		AnchorPrimary
	}
}
</script>