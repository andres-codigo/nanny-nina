<template>
	<li>
		<a :class="['block hover:bg-lilac-50 focus:bg-green-100', displayBorderBottom ? 'border-b border-b-gray-50' : '']" href="#" target="_self">
			<div class="flex flex-row">
				<div class="basis-11/12">
					<div :class="['flex items-center', isHelpItem ? 'py-2' : 'py-6']">
						<div :class="[isHelpItem ? 'ml-8 mr-2' : 'mx-2']" v-if="displayLeftSvg">
							<Img :src="leftSvg" />
						</div>
						<div class="flex flex-col my-2 ml-2">
							<div class="flex flex-col">
								<p :class="['text-purple-900', isHelpItem ? 'text-lg font-medium' : '-mt-2 mb-1']">{{ header }}</p>
								<p :class="['text-xs', isHelpItem ? 'text-gray-500 -pt-2 leading-none' : '']" v-if="displaySubHeader">{{ subHeader }}</p>
							</div>
						</div>
					</div>
				</div>
				<div class="inline-flex items-center basis-1/12">
					<div class="w-full pr-4"><Img :src="rightSvg" /></div>
				</div>
			</div>
		</a>
	</li>
</template>

<script>
import Img from '../dom-elements/Img.vue'

export default {
	components: {
		Img
	},
	props: {
		displayBorderBottom: {
			type: Boolean,
			default: true
		},
		leftSvg: {
			type: String,
			default: './assets/svg/other/group-add-green-bg-blue-fg.svg'
		},
		displayLeftSvg: {
			type: Boolean,
			default: true
		},
		rightSvg: {
			type: String,
			default: './assets/svg/other/chevron-right-black.svg'
		},
		header: {
			type: String,
			default: 'Referrals'
		},
		subHeader: {
			type: String,
			default: 'You can pay out 24hrs after payment has been received'
		},
		displaySubHeader: {
			type: Boolean,
			default: true
		},
		isHelpItem: {
			type: Boolean,
			default: false
		}
	}
}
</script>