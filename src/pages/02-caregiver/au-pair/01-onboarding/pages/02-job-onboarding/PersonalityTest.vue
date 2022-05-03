<template>
	<div class="w-full h-full">
		<TopNavigation text="Personality">
			<template #iconLeft><router-link to="/dashboard"><ChevronLeftIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col justify-center pt-12 mx-4">
				<form class="w-full" action="#" method="POST">
					<div class="mb-12">
						<h5 class="text-header-five font-semibold antialiased mb-2">Personality test</h5>
						<p class="text-sm font-light">Please choose the personality traits that best describe you. Submit when there is a total of 100</p>
					</div>

					<PercentageBar title="Quiet" />

					<PercentageBar title="Extroverted" />

					<PercentageBar title="Playful" />

				<section class="block fixed inset-x-0 w-full bottom-0 z-10 bg-white border-t border-gray min-w-360-for-dev-not-prod">
					<FixedBottomContentAndButton anchorText="Save & Continue" :isButton="true" :isButtonDisabled="true">
						<template #topText><span class="text-2xl font-bold">0</span>/100%</template>
						<template #bottomText>Total</template>
					</FixedBottomContentAndButton>
				</section>
				</form>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../../components/navigation-and-tabs/TopNavigation.vue'
import PercentageBar from '../../../../../../components/percentage-bar/PercentageBar.vue'
import FixedBottomContentAndButton from '../../../../../../components/content/fixed/FixedBottomContentAndButton.vue'

import { ChevronLeftIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		PercentageBar,
		FixedBottomContentAndButton,
		ChevronLeftIcon
	}
}
</script>