<template>
	<div>
		<TopNavigation text="Request Note">
			<template #iconLeft><router-link to="/dashboard"><ChevronLeftIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
			<template #iconRight><QuestionMarkCircleIcon class="w-6 h-6 text-green-500" aria-hidden="true" /></template>
		</TopNavigation>
		<main>
			<div class="h-full flex flex-col pt-12 mx-4">
				<h5 class="text-left text-header-five font-semibold antialiased">Request Note</h5>

				<div class="mt-2 mb-10">
					<label for="motivation" class="sr-only">We need your help! We are a Dutch family with two kids (girl 3yrs old and boy 4yrs old). They love to play outside, bake (and eat!) cookies and cake.</label>
					<p	class="text-sm font-light text-gray-500">We need your help! We are a Dutch family with two kids (girl 3yrs old and boy 4yrs old). They love to play outside, bake (and eat!) cookies and cake.</p>
					<div class="mt-8">
						<Textarea text="Motivation for Applying" name="motivation" id="motivation" />
					</div>
				</div>

				<div class="flex flex-col justify-center items-center mt-10">
					<ButtonPrimary text="Next" class="w-button-lg text-xl py-4" />
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../components/navigation/TopNavigation.vue'
import Textarea from '../../../../components/form/Textarea.vue'
import ButtonPrimary from '../../../../components/buttons/ButtonPrimary.vue'

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
