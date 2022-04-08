<template>
	<div class="flex mt-6">
		<div class="basis-1/3">
			<div class="flex h-full">
				<div class="inline-flex items-center"><a href="#" target="_self" class="anchor-with-underline text-blue-500">Price <span class="font-bold">&euro;13-15</span>/hr</a></div>
				<div class="inline-flex items-center pl-1"><ChevronRightIcon class="w-5 h-5 text-blue-500" /></div>
			</div>
		</div>
		<div class="basis-2/3">
			<div class="flex justify-end">
				<div class="inline-flex px-6"><ButtonGhost text="Cancel" /></div>
				<div class="inline-flex"><PrimaryButton text="Complete" class="w-button-overview py-4" /></div>
			</div>
		</div>
	</div>
</template>

<script>
import ButtonGhost from '../../../../../components/buttons/ButtonGhost.vue'
import PrimaryButton from '../../../../../components/buttons/ButtonPrimary.vue'

import { ChevronRightIcon } from '@heroicons/vue/solid'

export default {
	components: {
		ButtonGhost,
		PrimaryButton,
		ChevronRightIcon
	}
}
</script>