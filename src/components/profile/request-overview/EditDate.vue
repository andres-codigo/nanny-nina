<template>
	<a href="#" class="flex flex-row border-t py-6 border-gray-50">
		<div class="flex-none w-5">
			<CalendarIcon />
		</div>
		<div class="inline-flex grow items-center ml-2">
			<div class="grid grid-rows-3 grid-flow-col gap-1">
				<div>
					<h6 class="text-header-six font-bold">
						<slot name="header"></slot>
					</h6>
				</div>
				<div>
					<slot name="date"></slot>
				</div>
				<div>
					<slot name="time"></slot>
				</div>
			</div>
		</div>
		<div class="flex w-12 justify-end items-center">
			<ChevronRightIcon class="w-8 h-8 text-purple-900" aria-hidden="true" />
		</div>
	</a>
</template>

<script>
import { CalendarIcon, ChevronRightIcon } from '@heroicons/vue/solid'

export default {
	components: {
		CalendarIcon,
		ChevronRightIcon
	}
}
</script>