<template>
	<div class="flex flex-col">
		<a href="#" class="flex bg-green-500 hover:bg-green-300 focus:bg-green-400 py-4 px-4">
			<div class="inline-flex grow items-center font-bold">My Budget:<span class="pl-1">&euro;300-350</span></div>
			<div class="grow-0 items-center">
				<ChevronRightIcon class="w-8 h-8 text-purple-900" aria-hidden="true" />
			</div>
		</a>
		<div class="grid grid-cols-2 gap-4 gap-x-2 py-6">
			<div><ButtonGhost text="Cancel" /></div>
			<div><PrimaryButton text="Complete" class="w-button-sm py-4" /></div>
		</div>
	</div>
</template>

<script>
import ButtonGhost from '../form/buttons/ButtonGhost.vue'
import PrimaryButton from '../form/buttons/ButtonPrimary.vue'

import { ChevronRightIcon } from '@heroicons/vue/solid'

export default {
	components: {
		ButtonGhost,
		PrimaryButton,
		ChevronRightIcon
	}
}
</script>