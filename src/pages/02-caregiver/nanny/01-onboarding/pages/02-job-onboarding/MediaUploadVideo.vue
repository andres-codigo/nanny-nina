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
							<CheckCircleIcon
								class="w-4 h-4 text-purple-500"
								aria-hidden="true"
							/>
							<div class="ml-3">
								<p class="text-sm leading-none font-thin">
									Keep it short. Maximum 2 minutes
								</p>
							</div>
						</li>
						<li class="py-1 flex">
							<CheckCircleIcon
								class="w-4 h-4 text-purple-500"
								aria-hidden="true"
							/>
							<div class="ml-3">
								<p class="text-sm leading-none font-thin">
									Smile, make it personal. A funny detail
									works great
								</p>
							</div>
						</li>
						<li class="py-1 flex">
							<CheckCircleIcon
								class="w-4 h-4 text-purple-500"
								aria-hidden="true"
							/>
							<div class="ml-3">
								<p class="text-sm leading-none font-thin">
									Introduce yourself and why you've chosen
									this
								</p>
							</div>
						</li>
						<li class="py-1 flex">
							<CheckCircleIcon
								class="w-4 h-4 text-purple-500"
								aria-hidden="true"
							/>
							<div class="ml-3">
								<p class="text-sm leading-none font-thin">
									Remember to share your experience with
									children
								</p>
							</div>
						</li>
					</ul>

					<div
						class="flex flex-col justify-center items-center mt-10"
					>
						<div class="grid grid-rows-2 gap-2">
							<div>
								<ButtonPrimary
									text="Next"
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
import CompletedStep from '../../../../../../components/steps/types/CompletedStep.vue'
import CurrentStep from '../../../../../../components/steps/types/CurrentStep.vue'

import SingleVideoUpload from '../../../../../../components/media/single-upload/SingleVideoUpload.vue'
import ButtonPrimary from '../../../../../../components/buttons/ButtonPrimary.vue'
import AnchorTextOnly from '../../../../../../components/dom-elements/AnchorTextOnly.vue'

import { ChevronLeftIcon, CheckCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		Steps,
		CompletedStep,
		CurrentStep,
		SingleVideoUpload,
		ButtonPrimary,
		AnchorTextOnly,
		ChevronLeftIcon,
		CheckCircleIcon,
	},
}
</script>
