<template>
	<div class="w-full">
		<TopNavigation backgroundColor="bg-white-500" :dropShadow="false">
			<template #iconRight><router-link to="/dashboard"><XIcon class="w-8 h-8 text-purple-900" aria-hidden="true" /></router-link></template>
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
						src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
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

					<div class="flex flex-col w-full">
						<div class="inline-flex grow mt-4 mb-10">
							<div class="w-16">
								<img class="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt="">
							</div>
							<div class="ml-4">
								<h6 class="text-header-six font-semibold antialiased">Via friend in community</h6>
								<p class="text-sm font-thin text-gray-500">We offer rewards to both you & your referee</p>
							</div>
						</div>
						<div>
							<InputField text="Referral code" />
						</div>
					</div>

					<div class="flex flex-col justify-center items-center mt-20 mb-10">
						<ButtonPrimary text="Submit" class="w-button-lg text-xl py-4" />
					</div>
				</form>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../../components/navigation-and-tabs/TopNavigation.vue'
import ReferenceCard from '../../../../../../components/cards/reference-card/ReferenceCard.vue'
import CheckboxRightWithContainerAndLabelLeft from '../../../../../../components/form/CheckboxRightWithContainerAndLabelLeft.vue'
import InputField from '../../../../../../components/form/InputField.vue'
import ButtonPrimary from '../../../../../../components/buttons/ButtonPrimary.vue'

import { XIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		ReferenceCard,
		CheckboxRightWithContainerAndLabelLeft,
		InputField,
		ButtonPrimary,
		XIcon
	}
}
</script>