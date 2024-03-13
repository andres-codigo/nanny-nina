<template>
	<div class="w-full h-full">
		<TopNavigation text="Media Upload">
			<template #iconLeft
				><router-link to="/dashboard?tab=2"
					><ChevronLeftIcon
						class="w-8 h-8 text-white"
						aria-hidden="true" /></router-link
			></template>
		</TopNavigation>
		<main>
			<Steps text="Step 1 of 2">
				<template #step-one><CurrentStep /></template>
				<template #step-two><UpcomingStep /></template>
			</Steps>
			<div class="flex flex-col pt-6 mx-4">
				<form class="w-full" action="#" method="POST">
					<SinglePhotoUpload
						title="Upload Profile Picture"
						description="Preferably a picture of  your kids/family. The best candidates apply if you have a picture"
					/>

					<hr class="border-1 border-gray-50 my-6" />

					<MultiplePhotoUploadGrid
						description="Add more pictures of you with kids /pets"
					>
						<template #title
							>Upload more pictures
							<span class="text-sm text-gray-500"
								>(Optional)</span
							></template
						>
					</MultiplePhotoUploadGrid>

					<div
						class="flex flex-col justify-center items-center mt-10"
					>
						<div class="grid grid-rows-2 gap-2">
							<div>
								<ButtonPrimary
									text="Continue"
									classes="w-button-lg text-xl py-4"
								/>
							</div>
							<div
								class="inline-flex items-center justify-center"
							>
								<AnchorTextOnly text="< Back to Checklist" />
							</div>
						</div>
					</div>
				</form>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../../components/navigation-and-tabs/TopNavigation.vue'

import Steps from '../../../../../../components/steps/Steps.vue'
import CurrentStep from '../../../../../../components/steps/types/CurrentStep.vue'
import UpcomingStep from '../../../../../../components/steps/types/UpcomingStep.vue'

import SinglePhotoUpload from '../../../../../../components/media/single-upload/SinglePhotoUpload.vue'
import MultiplePhotoUploadGrid from '../../../../../../components/media/multiple-upload/MultiplePhotoUploadGrid.vue'
import ButtonPrimary from '../../../../../../components/buttons/ButtonPrimary.vue'
import AnchorTextOnly from '../../../../../../components/dom-elements/AnchorTextOnly.vue'

import { ChevronLeftIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		Steps,
		CurrentStep,
		UpcomingStep,
		SinglePhotoUpload,
		MultiplePhotoUploadGrid,
		ButtonPrimary,
		AnchorTextOnly,
		ChevronLeftIcon,
	},
}
</script>
