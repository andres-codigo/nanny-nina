<template>
	<div class="w-full h-full">
		<TopNavigation text="Event Booking">
			<template #iconLeft><router-link to="/dashboard?tab=3"><ChevronLeftIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
			<template #iconRight><QuestionMarkCircleIcon class="w-6 h-6 text-green-500" aria-hidden="true" /></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col pt-12 mx-4">
				<form class="w-full" action="#" method="POST">
					<h5 class="text-header-five font-semibold antialiased mb-6">Event Information</h5>

					<div class="mb-10">
						<p class="font-thin">What type of event do you have?</p>
						<div class="mt-4 grid grid-cols-2 gap-x-2">
							<div><SelectMenu optionText="- Select number -" /></div>
						</div>
					</div>

					<div class="flex flex-col mb-10">
						<p class="font-thin">When is this event happening?</p>
						<div class="grid grid-cols-2 gap-4 gap-y-6 gap-x-2 mt-4">
							<div><InputField text="Date" /></div>
							<div>&nbsp;</div>

							<div><InputField text="Start Time" /></div>
							<div><InputField text="End Time" /></div>
						</div>
					</div>

					<div class="flex flex-col mb-10">
						<h5 class="text-header-five font-semibold antialiased mb-2">Approximately, how many children do you expect?</h5>
						<p	class="text-sm font-light">We recommend asking for 1 nanny per +-5 children. This depends on the age of the kids and the activity at the event. For tips / advice, please contact customer care for advice.</p>
					</div>

					<div class="mb-10">
						<SelectMenuRightWithTextAndSubtextLeft text="Newborns" subText="2 months old or less" />
						<SelectMenuRightWithTextAndSubtextLeft text="Infants" subText="2yrs &amp; under" />
						<SelectMenuRightWithTextAndSubtextLeft text="Toddlers" subText="1-4yrs" />
						<SelectMenuRightWithTextAndSubtextLeft text="Older Children" subText="7yrs &amp; above" />
					</div>

					<div class="mb-10">
						<h5 class="text-header-five font-semibold antialiased mb-2">How many nannies do you need?</h5>
						<p class="font-thin">Based on total above, we advise at least 2 nannies.</p>
						<div class="mt-4 grid grid-cols-2 gap-x-2">
							<div><SelectMenu optionText="1" class="w-24" /></div>
						</div>
					</div>

					<div class="mb-10">
						<div class="mb-2">
							<p class="font-thin mb-2">Will there be pets?</p>
							<RadioQuestionsLabelLeftInputRight :screenReaderOnly="true" legend="Will there be pets?" questionOneText="Yes" questionTwoText="No" />
						</div>

						<p class="font-thin">Please specify</p>
						<div class="grid grid-cols-2 gap-y-6 gap-x-2">
							<div><SelectMenu class="mt-2" /></div>
							<div class="grid grid-rows-2 grid-flow-col gap-x-0 justify-center">
								<div><BadgeRemove text="Cats" /></div>
								<div><BadgeRemove text="Dogs" /></div>
								<div><BadgeRemove text="Birds" /></div>
							</div>
						</div>
					</div>

					<div class="flex flex-col justify-center items-center mt-20 mb-10">
						<ButtonPrimary text="Next" class="w-button-lg text-xl py-4" />
					</div>
				</form>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation-and-tabs/TopNavigation.vue'
import InputField from '../../../../../components/form/InputField.vue'
import SelectMenu from '../../../../../components/form/SelectMenu.vue'
import SelectMenuRightWithTextAndSubtextLeft from '../../../../../components/form/SelectMenuRightWithTextAndSubtextLeft.vue'
import RadioQuestionsLabelLeftInputRight from '../../../../../components/form/RadioQuestionsLabelLeftInputRight.vue'
import BadgeRemove from '../../../../../components/badge/BadgeRemove.vue'
import ButtonPrimary from '../../../../../components/buttons/ButtonPrimary.vue'

import { ChevronLeftIcon, PlusIcon, QuestionMarkCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		InputField,
		SelectMenu,
		SelectMenuRightWithTextAndSubtextLeft,
		RadioQuestionsLabelLeftInputRight,
		BadgeRemove,
		ButtonPrimary,
		ChevronLeftIcon,
		PlusIcon,
		QuestionMarkCircleIcon
	}
}
</script>