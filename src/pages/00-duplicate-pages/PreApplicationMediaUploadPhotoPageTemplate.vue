<template>
	<div class="w-full h-full">
		<TopNavigation text="Media Upload">
			<template #iconLeft><router-link to="/dashboard"><ChevronLeftIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
			<template #iconRight><QuestionMarkCircleIcon class="w-6 h-6 text-green-500" aria-hidden="true" /></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col pt-12 mx-4">
				<form class="w-full" action="#" method="POST">
					<SinglePhotoUpload title="Let's put a face to your name" description="Preferably a picture of your kids/family. The best candidates apply if you have a picture" />

					<hr class="border-1 border-gray-50 my-6" />

					<MultiplePhotoUpload description="Upload more pictures for quicker response time">
						<template #title>Add more pictures <span class="text-base text-gray-500">(Optional)</span></template>
					</MultiplePhotoUpload>

					<div class="flex flex-col justify-center items-center mt-10">
						<ButtonDisabled text="Next" class="w-button-lg text-xl py-4" />
					</div>
				</form>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../components/navigation-and-tabs/TopNavigation.vue'
import SinglePhotoUpload from '../../components/media/single-upload/SinglePhotoUpload.vue'
import MultiplePhotoUpload from '../../components/media/multiple-upload/MultiplePhotoUpload.vue'
import ButtonDisabled from '../../components/buttons/ButtonDisabled.vue'

import { ChevronLeftIcon, QuestionMarkCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		SinglePhotoUpload,
		MultiplePhotoUpload,
		ButtonDisabled,
		ChevronLeftIcon,
		QuestionMarkCircleIcon
	}
}
</script>