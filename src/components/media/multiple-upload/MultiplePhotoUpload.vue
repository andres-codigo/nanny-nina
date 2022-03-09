<template>
	<div>
		<h2 class="mt-6 mb-2 text-left text-2xl font-normal text-gray-900">Upload more pictures</h2>
		<h3	h3 class="font-light">Add more pictures of you with kids/home</h3>

		<div class="mt-7">
			<div class="flex flex-nowrap items-center justify-center gap-3 mb-6">
				<span class="flex shrink items-center justify-center relative h-44 w-32 rounded-lg bg-indigo-100">
					<span class="flex items-center justify-center h-12 w-12">
						<PlusIcon class="w-8 h-8 text-indigo-500" aria-hidden="true" />
					</span>
				</span>
				<span class="flex shrink items-center justify-center relative h-44 w-32 rounded-lg bg-indigo-100">
					<span class="flex items-center justify-center h-12 w-12">
						<PlusIcon class="w-8 h-8 text-indigo-500" aria-hidden="true" />
					</span>
				</span>
				<span class="flex shrink items-center justify-center relative h-44 w-32 rounded-lg bg-indigo-100">
					<span class="flex items-center justify-center h-12 w-12">
						<PlusIcon class="w-8 h-8 text-indigo-500" aria-hidden="true" />
					</span>
				</span>
			</div>
			<p class="text-sm font-light text-center text-gray-500">Size limit for each 5MB</p>
		</div>
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