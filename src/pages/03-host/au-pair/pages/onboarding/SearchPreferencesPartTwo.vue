<template>
	<div class="w-full h-full">
		<TopNavigation text="Search Preferences">
			<template #iconLeft><router-link to="/dashboard?tab=3"><ChevronLeftIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col justify-center pt-12 mx-4">
				<form class="w-full" action="#" method="POST">
					<h5 class="text-header-five font-semibold antialiased mb-6">Duration</h5>

					<div class="mb-10">
						<p class="font-thin">When do you expect to host an au pair?</p>
						<p class="text-sm text-gray-500 font-thin mb-2">This is an estimated period, no pressure</p>
						<div class="grid grid-cols-2 gap-4 gap-y-6 gap-x-2 mt-4">
							<div><InputField :hasLeadingIcon="true" inputIconType="calendar" placeholder="DD/MM/YYYY" text="Starting from" /></div>
							<div><InputField :hasLeadingIcon="true" inputIconType="calendar" placeholder="DD/MM/YYYY" text="Ending on" /></div>
						</div>
					</div>

					<div class="mb-10">
						<p class="font-thin">What is the length of stay?</p>
						<p class="text-sm text-gray-500 font-thin mb-2">This is an estimated period</p>
						<div class="grid grid-cols-2 gap-4 gap-y-6 gap-x-2 mt-4">
							<div><SelectMenu labelText="Minimum" optionText="Select" /></div>
							<div><SelectMenu labelText="Maximum" optionText="Select" /></div>
						</div>
					</div>

					<div class="mt-4 mb-8">
						<h5 class="text-header-five font-semibold antialiased mb-4">Past Experience</h5>
						<p class="font-thin mb-2">Have you previously hosted an au pair?</p>
						<RadioQuestionsLabelLeftInputRight :screenReaderOnly="true" legend="Have you cared for children or elderly before?" questionOneText="Yes" questionTwoText="No" />
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
import TopNavigation from '../../../../../components/navigation-and-tabs/TopNavigation.vue'
import InputField from '../../../../../components/form/InputField.vue'
import SelectMenu from '../../../../../components/form/SelectMenu.vue'
import RadioQuestionsLabelLeftInputRight from '../../../../../components/form/RadioQuestionsLabelLeftInputRight.vue'
import ButtonPrimary from '../../../../../components/buttons/ButtonPrimary.vue'


import { ChevronLeftIcon, PlusIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		InputField,
		SelectMenu,
		RadioQuestionsLabelLeftInputRight,
		ButtonPrimary,
		ChevronLeftIcon,
		PlusIcon
	}
}
</script>