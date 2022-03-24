<template>
	<div class="w-full h-full">
		<TopNavigation backgroundColor="bg-white" headerColor="text-black" text="Motivation">
			<template #iconLeft><router-link to="/dashboard"><ChevronLeftIcon class="w-8 h-8 text-black" aria-hidden="true" /></router-link></template>
			<template #iconRight><DotsVerticalIcon class="w-6 h-6 text-black" aria-hidden="true" /></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col pt-6 mx-4">
				<h5 class="my-6 text-left text-header-five font-normal text-gray-900">Why should you be considered for nanny jobs?</h5>

				<div class="mt-4 mb-16">
					<Textarea text="Motivation for Applying" name="motivation" id="motivation" />
				</div>

				<div class="mt-10">
					<ButtonPrimary text="Save &amp; Continue" />
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation/TopNavigation.vue'
import Textarea from '../../../../../components/form/Textarea.vue'
import ButtonPrimary from '../../../../../components/buttons/ButtonPrimary.vue'

import { ChevronLeftIcon, DotsVerticalIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		Textarea,
		ButtonPrimary,
		ChevronLeftIcon,
		DotsVerticalIcon
	}
}
</script>
