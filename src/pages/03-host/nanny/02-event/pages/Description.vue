<template>
	<div class="w-full h-full">
		<TopNavigation text="Event Description">
			<template #iconLeft><router-link to="/dashboard"><ChevronLeftIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
			<template #iconRight><QuestionMarkCircleIcon class="w-6 h-6 text-green-500" aria-hidden="true" /></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col pt-12 mx-4">
				<form class="w-full" action="#" method="POST">
					<h5 class="text-header-five font-semibold antialiased">Event Description</h5>

					<div class="mt-2 mb-12">
						<label for="motivation" class="sr-only">Tell us about the activities you expect from the nanny</label>
						<p	class="text-sm font-light text-gray-500">Tell us about the activities you expect from the nanny</p>
						<div class="mt-8">
							<Textarea name="motivation" id="motivation" rows="15" />
						</div>
					</div>

					<div class="flex flex-col justify-center items-center mt-10 mb-20">
						<ButtonPrimary text="Next" class="w-button-lg text-xl py-4" />
					</div>
				</form>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation-and-tabs/TopNavigation.vue'
import Textarea from '../../../../../components/form/Textarea.vue'
import ButtonPrimary from '../../../../../components/buttons/ButtonPrimary.vue'

import { ChevronLeftIcon, QuestionMarkCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		Textarea,
		ButtonPrimary,
		ChevronLeftIcon,
		QuestionMarkCircleIcon
	}
}
</script>
