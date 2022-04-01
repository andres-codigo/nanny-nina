<template>
	<div class="w-full h-full">
		<TopNavigation text="Media Upload">
			<template #iconLeft><router-link to="/dashboard"><ChevronLeftIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<Steps text="Step 2 of 2">
				<template #step-one><CompletedStep /></template>
				<template #step-two><CurrentStep /></template>
			</Steps>
			<div class="flex flex-col pt-6 mx-4">
				<form class="w-full" action="#" method="POST">
					<SingleVideoUpload />

					<hr class="border-1 border-gray-50 my-6" />

					<span class="inline-block mb-4">Tips:</span>
					<ul role="list">
						<li class="py-1 flex">
							<CheckCircleIcon class="w-4 h-4 text-purple-500" aria-hidden="true" />
							<div class="ml-3">
								<p class="text-sm leading-none font-thin text-purple-900">Keep it short. Maximum 2 minutes</p>
							</div>
						</li>
						<li class="py-1 flex">
							<CheckCircleIcon class="w-4 h-4 text-purple-500" aria-hidden="true" />
							<div class="ml-3">
								<p class="text-sm leading-none font-thin text-purple-900">Smile, make it personal. A funny detail works great</p>
							</div>
						</li>
						<li class="py-1 flex">
							<CheckCircleIcon class="w-4 h-4 text-purple-500" aria-hidden="true" />
							<div class="ml-3">
								<p class="text-sm leading-none font-thin text-purple-900">Introduce yourself  and why you’ve chosen this</p>
							</div>
						</li>
						<li class="py-1 flex">
							<CheckCircleIcon class="w-4 h-4 text-purple-500" aria-hidden="true" />
							<div class="ml-3">
								<p class="text-sm leading-none font-thin text-purple-900">Remember to share your experience with children</p>
							</div>
						</li>
					</ul>

					<div class="flex flex-col justify-center items-center mt-10">
						<ButtonPrimary text="Submit" class="w-button-lg text-xl py-4" />
					</div>
				</form>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../../components/navigation/TopNavigation.vue'

import Steps from '../../../../../../components/steps/Steps.vue'
import CompletedStep from '../../../../../../components/steps/types/CompletedStep.vue'
import CurrentStep from '../../../../../../components/steps/types/CurrentStep.vue'
import UpcomingStep from '../../../../../../components/steps/types/UpcomingStep.vue'

import SingleVideoUpload from '../../../../../../components/media/single-upload/SingleVideoUpload.vue'
import ButtonPrimary from '../../../../../../components/buttons/ButtonPrimary.vue'

import { ChevronLeftIcon, CheckCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		Steps,
		CompletedStep,
		CurrentStep,
		UpcomingStep,
		SingleVideoUpload,
		ButtonPrimary,
		ChevronLeftIcon,
		CheckCircleIcon
	}
}
</script>