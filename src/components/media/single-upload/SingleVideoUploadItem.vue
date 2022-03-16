<!-- TODO: bg colour and text for all states -->
<template>
	<div class="flex items-center justify-center mb-6">
		<button
			class="
				flex items-center justify-center
				relative
				h-56 w-56
				rounded-full
				bg-purple-100
				hover:border-transparent hover:text-gray-200 hover:bg-gray-100
				focus:outline-none focus:ring-2 focus:ring-offset-2
			">
			<VideoCameraIcon class="w-32 h-32 text-purple-500" aria-hidden="true" />
			<span
				class="
					flex items-center justify-center
					absolute bottom-6 right-0
					h-12 w-12
					rounded-full drop-shadow-lg
					text-gray-800
					bg-white
				">
				<PlusIcon class="w-8 h-8" aria-hidden="true" />
			</span>
		</button>
	</div>
	<p class="text-sm font-light text-center text-gray-500">Size limit 8MB</p>
</template>

<script>
import { VideoCameraIcon, PlusIcon } from '@heroicons/vue/solid'

export default {
	components: {
		VideoCameraIcon,
		PlusIcon
	}
}
</script>