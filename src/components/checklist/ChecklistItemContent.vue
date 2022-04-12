<template>
	<div :class="['flex items-center px-4', hideContent ? 'py-6' : 'py-2']">
		<div :class="['mr-2 flex-shrink-0', hideStatusIcon ? 'hidden' : '']">
			<slot name="iconLeft"></slot>
		</div>
		<div :class="['flex-1', hideContent ? 'my-2' : 'my-4 ml-2']">

			<div :class="['flex text-xs relative -top-2', hidePending ? 'hidden' : '']">
				<p class="font-thin text-gray-500">Pending (0/2)</p>
			</div>

			<div class="flex-1">
				<h5 class="text-left text-header-five text-purple-900 font-semibold antialiased -mt-2">
					{{ title }}<span :class="['pl-1 text-red-500', hideMandatoryRedStar ? 'hidden' : '']">*</span>
				</h5>
				<span :class="['inline-flex mt-2 font-medium', isHostOptionDescription ? 'text-xs' : 'text-sm']" v-if="!hideContent">{{ description }}</span>
			</div>

			<div :class="['inline-flex', showBadge ? 'mt-4' : 'hidden']">
				<ButtonOutlineGrey text="&euro;10" class="text-sm w-20 py-3 mr-2" />
				<ButtonOutlineGrey text="&euro;15" class="text-sm w-20 py-3" />
			</div>
		</div>
		<div :class="['ml-2 w-5', hideHyperlinkIcon ? 'hidden' : '']">
			<ChevronRightIcon class="relative right-0 top-1 w-5 h-5 text-gray-400" aria-hidden="true" />
		</div>
	</div>
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
		hideMandatoryRedStar: {
			type: Boolean,
			default: true
		},
		showBadge: {
			type: Boolean,
			default: false
		},
		isHostOptionDescription: {
			type: Boolean,
			default: false
		},
		hideHyperlinkIcon: {
			type: Boolean,
			default: false
		},
		title: String,
		description: String
	}
}
</script>