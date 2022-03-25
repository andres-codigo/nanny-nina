<template>
	<div class="w-full h-full">
		<TopNavigation text="Media Upload">
			<template #iconLeft><router-link to="/dashboard"><ChevronLeftIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col pt-12 mx-4">
				<form class="w-full" action="#" method="POST">
					<Front />

					<hr class="my-6" />

					<Back />

					<div class="mt-20">
						<ButtonDisabled text="Upload &amp; Continue" />
					</div>
				</form>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../../components/navigation/TopNavigation.vue'
import Front from '../../../../../../components/media/identification/Front.vue'
import Back from '../../../../../../components/media/identification/Back.vue'
import ButtonDisabled from '../../../../../../components/buttons/ButtonDisabled.vue'

import { ChevronLeftIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		Front,
		Back,
		ButtonDisabled,
		ChevronLeftIcon
	}
}
</script>