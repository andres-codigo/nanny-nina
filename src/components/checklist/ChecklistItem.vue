<template>
	<li class="h-24 w-80">
		<a href="#" class="block mb-2 bg-white rounded-md hover:bg-gray-200 hover:rounded-md">
			<div class="px-4 py-4 flex items-center">
				<div class="flex-1">
					<div class="flex text-sm">
						<p class="font-thin text-gray-500">Pending (0/2)</p>
					</div>
					<div class="flex text-sm">
						<h2 class="mt-2 text-left text-xl font-medium text-gray-900">{{ text }}</h2>
					</div>
				</div>
				<div class="ml-5 flex-shrink-0">
					<ChevronRightIcon class="relative right-0 top-1 w-5 h-5 text-gray-400" aria-hidden="true" />
				</div>
			</div>
		</a>
	</li>
</template>

<script>
import { ChevronRightIcon } from '@heroicons/vue/solid'

export default {
	props: {
		text: String
	},
	components: {
		ChevronRightIcon,
	},
}
</script>