<template>
	<div>
		<TopNavigation backgroundColor="bg-white" :dropShadow="true" headerColor="text-black" text="About You">
			<template #iconLeft><router-link to="/dashboard"><ChevronLeftIcon class="w-8 h-8 text-black" aria-hidden="true" /></router-link></template>
			<template #iconRight><DotsVerticalIcon class="w-6 h-6 text-black" aria-hidden="true" /></template>
		</TopNavigation>
		<main>
			<div class="h-full flex flex-col pt-6 mx-4">
				<h5 class="text-left text-header-five text-gray-900 antialiased my-6">Briefly describe yourself &amp; hobbies</h5>

				<div class="mt-4 mb-16">
					<Textarea text="About you" name="about-you" id="about-you" />
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
