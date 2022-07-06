<template>
	<div class="flex border-b border-b-1">
		<div class="inline-flex grow overflow-x-scroll py-4 no-scrollbar items-center">
			<slot name="one"></slot>
			<slot name="two"></slot>
			<slot name="three"></slot>
			<slot name="four"></slot>
			<slot name="five"></slot>
			<slot name="six"></slot>
			<slot name="seven"></slot>
		</div>
	</div>
</template>

<script>
import Img from '../../dom-elements/Img.vue'

import { AdjustmentsIcon } from '@heroicons/vue/solid'

export default {
	components: {
		Img,
		AdjustmentsIcon
	}
}
</script>