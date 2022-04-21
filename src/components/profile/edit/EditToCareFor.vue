<template>
	<a href="#" class="flex flex-row border-t py-6 border-gray-50">
		<div class="inline-flex grow">
			<div class="grid grid-rows-2 grid-flow-col gap-1">
				<div><h6 class="text-header-six font-semibold antialiased">To Care For</h6></div>
				<div><slot name="details"></slot></div>
			</div>
		</div>
		<div class="flex w-8 justify-end items-center">
			<ChevronRightIcon class="w-8 h-8 text-purple-900" aria-hidden="true" />
		</div>
	</a>
</template>

<script>
import { ChevronRightIcon } from '@heroicons/vue/solid'

export default {
	components: {
		ChevronRightIcon
	}
}
</script>