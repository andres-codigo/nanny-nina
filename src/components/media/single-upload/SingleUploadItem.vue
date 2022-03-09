<template>
	<div class="flex items-center justify-center mb-6">
		<span class="flex items-center justify-center relative h-56 w-56 rounded-full bg-indigo-100">
			<CameraIcon class="w-32 h-32 text-indigo-400" aria-hidden="true" />
			<span class="flex items-center justify-center absolute bottom-6 right-0 h-12 w-12 rounded-full drop-shadow-lg bg-white">
				<PlusIcon class="w-8 h-8" aria-hidden="true" />
			</span>
		</span>
	</div>
	<p class="text-sm font-light text-center text-gray-500">Size limit 5MB</p>
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