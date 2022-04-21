<template>
	<div class="flex flex-row mt-2 mb-2">
		<div class="flex-none w-5">
			<CalendarIcon />
		</div>
		<div class="inline-flex items-center ml-2">
			<div class="grid grid-rows-3 grid-flow-col gap-1">
				<div>
					<h6 class="text-header-six font-semibold">
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
		<div class="flex grow justify-end items-center mr-4">
			<CheckboxRightWithContainerAndLabelLeft />
		</div>
	</div>
</template>

<script>
import CheckboxRightWithContainerAndLabelLeft from '../../../../components/form/CheckboxRightWithContainerAndLabelLeft.vue'

import { CalendarIcon } from '@heroicons/vue/outline'

export default {
	components: {
		CheckboxRightWithContainerAndLabelLeft,
		CalendarIcon
	}
}
</script>