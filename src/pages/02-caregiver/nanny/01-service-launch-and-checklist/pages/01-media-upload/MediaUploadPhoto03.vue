<template>
	<div class="w-full h-full">
		<TopNavigation text="Media Upload">
			<template #iconLeft><router-link to="/dashboard"><ChevronLeftIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col pt-12 mx-4">
				<form class="w-full" action="#" method="POST">
					<SinglePhotoUpload />

					<hr class="my-6" />

					<MultiplePhotoUpload />

					<div class="mt-20">
						<div class="my-6">
							<ButtonPrimary text="Upload &amp; Continue" />
						</div>
					</div>
				</form>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../../components/navigation/TopNavigation.vue'
import SinglePhotoUpload from '../../../../../../components/media/single-upload/SinglePhotoUpload.vue'
import MultiplePhotoUpload from '../../../../../../components/media/multiple-upload/MultiplePhotoUpload.vue'
import ButtonPrimary from '../../../../../../components/buttons/ButtonPrimary.vue'

import { ChevronLeftIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		SinglePhotoUpload,
		MultiplePhotoUpload,
		ButtonPrimary,
		ChevronLeftIcon
	}
}
</script>