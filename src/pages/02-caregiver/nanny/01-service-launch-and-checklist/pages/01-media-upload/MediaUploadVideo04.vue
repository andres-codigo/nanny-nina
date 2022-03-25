<template>
	<div class="w-full h-full">
		<TopNavigation text="Media Upload">
			<template #iconLeft><router-link to="/dashboard"><ChevronLeftIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col pt-12 mx-4">
				<form class="w-full" action="#" method="POST">
					<SingleVideoUpload />

					<hr class="my-6" />

					<span class="inline-block mb-4">Tips:</span>
					<ul role="list">
						<li class="py-1 flex">
							<CheckCircleIcon class="w-4 h-4 text-lilac-500" aria-hidden="true" />
							<div class="ml-3">
								<p class="text-sm font-thin text-gray-900">Keep it short. Maximum 2 minutes</p>
							</div>
						</li>
						<li class="py-1 flex">
							<CheckCircleIcon class="w-4 h-4 text-lilac-500" aria-hidden="true" />
							<div class="ml-3">
								<p class="text-sm font-thin text-gray-900">Smile, make it personal. A funny detail works great</p>
							</div>
						</li>
						<li class="py-1 flex">
							<CheckCircleIcon class="w-4 h-4 text-lilac-500" aria-hidden="true" />
							<div class="ml-3">
								<p class="text-sm font-thin text-gray-900">Introduce yourself  and why you’ve chosen this</p>
							</div>
						</li>
						<li class="py-1 flex">
							<CheckCircleIcon class="w-4 h-4 text-lilac-500" aria-hidden="true" />
							<div class="ml-3">
								<p class="text-sm font-thin text-gray-900">Remember to share your experience with children</p>
							</div>
						</li>
					</ul>

					<div class="mt-20">
						<ButtonPrimary text="Upload &amp; Continue" />
					</div>
				</form>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../../components/navigation/TopNavigation.vue'
import SingleVideoUpload from '../../../../../../components/media/single-upload/SingleVideoUpload.vue'
import ButtonPrimary from '../../../../../../components/buttons/ButtonPrimary.vue'

import { ChevronLeftIcon, CheckCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		SingleVideoUpload,
		ButtonPrimary,
		ChevronLeftIcon,
		CheckCircleIcon
	}
}
</script>