<template>
	<div :class="badgeClass" class="float-right w-28 h-9 inline-flex rounded-3xl items-center justify-center py-2 px-2">
		<Img :src="badgeSvg" class="w-5 h-5" alt="" />
		<span class="text-sm px-1">{{ badgeText }}</span>
	</div>
</template>

<script>
import Img from '../dom-elements/Img.vue'

export default {
	components: {
		Img
	},
	props: {
		badgeClass: {
			type: String,
			default: 'bg-purple-500 text-white'
		},
		badgeSvg: {
			type: String,
			default: './assets/svg/other/hourglass.svg'
		},
		badgeText: {
			type: String,
			default: '+2 days'
		}
	}
}
</script>