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
						description="Please upload a clear and happy picture, for higher responses. If you have a pet or kid in it even better!"
					/>

					<hr class="border-1 border-gray-50 my-6" />

					<MultiplePhotoUploadFlex
						description="Add more pictures of yourself/with kids for more invites"
					>
						<template #title>Upload more pictures</template>
					</MultiplePhotoUploadFlex>

					<div
						class="flex flex-col justify-center items-center mt-10"
					>
						<div class="grid grid-rows-2 gap-2">
							<div>
								<ButtonPrimary
									text="Save & Continue"
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
import MultiplePhotoUploadFlex from '../../../../../../components/media/multiple-upload/MultiplePhotoUploadFlex.vue'
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
		MultiplePhotoUploadFlex,
		ButtonPrimary,
		AnchorTextOnly,
		ChevronLeftIcon,
	},
}
</script>
