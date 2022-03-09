<script setup>
import TopNavigation from '../../../../components/navigation/TopNavigation.vue'
import ButtonPrimary from '../../../../components/buttons/ButtonPrimary.vue'
</script>

<template>
	<div class="h-full">
		<TopNavigation routerLinkPath="/dashboard" />
		<main>
			<div class="flex flex-col pt-6 mx-4">
				<form action="#" method="POST">
					<h2 class="mt-6 mb-2 text-left text-2xl font-normal text-gray-900">Let's put a face to your name</h2>
					<h3	h3 class="font-light">Preferably a smiling picture, if you have a pet or kid in it even better!</h3>

					<div class="mt-14">
						<div class="flex items-center justify-center mb-6">
							<span class="flex items-center justify-center relative h-56 w-56 rounded-full bg-indigo-100">
								<CameraIcon class="w-32 h-32 text-indigo-400" aria-hidden="true" />
								<span class="flex items-center justify-center absolute bottom-6 right-0 h-12 w-12 rounded-full drop-shadow-lg bg-white">
									<PlusIcon class="w-8 h-8" aria-hidden="true" />
								</span>
							</span>
						</div>
						<p class="text-sm font-light text-center text-gray-500">Size limit 5MB</p>
					</div>

					<hr class="bg-gray-500 my-6" />

					<div class="mt-10">
						<div class="my-6">
							<ButtonPrimary text="Next" />
						</div>
					</div>
				</form>
			</div>
		</main>
	</div>
</template>

<script>
import { CameraIcon,PlusIcon } from '@heroicons/vue/solid'

export default {
	components: {
		CameraIcon,
		PlusIcon
	}
}
</script>