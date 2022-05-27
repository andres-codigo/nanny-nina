<template>
	<div class="w-full h-full">
		<TopNavigation text="Voucher">
			<template #iconLeft><router-link to="'/dashboard?tab=1"><ChevronLeftIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col mx-4">
				<div class="pt-6 mb-10">
					<div class="inline-flex items-center justify-center w-full h-52 bg-purple-50 text-purple-500 text-9xl font-bold mb-6">-10%</div>
					<h5 class="text-header-five font-bold antialiased mb-2">-10% Off your next booking</h5>
					<p class="font-light antialiased">You can either add this to your booking payment or copy the code below to gift to a friend.</p>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation-and-tabs/TopNavigation.vue'

import { ChevronLeftIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		ChevronLeftIcon
	}
}
</script>