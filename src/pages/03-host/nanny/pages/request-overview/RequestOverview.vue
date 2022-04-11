<template>
	<div class="w-full">
		<TopNavigation backgroundColor="bg-white" :dropShadow="true" headerColor="text-purple-900" text="Request Overview">
			<template #iconLeft><router-link to="/dashboard"><ChevronLeftIcon class="w-8 h-8 text-purple-900" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<div class="h-screen flex flex-col pt-12 mx-4">
				<Details />
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation/TopNavigation.vue'
import Details from './Details.vue'

import { ChevronLeftIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		Details,
		ChevronLeftIcon
	}
}
</script>
