<!-- TODO: bg color for default, hover & focus... overall look of page too -->
<template>
	<li>
		<a href="#" :class="['block mb-4 border border-gray-100 bg-white hover:bg-gray-200', hideContent ? 'rounded-30px hover:rounded-30px' : 'rounded-30px hover:rounded-30px']">
			<div class="px-4 py-4 flex items-center">
				<div :class="['flex-1', hideContent ? '' : 'my-4']">

					<div :class="['flex text-sm', hideContent ? '' : 'hidden']">
						<p class="font-thin text-gray-500">Pending (0/2)</p>
					</div>

					<div :class="['flex-1', hideContent ? '' : '']">
						<h5 :class="['text-left text-header-five font-medium text-gray-900', hideContent ? 'mt-2' : '']">
							{{ title }}<span class="pl-1 text-red-500" v-if="!hideContent">*</span>
						</h5>
						<p class="mt-2 text-sm font-thin" v-if="!hideContent">{{ description }}</p>
					</div>

					<div :class="['inline-flex', showBadge ? 'mt-4' : 'hidden']">
						<ButtonOutlineGrey text="&euro;10" class="w-20 py-2" />
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
		hideContent: {
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