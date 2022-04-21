<template>
	<div class="w-full h-full bg-purple-500">
		<TopNavigation :hideHeader="true">
			<template #iconLeft><router-link to="/dashboard"><ChevronLeftIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<div class="h-screen flex flex-col mx-4">
				<div class="mt-16 mx-9">
					<h2 class="text-header-two font-medium text-green-500 text-center antialiased mb-6">Let's help you find the perfect jobs for you</h2>
					<p class="font-thin text-white text-center">Let's know your personal preferences </p>
				</div>
				<div class="flex items-center justify-center">
					<!--
						Image svg here
						<img src="*.svg" />
					-->
				</div>

				<div class="mt-96">
					<ButtonSecondary text="Get Started" />
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../../components/navigation/TopNavigation.vue'
import ButtonSecondary from '../../../../../../components/buttons/ButtonSecondary.vue'

import { ChevronLeftIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		ButtonSecondary,
		ChevronLeftIcon
	}
}
</script>