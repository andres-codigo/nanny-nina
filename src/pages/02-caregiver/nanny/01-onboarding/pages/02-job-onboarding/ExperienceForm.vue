<template>
	<div class="w-full h-full">
		<TopNavigation text="Nanny Form">
			<template #iconLeft><router-link to="/dashboard"><ChevronLeftIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col pt-6 mx-4">
				<form class="w-full" action="#" method="POST">
					<h5 class="text-left text-header-five font-semibold antialiased my-6">Experience</h5>

					<div class="mt-4 mb-8">
						<div>
							<p class="font-thin">Have you cared for children or elderly before?</p>
							<p class="text-sm text-gray-500 font-thin mb-2">This doesn't have to be a professional experience</p>
							<RadioQuestion :screenReaderOnly="true" legend="Have you cared for children or elderly before?" questionOneText="Yes" questionTwoText="No" />
						</div>
					</div>

					<div class="mb-10">
						<p class="font-thin">How many years of experience do you have as a nanny?</p>
						<div class="mt-4 grid grid-cols-2 gap-x-2">
							<div><SelectMenu optionText="1" class="w-1/2" /></div>
						</div>
					</div>

					<div class="mt-4 mb-16">
						<h5 class="text-left text-header-five font-semibold antialiased mt-8 mb-2">Caring For</h5>
						<p class="font-thin">What age range have you cared for in the past?</p>
						<div class="mt-4">
							<CheckboxRightWithContainerAndLabelLeft :showSubText="true" checkboxName="checkout-1" text="Newborns" subText="2 months old or less" />
							<CheckboxRightWithContainerAndLabelLeft :showSubText="true" checkboxName="checkout-2" text="Infants" subText="From birth-2yrs" />
							<CheckboxRightWithContainerAndLabelLeft :showSubText="true" checkboxName="checkout-3" text="Toddlers" subText="3-6yrs" />
							<CheckboxRightWithContainerAndLabelLeft :showSubText="true" checkboxName="checkout-4" text="Older Children" subText="7yrs &amp; above" />
						</div>
					</div>

					<div class="flex flex-col justify-center items-center mt-20">
						<ButtonPrimary text="Next" class="w-button-lg text-xl py-4" />
					</div>
				</form>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../../components/navigation-and-tabs/TopNavigation.vue'
import SelectMenu from '../../../../../../components/form/SelectMenu.vue'
import RadioQuestion from '../../../../../../components/form/RadioQuestion.vue'
import CheckboxRightWithContainerAndLabelLeft from '../../../../../../components/form/CheckboxRightWithContainerAndLabelLeft.vue'
import ButtonPrimary from '../../../../../../components/buttons/ButtonPrimary.vue'

import { ChevronLeftIcon, PlusIcon, QuestionMarkCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		SelectMenu,
		RadioQuestion,
		CheckboxRightWithContainerAndLabelLeft,
		ButtonPrimary,
		ChevronLeftIcon,
		PlusIcon,
		QuestionMarkCircleIcon
	}
}
</script>