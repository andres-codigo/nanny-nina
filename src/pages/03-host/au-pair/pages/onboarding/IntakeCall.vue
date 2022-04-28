<template>
	<div class="w-full h-full">
		<TopNavigation text="Intake Call">
			<template #iconLeft><router-link to="/dashboard"><ChevronLeftIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col justify-center pt-12 mx-4">
				<form class="w-full" action="#" method="POST">
					<div class="mb-12">
						<h5 class="text-header-five font-semibold antialiased">Finish you application: Book a call</h5>
					</div>

					<div class="mb-12">
						<IntakeCallCard backgroundColor="bg-lilac-50" textColorHeader="text-purple-500" header="Next Step: Intake" />
					</div>

					<div class="mb-20">
						<h6 class="text-header-six font-semibold antialiased mb-2">Team Nanny Nina</h6>
						<p class="text-sm text-gray-500 mb-2">+31 6844 8434  or aupair@nannynina.nl</p>
						<p>We would love to meet you  and learn more about your family. After the call we will have all the information to start looking for your au pair. The call will only take about 10 mins and it's an old fashioned phone call!</p>
					</div>

					<div class="flex flex-col justify-center items-center">
						<div class="grid grid-rows-2 gap-2">
							<div><AnchorPrimary text="Leave a message" class="w-button-xl text-xl py-4" /></div>
							<div><AnchorPrimary text="Plan a call" class="w-button-xl text-xl py-4" /></div>
						</div>
						<a href="#" target="_self" class="anchor-with-underline text-white text-center font-medium mt-8">Learn more about being a Nanny</a>
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