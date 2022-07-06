<template>
	<div class="w-full h-full">
		<TopNavigation text="IND forms">
			<template #iconLeft><router-link to="'/dashboard?tab=2"><ChevronLeftIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
			<template #iconRight><QuestionMarkCircleIcon class="w-6 h-6 text-green-500" aria-hidden="true" /></template>
		</TopNavigation>
		<main>
			<form class="w-full" action="#" method="POST">
				<div class="flex flex-col mx-4">
					<div class="flex flex-col pt-6">
						<h4 class="text-header-four font-semibold antialiased mb-2">Awareness form</h4>
						<p class="font-light antialiased">Please download &amp; check all the boxes in the awareness form template</p>
					</div>

					<div class="flex flex-col justify-center items-center mt-6 mb-10">
						<ButtonOutlineDark class="inline-flex items-center w-button-280px h-10 text-sm leading-5 py-2">
							<template #iconWithText>
								<Img class="w-5 h-5" src="./assets/svg/other/download-black.svg" alt="" />
								<span class="pl-2">Download template</span>
							</template>
						</ButtonOutlineDark>
					</div>

					<div class="flex flex-col mt-6">
						<SinglePhotoUpload title="Upload Picture/PDF" description="Please upload your filled awareness form here." />
					</div>

					<div class="flex flex-col justify-center items-center mt-10">
						<ButtonDisabled text="Save & Continue" class="w-button-lg text-xl py-4" />
					</div>
				</div>
			</form>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation-and-tabs/TopNavigation.vue'
import Tabs from '../../../../../components/navigation-and-tabs/Tabs.vue'
import ButtonOutlineDark from '../../../../../components/buttons/ButtonOutlineDark.vue'
import SinglePhotoUpload from '../../../../../components/media/single-upload/SinglePhotoUpload.vue'
import ButtonDisabled from '../../../../../components/buttons/ButtonDisabled.vue'

import { ChevronLeftIcon, QuestionMarkCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		Tabs,
		ButtonOutlineDark,
		SinglePhotoUpload,
		ButtonDisabled,
		ChevronLeftIcon,
		QuestionMarkCircleIcon
	}
}
</script>