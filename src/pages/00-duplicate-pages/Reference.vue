<template>
	<div class="w-full">
		<TopNavigation backgroundColor="bg-white-500" :displayBorderBottom="false">
			<template #iconRight><router-link to="/dashboard?tab=2"><XIcon class="w-8 h-8 text-purple-900" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col justify-center pt-12 mx-4">
				<form class="w-full" action="#" method="POST">
					<div class="mb-10">
						<h5 class="text-header-five font-semibold antialiased mb-2">How did you hear about us?</h5>
						<p class="font-light">Who is right? (There is a bet)</p>
					</div>

					<ReferenceCard
						src="https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
						name="Jasmijn"
						position="Head of Marketing &amp; Founder"
					>
						<template #content>
							<CheckboxRightWithContainerAndLabelLeft checkboxName="checkout-1" text="Social media" />
							<CheckboxRightWithContainerAndLabelLeft checkboxName="checkout-1" text="Radio" />
							<CheckboxRightWithContainerAndLabelLeft checkboxName="checkout-1" text="At school" />
						</template>
					</ReferenceCard>

					<ReferenceCard
						src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
						name="Lyla"
						position="Growth Analyst & Founder"
					>
						<template #content>
							<CheckboxRightWithContainerAndLabelLeft checkboxName="checkout-1" text="Arts en auto" />
							<CheckboxRightWithContainerAndLabelLeft checkboxName="checkout-1" text="Magazine/flyer & other prints" />
							<CheckboxRightWithContainerAndLabelLeft checkboxName="checkout-1" text="TV" />
							<CheckboxRightWithContainerAndLabelLeft checkboxName="checkout-1" text="Postcard/envelope" />
						</template>
					</ReferenceCard>

					<ReferenceCard
						src="./assets/svg/placeholder/sml-profile-placeholder.svg"
						name="David"
						position="Designer"
					>
						<template #content>
							<CheckboxRightWithContainerAndLabelLeft checkboxName="checkout-1" text="Arts en auto" />
							<CheckboxRightWithContainerAndLabelLeft checkboxName="checkout-1" text="Magazine/flyer & other prints" />
							<CheckboxRightWithContainerAndLabelLeft checkboxName="checkout-1" text="TV" />
							<CheckboxRightWithContainerAndLabelLeft checkboxName="checkout-1" text="Postcard/envelope" />
						</template>
					</ReferenceCard>

					<div class="flex flex-col w-full mb-40">
						<div class="inline-flex grow mt-4 mb-10">
							<div class="w-16">
								<Img class="h-16 w-16 rounded-full" src="./assets/svg/placeholder/sml-via-friend-placeholder.svg" alt="" />
							</div>
							<div class="ml-4">
								<h6 class="text-header-six font-semibold antialiased">Via friend in community</h6>
								<p class="text-sm text-gray-500">We offer rewards to both you & your referee</p>
							</div>
						</div>
						<div>
							<InputField text="Referral code" />
						</div>
					</div>

					<section class="flex flex-col justify-center items-center fixed inset-x-0 w-full bottom-0 z-10 bg-white border-t border-gray min-w-360-for-dev-not-prod py-6">
						<ButtonDisabled text="Submit" class="w-button-sm text-xl py-4" />
					</section>
				</form>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../components/navigation-and-tabs/TopNavigation.vue'
import ReferenceCard from '../../components/cards/reference-card/ReferenceCard.vue'
import CheckboxRightWithContainerAndLabelLeft from '../../components/form/CheckboxRightWithContainerAndLabelLeft.vue'
import Img from '../../components/dom-elements/Img.vue'
import InputField from '../../components/form/InputField.vue'
import ButtonDisabled from '../../components/buttons/ButtonDisabled.vue'

import { XIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		ReferenceCard,
		CheckboxRightWithContainerAndLabelLeft,
		Img,
		InputField,
		ButtonDisabled,
		XIcon
	}
}
</script>