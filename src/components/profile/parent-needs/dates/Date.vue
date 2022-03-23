<template>
	<div class="flex flex-row mt-2 mb-2">
		<div class="flex-none w-5">
			<CalendarIcon />
		</div>
		<div class="inline-flex items-center ml-2">
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
	</div>
</template>

<script>
import { CalendarIcon } from '@heroicons/vue/outline'

export default {
	components: {
		CalendarIcon
	}
}
</script>