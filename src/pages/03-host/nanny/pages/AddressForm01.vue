<template>
	<div class="w-full h-full">
		<TopNavigation text="Basic Information">
			<template #iconLeft><router-link to="/dashboard"><ChevronLeftIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
			<template #iconRight><QuestionMarkCircleIcon class="w-8 h-8 text-green-500" aria-hidden="true" /></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col pt-6 mx-4">
				<form class="w-full" action="#" method="POST">
					<h5 class="my-6 text-left text-header-five text-gray-900">Let's get to know each other</h5>

					<div class="my-16">
						<span class="inline-block font-light">When do you live?</span>

						<div class="mt-4 grid grid-cols-2 gap-y-6 gap-x-2">
							<div><InputField text="Country" /></div>
							<div><InputField text="Postcode" /></div>
						</div>

						<div class="mt-6">
							<InputField text="Number, Home address" />
						</div>

						<div class="mt-6 grid grid-cols-2 gap-y-6 gap-x-2">
							<div><InputField text="Province" /></div>
							<div><InputField text="State/City" /></div>
						</div>
					</div>

					<div class="mt-10">
						<div class="my-6">
							<ButtonPrimary text="Save &amp; Continue" />
						</div>
					</div>
				</form>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../components/navigation/TopNavigation.vue'
import InputField from '../../../../components/form/InputField.vue'
import SelectMenu from '../../../../components/form/SelectMenu.vue'
import ButtonPrimary from '../../../../components/buttons/ButtonPrimary.vue'

import { ChevronLeftIcon, QuestionMarkCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		InputField,
		SelectMenu,
		ButtonPrimary,
		ChevronLeftIcon,
		QuestionMarkCircleIcon
	}
}
</script>