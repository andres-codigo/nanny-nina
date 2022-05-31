<template>
	<li>
		<a :class="['block hover:bg-lilac-50 focus:bg-green-100', displayBorderBottom ? 'border-b border-b-gray-50' : '']" href="#" target="_self">
			<div class="flex flex-row">
				<div class="basis-11/12">
					<div :class="['flex items-center', isHelpItem ? 'py-2' : 'py-6']">
						<div :class="[isHelpItem ? 'ml-8 mr-2' : 'mx-2']">
							<Img :src="leftSvg" />
						</div>
						<div class="flex flex-col ml-2 my-2">
							<div class="flex flex-col">
								<p :class="['text-purple-900', isHelpItem ? '' : '-mt-2 mb-1']">{{ header }}</p>
								<p :class="['text-xs', isHelpItem ? 'text-gray-500' : '']" v-if="displaySubHeader">{{ subHeader }}</p>
							</div>
						</div>
					</div>
				</div>
				<div class="basis-1/12 inline-flex items-center">
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