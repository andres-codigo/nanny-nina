<template>
	<div class="flex flex-row">
		<div class="basis-11/12">
			<div :class="['flex items-center px-4', hideContent ? 'py-6' : 'py-2']">
				<div :class="['mr-2', hideStatusIcon ? 'hidden' : '']">
					<slot name="iconLeft"></slot>
				</div>
				<div :class="['flex flex-col', hideContent ? 'my-2' : 'my-4 ml-2']">

					<div :class="['flex  text-xs relative -top-2', hidePending ? 'hidden' : '']">
						<p class="font-thin text-gray-500">Pending (0/2)</p>
					</div>

					<div class="flex flex-col">
						<h5 class="text-header-five text-purple-900 font-semibold antialiased -mt-2">
							{{ title }}<span :class="['pl-1 text-red-500', hideMandatoryRedStar ? 'hidden' : '']">*</span>
						</h5>
						<span :class="['inline-flex mt-2 font-medium', isCaregiverHostOptionDescription ? 'text-xs' : 'text-sm']" v-if="!hideContent">{{ description }}</span>
					</div>

					<div :class="['inline-flex', showBadge ? 'mt-4' : 'hidden']">
						<ButtonPreferenceOutlineGrey text="&euro;10" class="text-sm w-20 py-3 mr-2" />
						<ButtonPreferenceOutlineGrey text="&euro;15" class="text-sm w-20 py-3" />
					</div>
				</div>
			</div>
		</div>
		<div class="basis-1/12 inline-flex items-center">
			<div :class="['w-full pr-4', hideHyperlinkIcon ? 'hidden' : '']">
				<Img src="./assets/svg/other/chevron-right-black.svg" />
			</div>
		</div>
	</div>
</template>


<script>
import ButtonPreferenceOutlineGrey from '../buttons/ButtonPreferenceOutlineGrey.vue'
import Img from '../dom-elements/Img.vue'

export default {
	components: {
		ButtonPreferenceOutlineGrey,
		Img,
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
		isCaregiverHostOptionDescription: {
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