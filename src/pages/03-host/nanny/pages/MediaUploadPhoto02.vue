<template>
	<div class="w-full h-full">
		<TopNavigation routerLinkPath="/dashboard" text="Media Upload">
			<QuestionMarkCircleIcon class="w-8 h-8 text-green-500" aria-hidden="true" />
		</TopNavigation>
		<main>
			<div class="flex flex-col pt-12 mx-4">
				<form action="#" method="POST">
					<SinglePhotoUpload />

					<hr class="bg-gray-500 my-6" />

					<MultiplePhotoUpload />

					<div class="mt-20">
						<div class="my-6">
							<ButtonPrimary text="Next" />
						</div>
					</div>
				</form>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../components/navigation/TopNavigation.vue'
import SinglePhotoUpload from '../../../../components/media/single-upload/SinglePhotoUpload.vue'
import MultiplePhotoUpload from '../../../../components/media/multiple-upload/MultiplePhotoUpload.vue'
import ButtonPrimary from '../../../../components/buttons/ButtonPrimary.vue'
import { QuestionMarkCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		SinglePhotoUpload,
		MultiplePhotoUpload,
		ButtonPrimary,
		QuestionMarkCircleIcon
	}
}
</script>