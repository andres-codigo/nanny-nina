<template>
	<div class="w-full h-full">
		<TopNavigation text="Personality">
			<template #iconLeft><router-link to="/dashboard"><ChevronLeftIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col justify-center pt-12 mx-4">
				<form class="w-full" action="#" method="POST">
					<div class="mb-12">
						<h5 class="text-left text-header-five font-semibold antialiased mb-2">Personality test</h5>
						<p class="text-sm  font-light">Please choose the personality that best describes you. You can submit when it's a 100 total</p>
					</div>

					<PercentageBar title="Quiet" />

					<PercentageBar title="Extroverted" />

					<PercentageBar title="Playful" />
				</form>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation-and-tabs/TopNavigation.vue'
import PercentageBar from '../../../../../components/percentage-bar/PercentageBar.vue'

import { ChevronLeftIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		PercentageBar,
		ChevronLeftIcon
	}
}
</script>