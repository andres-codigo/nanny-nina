<template>
	<div class="flex items-center justify-center mb-6">
		<button
			class="flex items-center justify-center relative w-44 h-44 rounded-full bg-lilac-50 hover:border-transparent hover:bg-lilac-100 focus:border-transparent focus:bg-green-100"
		>
			<ImageComponent src="./assets/svg/media/video-camera.svg" />
			<span
				class="flex items-center justify-center absolute bottom-3 right-3 w-8 h-8 rounded-full drop-shadow-lg text-gray-800 bg-white"
			>
				<PlusIcon class="w-6 h-6" aria-hidden="true" />
			</span>
		</button>
	</div>
	<p class="text-xs font-light text-center text-gray-500">Size limit 8MB</p>
</template>

<script>
import ImageComponent from '../../dom-elements/ImageComponent.vue'
import { PlusIcon } from '@heroicons/vue/solid'

export default {
	components: {
		ImageComponent,
		PlusIcon,
	},
}
</script>
