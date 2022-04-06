<!-- TODO: bg color for default, hover & focus... overall look of page too -->
<template>
	<li>
		<a href="#" target="_self" class="block w-full mb-4 border border-gray-100 bg-white hover:bg-gray-200 rounded-30px hover:rounded-30px">
			<div class="flex items-center px-4 py-4">
				<div :class="['mr-2 flex-shrink-0', hideStatusIcon ? 'hidden' : '']">
					<slot name="iconLeft"></slot>
				</div>
				<div :class="['flex-1', hideContent ? 'my-2' : 'my-4 mx-2']">

					<div :class="['flex text-xs relative -top-2', hidePending ? 'hidden' : '']">
						<p class="font-thin text-gray-500">Pending (0/2)</p>
					</div>

					<div class="flex-1">
						<h5 class="text-left text-header-five font-medium antialiased -mt-2">
							{{ title }}<span :class="['pl-1 text-red-500', hideStar ? 'hidden' : '']">*</span>
						</h5>
						<p class="mt-2 text-sm font-thin" v-if="!hideContent">{{ description }}</p>
					</div>

					<div :class="['inline-flex', showBadge ? 'mt-4' : 'hidden']">
						<ButtonOutlineGrey text="&euro;10" class="text-sm w-20 py-2" />
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
import ButtonOutlineGrey from '../buttons/ButtonOutlineGrey.vue'

import { ChevronRightIcon } from '@heroicons/vue/solid'

export default {
	components: {
		ButtonOutlineGrey,
		ChevronRightIcon,
	},
	props: {
		hideStatusIcon: {
			type: Boolean,
			default: false
		},
		hideContent: {
			type: Boolean,
			default: true
		},
		hidePending: {
			type: Boolean,
			default: false
		},
		hideStar: {
			type: Boolean,
			default: true
		},
		showBadge: {
			type: Boolean,
			default: false
		},
		title: String,
		description: String
	}
}
</script>