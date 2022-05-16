<template>
	<div class="w-full h-full">
		<TopNavigation text="Travel Document">
			<template #iconLeft><router-link to="/dashboard?tab=2"><ChevronLeftIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<Steps text="Step 1 of 1">
				<template #step-one><CurrentStep /></template>
			</Steps>
			<div class="flex flex-col pt-6 mx-4">
				<form class="w-full" action="#" method="POST">
					<h5 class="text-header-five font-semibold antialiased mb-2">Upload Passport</h5>
					<p	class="font-light">Please upload the information page of your permit/ID card</p>

					<div class="my-40">
						<SinglePhotoUploadItem />
					</div>

					<div class="flex flex-col justify-center items-center mt-20 mb-10">
						<div class="grid grid-rows-2 gap-2">
							<div><ButtonPrimary text="Submit" class="w-button-lg text-xl py-4" /></div>
							<div class="inline-flex items-center justify-center"><AnchorTextOnly text="< Back to Checklist" /></div>
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
import SinglePhotoUploadItem from '../../../../../../components/media/single-upload/SinglePhotoUploadItem.vue'
import ButtonPrimary from '../../../../../../components/buttons/ButtonPrimary.vue'
import AnchorTextOnly from '../../../../../../components/dom-elements/AnchorTextOnly.vue'

import { ChevronLeftIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		Steps,
		CurrentStep,
		SinglePhotoUploadItem,
		ButtonPrimary,
		AnchorTextOnly,
		ChevronLeftIcon
	}
}
</script>