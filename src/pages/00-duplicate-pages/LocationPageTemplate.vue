<template>
	<div class="w-full">
		<TopNavigation backgroundColor="bg-white" headerColor="text-purple-900" text="Location">
			<template #iconRight><router-link to="/dashboard"><XIcon class="w-8 h-8 text-purple-900" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<div class="h-screen flex flex-col mx-4">
				<h4 class="text-center text-header-four font-semibold antialiased my-12">{{ title }}</h4>

				<form class="w-full" action="#" method="POST">
					<div class="flex flex-col">
						<div class="grid grid-cols-2 gap-4 gap-y-6 gap-x-2">
							<div><InputField text="Country" /></div>
							<div><InputField text="Postcode" /></div>
						</div>

						<div class="grid grid-cols-1 gap-4 gap-y-6 gap-x-2 mt-6">
							<div><InputField text="Number, Home Address" /></div>
						</div>

						<div class="grid grid-cols-2 gap-4 gap-y-6 gap-x-2 mt-6">
							<div><InputField text="Province" /></div>
							<div><InputField text="State/City" /></div>
						</div>
					</div>

					<div class="flex flex-col justify-center items-center mt-14">
						<div class="mt-40 mb-4">
							<ButtonPrimary text="Next" class="w-button-lg text-xl py-4" />
						</div>
					</div>
				</form>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../components/navigation/TopNavigation.vue'
import InputField from '../../components/form/InputField.vue'
import ButtonPrimary from '../../components/form/buttons/ButtonPrimary.vue'

import { XIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		InputField,
		ButtonPrimary,
		XIcon
	},
	props: {
		title: String
	}
}
</script>