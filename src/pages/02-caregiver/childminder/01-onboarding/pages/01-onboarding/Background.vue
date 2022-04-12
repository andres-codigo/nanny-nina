<template>
	<div class="w-full h-full">
		<TopNavigation text="Nanny Form">
			<template #iconLeft><router-link to="/dashboard"><ChevronLeftIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col pt-12 mx-4">
				<form class="w-full" action="#" method="POST">
					<h5 class="text-left text-header-five font-semibold antialiased mb-4">Type of Childminder</h5>
					<p class="font-thin mb-4">What kind of childminder are you?</p>

					<RadioQuestion
						:screenReaderOnly="true"
						:sideBySideRadioButtons="false"
						:isQuestionOne="true"
						questionOneText="ZZP (Own home or Parent's)"
						questionOneSubText="You are a registered childcare professional, can host and work flexibly"
						:questionOneSubTextHidden="false"
						questionTwoText="Regeling dienstverlening aan huis"
						questionTwoSubText="You are unregistered with the government and can only work at parent's"
						:questionTwoSubTextHidden="false"
						:hasThirdQuestion="true"
						questionThreeText="I don't have a formal education"
						questionThreeSubText="I'll figure it out later"
						:questionThreeSubTextHidden="false"
					/>

					<div class="flex flex-col justify-center items-center mt-20">
						<ButtonPrimary text="Next" class="w-button-lg text-xl py-4" />
					</div>
				</form>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../../components/navigation/TopNavigation.vue'
import RadioWithContainerAndLabel from '../../../../../../components/form/RadioWithContainerAndLabel.vue'
import SelectMenu from '../../../../../../components/form/SelectMenu.vue'
import RadioQuestion from '../../../../../../components/form/RadioQuestion.vue'
import InputFieldBorderBottomOnly from '../../../../../../components/form/InputFieldBorderBottomOnly.vue'
import ButtonOutlineDark from '../../../../../../components/buttons/ButtonOutlineDark.vue'
import BadgeRemove from '../../../../../../components/badge/BadgeRemove.vue'
import ButtonPrimary from '../../../../../../components/buttons/ButtonPrimary.vue'

import { ChevronLeftIcon, PlusIcon, QuestionMarkCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		RadioWithContainerAndLabel,
		SelectMenu,
		RadioQuestion,
		InputFieldBorderBottomOnly,
		ButtonOutlineDark,
		BadgeRemove,
		ButtonPrimary,
		ChevronLeftIcon,
		PlusIcon,
		QuestionMarkCircleIcon
	}
}
</script>