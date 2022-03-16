<script setup>
import TopNavigation from '../../../../../components/navigation/TopNavigation.vue'
import SingleVideoUpload from '../../../../../components/media/single-upload/SingleVideoUpload.vue'
import ButtonPrimary from '../../../../../components/buttons/ButtonPrimary.vue'
</script>

<template>
	<div class="w-full h-full">
		<TopNavigation routerLinkPath="/dashboard" text="Media Upload" hideIcon="true" />
		<main>
			<div class="flex flex-col pt-12 mx-4">
				<form action="#" method="POST">
					<SingleVideoUpload />

					<hr class="bg-gray-500 my-6" />

					<span class="inline-block mb-4">Tips:</span>
					<ul role="list">
						<li class="py-1 flex">
							<CheckCircleIcon class="w-4 h-4 text-blue-500" aria-hidden="true" />
							<div class="ml-3">
								<p class="text-sm font-thin text-gray-900">Keep it short. Maximum 2 minutes</p>
							</div>
						</li>
						<li class="py-1 flex">
							<CheckCircleIcon class="w-4 h-4 text-blue-500" aria-hidden="true" />
							<div class="ml-3">
								<p class="text-sm font-thin text-gray-900">Smile, make it personal. A funny detail works great</p>
							</div>
						</li>
						<li class="py-1 flex">
							<CheckCircleIcon class="w-4 h-4 text-blue-500" aria-hidden="true" />
							<div class="ml-3">
								<p class="text-sm font-thin text-gray-900">Introduce yourself  and why you’ve chosen this</p>
							</div>
						</li>
						<li class="py-1 flex">
							<CheckCircleIcon class="w-4 h-4 text-blue-500" aria-hidden="true" />
							<div class="ml-3">
								<p class="text-sm font-thin text-gray-900">Remember to share your experience with children</p>
							</div>
						</li>
					</ul>

					<div class="mt-20">
						<div class="my-6">
							<ButtonPrimary text="Upload &amp; Continue" />
						</div>
					</div>
				</form>
			</div>
		</main>
	</div>
</template>

<script>
import { CheckCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
		CheckCircleIcon
	}
}
</script>