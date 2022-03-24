<template>
	<div class="w-full h-full">
		<TopNavigation text="Nanny Form">
			<template #iconLeft><router-link to="/dashboard"><ChevronLeftIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col pt-6 mx-4">
				<form action="#" method="POST">
					<div class="mt-4">
						<CheckboxWithContainerAndLabel text="Pets" />
						<CheckboxWithContainerAndLabel text="Meal preparation" />
						<CheckboxWithContainerAndLabel text="Housekeeping" />
						<CheckboxWithContainerAndLabel text="Comfortable driving kids" />
						<CheckboxWithContainerAndLabel text="Pick up from school" />
						<CheckboxWithContainerAndLabel text="Educational support" />
						<CheckboxWithContainerAndLabel text="Available on short notice" />
						<CheckboxWithContainerAndLabel text="Non-smoking" />
						<CheckboxWithContainerAndLabel text="More than 2 kids" />
						<CheckboxWithContainerAndLabel text="Bathing" />
					</div>

					<div class="mt-14">
						<ButtonPrimary text="Save &amp; Continue" />
					</div>
				</form>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../../components/navigation/TopNavigation.vue'
import CheckboxWithContainerAndLabel from '../../../../../../components/form/CheckboxWithContainerAndLabel.vue'
import ButtonPrimary from '../../../../../../components/buttons/ButtonPrimary.vue'

import { ChevronLeftIcon, PlusIcon, QuestionMarkCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		CheckboxWithContainerAndLabel,
		ButtonPrimary,
		ChevronLeftIcon,
		PlusIcon,
		QuestionMarkCircleIcon
	}
}
</script>