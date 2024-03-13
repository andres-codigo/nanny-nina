<template>
	<div class="w-full h-full">
		<TopNavigation text="Media Upload">
			<template #iconLeft
				><router-link :to="'/dashboard?tab=' + activeTab"
					><ChevronLeftIcon
						class="w-8 h-8 text-white"
						aria-hidden="true" /></router-link
			></template>
			<template #iconRight
				><QuestionMarkCircleIcon
					class="w-6 h-6 text-green-500"
					aria-hidden="true"
			/></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col pt-12 mx-4">
				<form class="w-full" action="#" method="POST">
					<SinglePhotoUpload
						title="Let's put a face to your name"
						description="Preferably a picture of your kids/family. The best candidates apply if you have a picture"
					/>

					<hr class="border-1 border-gray-50 my-6" />

					<MultiplePhotoUploadFlex
						description="Upload more pictures for quicker response time"
					>
						<template #title
							>Add more pictures
							<span class="text-base text-gray-500"
								>(Optional)</span
							></template
						>
					</MultiplePhotoUploadFlex>

					<div
						class="flex flex-col justify-center items-center mt-10"
					>
						<ButtonDisabled
							text="Next"
							classes="w-button-lg text-xl py-4"
						/>
					</div>
				</form>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../components/navigation-and-tabs/TopNavigation.vue'
import SinglePhotoUpload from '../../components/media/single-upload/SinglePhotoUpload.vue'
import MultiplePhotoUploadFlex from '../../components/media/multiple-upload/MultiplePhotoUploadFlex.vue'
import ButtonDisabled from '../../components/buttons/ButtonDisabled.vue'

import { ChevronLeftIcon, QuestionMarkCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		SinglePhotoUpload,
		MultiplePhotoUploadFlex,
		ButtonDisabled,
		ChevronLeftIcon,
		QuestionMarkCircleIcon,
	},
	data() {
		return {
			activeTab: 1,
		}
	},
	mounted() {
		if (
			window.location.href.indexOf(
				'caregiver-nanny-service-onboarding'
			) != -1
		) {
			this.activeTab = 2
		} else if (window.location.href.indexOf('host-nanny') != -1) {
			this.activeTab = 3
		}
	},
}
</script>
